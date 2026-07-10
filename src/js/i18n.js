import en from "../lang/en.json" with {type: "json"};
import es from "../lang/es.json" with {type: "json"};

const languages = {
    en,
    es
};

const defaultLanguage = "en"

export let currentLanguage = localStorage.getItem("lang") || defaultLanguage;

export function setLanguage(lang){
    currentLanguage = lang;
    localStorage.setItem("lang", lang)
}

export function t(path){
    return path.split(".").reduce(
        (obj, key) => obj?.[key],
        languages[currentLanguage]
    );
}