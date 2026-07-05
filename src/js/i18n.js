import en from "../lang/en.json" with {type: "json"};
import es from "../lang/es.json" with {type: "json"};

const languages = {
    en,
    es
};

let currentLanguage = "es";

export function setLanguage(lang){
    currentLanguage = lang
}

export function t(key){
    return languages[currentLanguage][key] ?? key
}