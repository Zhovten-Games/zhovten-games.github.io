import type { Locale, Post, Project } from "../site-types";

const categories: Record<Exclude<Locale, "en">, Record<string, string>> = {
  uk: {
    announcements: "оголошення",
    articles: "статті",
    cases: "кейси",
    devlogs: "щоденники розробки",
    notes: "нотатки",
  },
  ru: {
    announcements: "объявления",
    articles: "статьи",
    cases: "кейсы",
    devlogs: "дневники разработки",
    notes: "заметки",
  },
  ja: {
    announcements: "告知",
    articles: "記事",
    cases: "ケース",
    devlogs: "開発ログ",
    notes: "ノート",
  },
};

const types: Record<Exclude<Locale, "en">, Record<string, string>> = {
  uk: {
    announcement: "оголошення",
    external_article: "зовнішня стаття",
    research_note: "дослідницька нотатка",
    case: "кейс",
    devlog: "щоденник розробки",
    note: "нотатка",
  },
  ru: {
    announcement: "объявление",
    external_article: "внешняя статья",
    research_note: "исследовательская заметка",
    case: "кейс",
    devlog: "дневник разработки",
    note: "заметка",
  },
  ja: {
    announcement: "告知",
    external_article: "外部記事",
    research_note: "研究ノート",
    case: "ケース",
    devlog: "開発ログ",
    note: "ノート",
  },
};

const kinds: Record<Exclude<Locale, "en">, Record<string, string>> = {
  uk: { game: "гра", tool: "інструмент", "external-portfolio": "зовнішнє портфоліо" },
  ru: { game: "игра", tool: "инструмент", "external-portfolio": "внешнее портфолио" },
  ja: { game: "ゲーム", tool: "ツール", "external-portfolio": "外部ポートフォリオ" },
};

const published: Record<Exclude<Locale, "en">, string> = {
  uk: "опубліковано",
  ru: "опубликовано",
  ja: "公開済み",
};

export function localizePosts(posts: Post[], locale: Exclude<Locale, "en">): Post[] {
  return posts.map((post) => ({
    ...post,
    categories: post.categories.map((category) => categories[locale][category] ?? category),
    type: types[locale][post.type] ?? post.type,
    status: post.status === "published" ? published[locale] : post.status,
    externalUrl:
      post.slug === "canon-horror-series-language-as-infection"
        ? "https://doi.org/10.5281/zenodo.19773963"
        : post.externalUrl,
  }));
}

export function localizeProjects(
  projects: Project[],
  locale: Exclude<Locale, "en">,
): Project[] {
  return projects.map((project) => ({
    ...project,
    kind: kinds[locale][project.kind] ?? project.kind,
  }));
}
