import { initSidebar } from "./utils.js";
import { setYear } from "./utils.js";
import { initLangSelector } from "./utils.js";
import { toggleDownloadModal } from "./utils.js";

export function initUtilities(){
    initSidebar();
    setYear();
    initLangSelector();
    toggleDownloadModal();
}