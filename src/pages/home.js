import MainLayout from "../layouts/mainLayout.js";
import {t} from "../js/i18n.js"

export function Home() {
  return MainLayout({
    content: `
      <h1>${t("hello")}</h1>
  `});
}