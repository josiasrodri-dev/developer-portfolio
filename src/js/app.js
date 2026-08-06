import { router } from "./router.js";
import { navigate } from "./navigate.js";
import { setLanguage } from "./i18n.js";

document.addEventListener("click", (e) => {
    const link = e.target.closest("a");

    if(!link) return;
    if (link.hasAttribute("download")) return;
    if (link.target === "_blank") return;


    e.preventDefault();
    navigate(link.getAttribute("href"))
})

window.addEventListener("load", router);
window.addEventListener("popstate", router);
