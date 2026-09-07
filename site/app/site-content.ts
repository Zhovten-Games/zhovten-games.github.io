import en from "./data/en";
import uk from "./data/uk";
import ru from "./data/ru";
import ja from "./data/ja";
import type { Locale, LocaleContent } from "./site-types";

const contentByLocale: Record<Locale, LocaleContent> = {
  en,
  uk,
  ru,
  ja,
};

export function getContent(locale: Locale): LocaleContent {
  return contentByLocale[locale];
}

export function hasPublishedLocale(locale: Locale): boolean {
  return Boolean(contentByLocale[locale]);
}

export function getPublishedLocales(): Locale[] {
  return Object.keys(contentByLocale) as Locale[];
}
