import { t } from "../js/i18n.js"

export default function Header(){
    return `
        <header class="split">
            <button class="mobile" id="sidebar_btn"> <i class="fa-solid fa-bars"></i> </button>
            <div class="navbar -vnav">
                <a href="/" class="navbar__links -vbuttons">Home</a>
                <a href="/about" class="navbar__links -vbuttons">Skills</a>
                <a href="/projects" class="navbar__links -vbuttons">Projects</a>
                <a href="/contact" class="navbar__links -vbuttons">Contact</a>
            </div>
            <div class="lang container">
                <button class="lang-switch btn btn--secondary btn--icon">
                    ${t("lang.icon")}
                    ${t("lang.name")}
                </button>
                <div class="container stack lang-selector">
                    <button class="btn btn--secondary btn--icon"><i class='icon usa-icon'></i>EN</button>
                    <button class="btn btn--secondary btn--icon"><i class='icon mex-icon'></i>ES</button>
                </div>
            </div>
        </header>
    `
}