import MainLayout from "../layouts/mainLayout.js";
import {t} from "../js/i18n.js"

export function Contact() {
  return MainLayout({
    content: `
      <h1>${t("contact.title")}</h1>
  `});
}