import MainLayout from "../layouts/mainLayout.js";
import {t} from "../js/i18n.js"

export function Contact() {
  const list = t("contact.oportunities.list").map(item => `
        <p>${item}</p>
    `).join("");

  return MainLayout({
    content: `
      <div class="contact-title stack">
          <div class="contact-status split">
              <i class="available"></i>
              <h3>${t("contact.avialable")}</h3>
          </div>
          <h2>${t("contact.title")}</h2>
          <p>${t("contact.desc")}</p>
      </div>
      <div class="grid contact-grid">
          <div class="contact-card">
              <div class="contact-card__title split">
                  <i class="fa-solid fa-envelope"></i>
                  <h3>E-mail</h3>
              </div>

              <p class="contact-card__subtitle">rodriguezjosias@gmail.com</p>

              <a href="mailto:rodriguezjosias@gmail.com" class="btn contact-card__btn">${t("contact.email")}</a>
          </div>
          <div class="contact-card">
              <div class="contact-card__title split">
                  <i class="fa-brands fa-linkedin"></i>
                  <h3>LinkedIn</h3>
              </div>

              <p class="contact-card__subtitle">/in/josiasrodri/</p>

              <a href="https://www.linkedin.com/in/josiasrodri/" class="btn contact-card__btn">${t("contact.linkedin")}</a>
          </div>
          <div class="contact-card">
              <div class="contact-card__title split">
                  <i class="fa-brands fa-github"></i>
                  <h3>GitHub</h3>
              </div>

              <p class="contact-card__subtitle">@josiasrodri-dev</p>

              <a href="https://github.com/josiasrodri-dev" class="btn contact-card__btn">${t("contact.github")}</a>
          </div>
      </div>
      <div class="oportunities stack">
        <h2>${t("contact.oportunities.title")} </h2>
        <p>${t("contact.oportunities.desc")}</p>
        <div class="areas">
            <h3>${t("contact.oportunities.list-title")}</h3>
            <div class="list">
                ${list}
            </div>
        </div>
    </div>
  `});
}