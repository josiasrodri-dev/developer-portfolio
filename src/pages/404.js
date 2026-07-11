import { t } from "../js/i18n.js";

export function notFound(){
    return `
        <div class="not-found">
            <h1>404 - ${t("404.not-found")}</h1>
            <a href="/" class="btn btn--primary">${t("404.return")}</a>
        </div>
    `
}