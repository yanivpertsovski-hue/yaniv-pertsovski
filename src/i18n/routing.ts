import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["he"],
  defaultLocale: "he",
  localePrefix: "never", // no /he prefix — site lives at /
});
