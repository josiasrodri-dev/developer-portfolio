import MainLayout from "../layouts/mainLayout.js";
import {t} from "../js/i18n.js"

export function Projects() {
  return MainLayout({
    content: `
      <h1>${t("project.title")}</h1>
  `});
}