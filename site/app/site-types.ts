export const locales = ["en", "uk", "ru", "ja"] as const;

export type Locale = (typeof locales)[number];

export type LocalizedPages = {
  homeTitle: string;
  homeDescription: string;
  tagline: string;
  latest: string;
  blogTitle: string;
  blogDescription: string;
  projectsTitle: string;
  projectsDescription: string;
  authorsTitle: string;
  aboutTitle: string;
  aboutDescription: string;
  aboutBody: string;
  contactTitle: string;
  contactDescription: string;
  contactBody: string;
};

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  authors: string[];
  categories: string[];
  tags: string[];
  type: string;
  status: string;
  externalUrl: string;
  canonicalUrl: string;
  body: string;
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  kind: string;
  section?: "released" | "development" | "tool";
  authors: string[];
  studio: string;
  role: string;
  ownership: string;
  externalUrl: string;
  period?: string;
  skills?: string[];
  technology?: string;
  imageUrl?: string;
  imageAlt?: string;
  body: string;
};

export type Author = {
  slug: string;
  name: string;
  role: string;
  description: string;
  status: string;
  skills: string[];
  languages: string[];
  tools: string[];
  profileLinks: AuthorProfileLink[];
  body: string;
};

export type AuthorProfileLink = {
  kind: "linkedin" | "orcid" | "github" | "telegram";
  url: string;
};

export type LocaleContent = {
  locale: Locale;
  pages: LocalizedPages;
  posts: Post[];
  projects: Project[];
  authors: Author[];
};

export const isLocale = (value: string): value is Locale =>
  locales.includes(value as Locale);
