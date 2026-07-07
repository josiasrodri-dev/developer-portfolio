import { initSidebar } from "./utils.js"
import { router } from "./router.js";
import { navigate } from "./navigate.js";
import { setLanguage } from "./i18n.js";

document.addEventListener("click", (e) => {
    const link = e.target.closest("a");

    if(!link) return;
    if (!link.getAttribute("href")?.startsWith("/")) return;

    e.preventDefault();
    navigate(link.getAttribute("href"))
})

setLanguage("en")

window.addEventListener("load", router);
window.addEventListener("popstate", router);
