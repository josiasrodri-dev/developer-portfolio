import { setLanguage } from "./i18n.js";
import { router } from "./router.js";

export function initSidebar(){
    let sidebar_btn = document.getElementById("sidebar_btn");
    let sidebar = document.querySelector(".-vnav");

    if(!sidebar || !sidebar_btn) return

    sidebar_btn.addEventListener("click", (e) => {
        e.stopPropagation();
        sidebar.classList.toggle("opened");
    });

    document.addEventListener("click", (e) => {
        if (!sidebar.classList.contains("opened")) return;
        
        if (sidebar.contains(e.target)) return;

        sidebar.classList.remove("opened")
    });

    sidebar.addEventListener("click", (e) => {
        if(e.target.closest("a")){
            sidebar.classList.remove("opened")
        }
    });

}

export function setYear(){
    let year_lbl = document.getElementById("year");
    let year = new Date().getFullYear();
    year_lbl.textContent = year
}

export function initLangSelector(){
    let switch_lang_btn = document.querySelector(".lang-switch");
    let lang_selector = document.querySelector(".lang-selector")

    if (!switch_lang_btn || !lang_selector) return;

    switch_lang_btn.addEventListener("click", () => {
        lang_selector.classList.toggle("visible")
    })

    let languages = document.querySelectorAll(".lang-selector > button");

    languages.forEach(lang => {
        lang.addEventListener("click", () => {
            setLanguage(lang.textContent.trim().toLowerCase());
            router();
        })

    });

    
}

export function toggleDownloadModal(){
    let btn = document.getElementById("download-btn");
    let modal = document.querySelector(".cv-options");

    btn.addEventListener("click", () => {
        modal.classList.toggle("visible");
        console.log(modal)
    });
}