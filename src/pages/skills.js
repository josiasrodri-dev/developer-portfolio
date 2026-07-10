import MainLayout from "../layouts/mainLayout.js";
import { t } from "../js/i18n.js"

export function Skills() {
  return MainLayout({
    content: `
        <div class="container stack skills-title">
            <h1>${t("skills.title")}</h1>
            <p class="desc">${t("skills.desc")}</p>
        </div>

        <div class="grid">
            <div class="skills">
            <div class="techno-card">
                <div class="techno_card__title">
                    <h1>Frontend</h1>
                </div>

                <div class="wrap">
                  <div class="techno-card__skill">
                      <i class="icon html-icon"></i>
                      <p>HTML</p>
                  </div>
                  <div class="techno-card__skill">
                      <i class="icon css-icon"></i>
                      <p>CSS</p>
                  </div>
                  <div class="techno-card__skill">
                      <i class="icon js-icon"></i>
                      <p>JavaScript</p>
                  </div>
                  <div class="techno-card__skill">
                      <i class="icon boostrap-icon"></i>
                      <p>Boostrap</p>
                  </div>
                  <div class="techno-card__skill">
                      <i class="icon charts-icon"></i>
                      <p>Charts.js</p>
                  </div>
              </div>
              <div class="integrated-concepts">
                  <h3>${t("skills.concepts")}</h3>
      
                  <div class="wrap">
                      <div class="techno-card__skill">
                          <p>${t("skills.frontend.responsive")}</p>
                      </div>
                      <div class="techno-card__skill">
                          <p>${t("skills.frontend.ui")}</p>
                      </div>
                  </div>
              </div>
            </div>
        </div>

        <div class="skills">
          <div class="techno-card ">
              <div class="techno_card__title">
                  <h1>${t("skills.app-dev")}</h1>
              </div>

              <div class="wrap">
                  <div class="techno-card__skill">
                      <i class="icon php-icon"></i>
                      <p>PHP</p>
                  </div>
                  <div class="techno-card__skill">
                      <i class="icon laravel-icon"></i>
                      <p>Laravel</p>
                  </div>
                  <div class="techno-card__skill">
                      <i class="icon csharp-icon"></i>
                      <p>C#</p>
                  </div>
                  <div class="techno-card__skill">
                      <i class="icon windowsforms-icon"></i>
                      <p>Windows Form</p>
                  </div>
                  <div class="techno-card__skill">
                      <i class="icon net-icon"></i>
                      <p>.NET</p>
                  </div>
                  <div class="techno-card__skill">
                      <i class="icon java-icon"></i>
                      <p>Java</p>
                  </div>
              </div>
          </div>
      </div>

      <div class="skills">
          <div class="techno-card">
              <div class="techno_card__title">
                  <h1>${t("skills.database")}</h1>
              </div>

              <div class="wrap">
                  <div class="techno-card__skill">
                      <i class="icon mysql-icon"></i>
                      <p>MySQL</p>
                  </div>
                  <div class="techno-card__skill">
                      <i class="icon sqlite-icon"></i>
                      <p>SQLite</p>
                  </div>
                  
              </div>

              <div class="integrated-concepts">
                  <h3>${t("skills.concepts")}</h3>
                  
                  <div class="wrap">
                      <div class="techno-card__skill">
                          <p>${t("skills.db-concepts.design")}</p>
                      </div>
                      <div class="techno-card__skill">
                          <p>${t("skills.db-concepts.normalization")}</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div class="skills">
          <div class="techno-card">
              <div class="techno_card__title">
                  <h1>${t("skills.tools")}</h1>
              </div>

              <div class="wrap">
                  <div class="techno-card__skill">
                      <i class="icon git-icon"></i>
                      <p>git</p>
                  </div>
              </div>
          </div>
      </div>

      <div class="skills -creative">
        <div class="techno-card">
            <div class="techno_card__title">
                <h1>${t("skills.creative")}</h1>
            </div>

            <div class="wrap">
                <div class="techno-card__skill -illustrator">
                    <p>Adobe Illustrator</p>
                </div>
                <div class="techno-card__skill -photoshop">
                    <p>Adobe Photoshop</p>
                </div>
                <div class="techno-card__skill -animate">
                    <p>Adobe Animate</p>
                </div>
                <div class="techno-card__skill -after-efects">
                    <p>After Efects</p>
                </div>
            </div>
        </div>
    </div>
        </div>

        
        `});
}