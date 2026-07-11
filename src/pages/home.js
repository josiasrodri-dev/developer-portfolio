import MainLayout from "../layouts/mainLayout.js";
import { t } from "../js/i18n.js"

export function Home() {
  return MainLayout({
    content: `
      <div class="hero stack">
        <div class="hero__image">
            <img src="./assets/images/josias-rodriguez.webp" alt="dev-profile-img">
        </div>
        <div class="hero__content stack">
            <div class="base-info stack">
                <h1 class="hero__title">Josías Rodríguez</h1>
                <h2 class="hero__subtitle">Fullstack Developer</h2>
                <p class="section__hero">${t("home.desc")}</p>
            </div>
            
            <div class="hero__cta">
                <a href="/projects" class="btn btn--primary">${t("home.project")}</a>
                <a href="/contact" class="btn btn--secondary">${t("home.contact")}</a>
            </div>
        </div>
        <div class="mobile stack">
            <a href="/projects" class="card stack">
                <h1 class="card__header"><i class="fa-solid fa-rocket"></i> ${t("home.mobile.project-title")}</h1>
                <h2 class="card__body">${t("home.mobile.project-desc")}</h2>
            </a>
            <a href="/skills" class="card stack">
                <h1 class="card__header"><i class="fa-solid fa-code"></i> ${t("home.mobile.skill-title")}</h1>
                <h2 class="card__body">${t("home.mobile.skill-desc")}</h2>
            </a>
            <a href="/contact" class="card stack">
                <h1 class="card__header"> <i class="fa-solid fa-envelope"></i> ${t("home.mobile.contact-title")}</h1>
                <h2 class="card__body">${t("home.mobile.contact-desc")}</h2>
            </a>
        </div>
      </div>
  `});
}