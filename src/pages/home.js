import MainLayout from "../layouts/mainLayout.js";

export function Home() {
  return MainLayout({
    content: `
      <h1>Hello World</h1>
  `});
}