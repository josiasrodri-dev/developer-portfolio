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
            
            <div class="hero__cta stack">
            <div class="cluster">
                <a href="/projects" class="btn btn--accent">${t("home.project")}</a>
                <a href="/contact" class="btn btn--secondary">${t("home.contact")}</a>
            </div>
                
                <div class="container-lg cv-container">
                <button class="btn btn-lg btn--primary" id="download-btn">${t("home.cv-btn")}</button> 
                <div class="cv-options stack">
                    <a href="/assets/documents/cv/josias_rodriguez_cv_ats_en.pdf" download="Josias_Rodriguez_ATS_CV_EN.pdf" class="btn btn-lg btn--ghost">ATS CV - English</a>
                    <a href="/assets/documents/cv/josias_rodriguez_cv_ats_es.pdf" download="Josias_Rodriguez_ATS_CV_ES.pdf" class="btn btn-lg btn--ghost">ATS CV - Español</a>
                    <a href="/assets/documents/cv/josias_rodriguez_cv_creative_en.pdf" download="Josias_Rodriguez_Creative_CV_EN.pdf" class="btn btn-lg btn--ghost">Creative CV - English</a>
                    <a href="/assets/documents/cv/josias_rodriguez_cv_creativo_es.pdf" download="Josias_Rodriguez_Creative_CV_ES.pdf" class="btn btn-lg btn--ghost">CV Creativo - Español</a>
                </div>
            </div>
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