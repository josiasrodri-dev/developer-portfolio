import MainLayout from "../layouts/mainLayout.js";
import {t} from "../js/i18n.js"

export function Projects() {
  return MainLayout({
    content: `
      <div class="grid">
        <div class="project-card stack">
            <div class="project-card__image">
              <img src="/assets/images/dev-portfolio.jpeg" alt="developer_portfolio">
            </div>

            <div class="project-card__visibility split">
              <i class="open-source"></i>
              <h3>${t("project.portfolio.visibility")}</h3>
            </div>
            <div class="project-card__title stack">
                <h3>${t("project.portfolio.title")}</h3>
                <p>${t("project.portfolio.desc")}</p>
            </div>

            <div class="project-card__tech wrap">
                <div class="tech-card html"><i class="icon html-icon"></i> HTML</div>
                <div class="tech-card css"><i class="icon css-icon"></i> CSS</div>
                <div class="tech-card js"><i class="icon js-icon"></i> JavaScript</div>
            </div>
            <div class="project-card__link">
                <a href="https://github.com/josiasrodri-dev/developer-portfolio" target="_blank" class="btn btn-github"><i class="fa-brands fa-github"></i> GitHub</a>
            </div>
        </div>

        <div class="project-card stack">
            <div class="project-card__image">
              <img src="/assets/images/mildelicias.jpeg" alt="mildelicias">
            </div>

            <div class="project-card__visibility split">
              <i class="open-source in-progress"></i>
              <h3>${t("project.mildelicias.visibility")}</h3>
            </div>
            <div class="project-card__title stack">
                <h3>${t("project.mildelicias.title")}</h3>
                <p>${t("project.mildelicias.desc")}</p>
            </div>

            <div class="project-card__tech wrap">
            <div class="tech-card php"><i class="icon php-icon"></i> PHP</div>
                <div class="tech-card html"><i class="icon html-icon"></i> HTML</div>
                <div class="tech-card css"><i class="icon css-icon"></i> CSS</div>
                <div class="tech-card js"><i class="icon js-icon"></i> JavaScript</div>
                <div class="tech-card mysql"><i class="icon mysql-icon"></i> MySql</div>
            </div>
            <div class="project-card__link">
                <div class="private-links">
                    <div>
                        <i class="fa-solid fa-lock"></i>
                        <h3>${t("project.agro-invoicer.visibility")}</h3>
                    </div>
                </div>
                <a href="https://github.com/josiasrodri-dev/mildelicias-legacy" target="_blank" class="btn btn-github"><i class="fa-brands fa-github"></i> GitHub</a>
            </div>
        </div>

        <div class="project-card stack">
            <div class="project-card__image">
              <img src="/assets/images/agro-invoicer.png" alt="agro-invoicer">
            </div>

            <div class="project-card__visibility split">
              <i class="fa-solid fa-lock"></i>
              <h3>${t("project.agro-invoicer.visibility")}</h3>
            </div>
            <div class="project-card__title stack">
                <h3>${t("project.agro-invoicer.title")}</h3>
                <p>${t("project.agro-invoicer.desc")}</p>
            </div>

            <div class="project-card__tech wrap">
                <div class="tech-card csharp"><i class="icon csharp-icon"></i> C#</div>
                <div class="tech-card windows-forms"><i class="icon windowsforms-icon"></i> Windows Forms</div>
                <div class="tech-card sqlite"><i class="icon sqlite-icon"></i> SQLite</div>
            </div>
            <div class="project-card__link">
                <div class="private-links">
                    <div>
                        <i class="fa-solid fa-lock"></i>
                        <h3>${t("project.agro-invoicer.visibility")}</h3>
                    </div>
                </div>
                <a href="#" class="btn btn-github"><i class="fa-brands fa-github"></i> GitHub</a>
            </div>
        </div>

        <div class="project-card stack">
            <div class="project-card__image">
              <img src="/assets/images/floralia.jpeg" alt="floralia">
            </div>

            <div class="project-card__visibility split">
              <i class="fa-solid fa-lock"></i>
              <h3>${t("project.floralia.visibility")}</h3>
            </div>
            <div class="project-card__title stack">
                <h3>${t("project.floralia.title")}</h3>
                <p>${t("project.floralia.desc")}</p>
            </div>

            <div class="project-card__tech wrap">
                <div class="tech-card laravel"><i class="icon laravel-icon"></i> Laravel</div>
                <div class="tech-card boostrap"><i class="icon boostrap-icon"></i> Boostrap</div>
                <div class="tech-card mysql"><i class="icon mysql-icon"></i> MySql</div>
            </div>
            <div class="project-card__link">
                <div class="private-links">
                    <div>
                        <i class="fa-solid fa-lock"></i>
                        <h3>${t("project.floralia.visibility")}</h3>
                    </div>
                </div>
                <a href="#" class="btn btn-github"><i class="fa-brands fa-github"></i> GitHub</a>
            </div>
        </div>
    </div>
  `});
}