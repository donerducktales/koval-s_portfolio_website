import { Locale } from "next-intl";

export type Translations = {
  [key in Locale]: string;
};
