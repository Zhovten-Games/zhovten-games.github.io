/** Cloudflare Worker entry point for the vinext-starter template. */
import { handleImageOptimization, DEFAULT_DEVICE_SIZES, DEFAULT_IMAGE_SIZES } from "vinext/server/image-optimization";
import handler from "vinext/server/app-router-entry";

interface Env {
  ASSETS: Fetcher;
  DB: D1Database;
  IMAGES: {
    input(stream: ReadableStream): {
      transform(options: Record<string, unknown>): {
        output(options: { format: string; quality: number }): Promise<{ response(): Response }>;
      };
    };
  };
}

interface ExecutionContext {
  waitUntil(promise: Promise<unknown>): void;
  passThroughOnException(): void;
}

// Image security config. SVG sources with .svg extension auto-skip the
// optimization endpoint on the client side (served directly, no proxy).
// To route SVGs through the optimizer (with security headers), set
// dangerouslyAllowSVG: true in next.config.js and uncomment below:
// const imageConfig: ImageConfig = { dangerouslyAllowSVG: true };

const worker = {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === "/_vinext/image") {
      const allowedWidths = [...DEFAULT_DEVICE_SIZES, ...DEFAULT_IMAGE_SIZES];
      return handleImageOptimization(request, {
        fetchAsset: (path) => env.ASSETS.fetch(new Request(new URL(path, request.url))),
        transformImage: async (body, { width, format, quality }) => {
          const result = await env.IMAGES.input(body).transform(width > 0 ? { width } : {}).output({ format, quality });
          return result.response();
        },
      }, allowedWidths);
    }

    const response = await handler.fetch(request, env, ctx);
    const contentType = response.headers.get("content-type") ?? "";

    if (!contentType.toLowerCase().includes("text/html")) {
      return response;
    }

    const html = await response.text();
    const normalized = moveTrailingScriptsIntoBody(html);
    const headers = new Headers(response.headers);
    headers.delete("content-length");

    return new Response(normalized, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  },
};

/**
 * Vinext can append React flight scripts after the document has already closed.
 * Keep those scripts inside the body so the serialized response remains valid HTML.
 */
function moveTrailingScriptsIntoBody(html: string): string {
  const lower = html.toLowerCase();
  const bodyClose = lower.lastIndexOf("</body>");
  const htmlClose = lower.lastIndexOf("</html>");

  if (bodyClose < 0 || htmlClose < bodyClose) {
    return html;
  }

  const tail = html.slice(bodyClose + "</body>".length);
  const scripts = tail.match(/<script\b[^>]*>[\s\S]*?<\/script>/gi) ?? [];
  const remainder = tail
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<\/html>/gi, "")
    .trim();

  if (!scripts.length || remainder) {
    return html;
  }

  return `${html.slice(0, bodyClose)}${scripts.join("")}</body></html>`;
}

export default worker;
