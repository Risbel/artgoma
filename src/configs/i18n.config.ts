export const i18n = {
  defaultLocale: "en",
  locales: ["en", "es", "fr", "it", "ru", "de"],
} as const;

export type Locale = (typeof i18n)["locales"][number];
