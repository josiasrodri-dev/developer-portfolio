import Header from "./header.js";
import Footer from "./footer.js";

export default function MainLayout({content}){
    return(`
        ${Header()}
        <main>${content}</main>
        ${Footer()}
    `)
}