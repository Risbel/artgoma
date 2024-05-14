import "server-only";
import type { Locale } from "@/configs/i18n.config";

export const dictionaries = {
  en: () => import("../../dictionaries/en.json").then((r) => r.default),
  es: () => import("../../dictionaries/es.json").then((r) => r.default),
  de: () => import("../../dictionaries/de.json").then((r) => r.default),
  fr: () => import("../../dictionaries/fr.json").then((r) => r.default),
  it: () => import("../../dictionaries/it.json").then((r) => r.default),
  ru: () => import("../../dictionaries/ru.json").then((r) => r.default),
};

export const getDictionary = async (locale: Locale) => dictionaries?.[locale]?.() ?? dictionaries.en();
