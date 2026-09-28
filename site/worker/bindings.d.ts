// The optional database is a starter capability; this Site has no D1 binding.
declare namespace Cloudflare {
  interface Env {
    DB?: D1Database;
  }
}
