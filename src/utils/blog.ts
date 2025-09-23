import type { CollectionEntry } from "astro:content";

export type BlogLanguage = "es" | "en";

const localeByLanguage: Record<BlogLanguage, string> = {
  es: "es-MX",
  en: "en-US",
};

export function getPostSlug(entry: CollectionEntry<"blog">): string {
  return entry.slug;
}

export function formatBlogDate(
  date: Date,
  lang: BlogLanguage,
  options: Intl.DateTimeFormatOptions = { dateStyle: "long" },
): string {
  return new Intl.DateTimeFormat(localeByLanguage[lang], options).format(date);
}

export function getReadingTime(entry: CollectionEntry<"blog">): number {
  if (entry.data.readingTime) {
    return entry.data.readingTime;
  }

  const words = entry.body.trim().split(/\s+/).filter(Boolean).length;
  const wordsPerMinute = 200;
  return Math.max(1, Math.round(words / wordsPerMinute));
}

export function formatReadingTimeLabel(
  minutes: number,
  template: string,
): string {
  return template.replace("{minutes}", minutes.toString());
}

export function formatDateLabel(date: string, template: string): string {
  return template.replace("{date}", date);
}
