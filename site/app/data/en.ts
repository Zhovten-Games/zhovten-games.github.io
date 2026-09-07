import source from "./en.json";
import type { LocaleContent, Post } from "../site-types";

const en: LocaleContent = {
  ...(source as LocaleContent),
  posts: (source.posts as Post[]).map((sourcePost) => ({
    ...sourcePost,
    body: sourcePost.body.trim(),
  })),
};

export default en;
