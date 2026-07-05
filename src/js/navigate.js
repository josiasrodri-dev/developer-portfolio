import { router } from "./router.js";

export function navigate(path){
    window.history.pushState({}, "", path);
    router();
}