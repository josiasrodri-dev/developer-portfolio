import MainLayout from "../layouts/mainLayout.js";
import {t} from "../js/i18n.js"

export function About() {
  return MainLayout({
    content: `
      <h1>${t("about.title")}</h1>
  `});
}