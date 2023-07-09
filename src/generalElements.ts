import { createOtherPostsDiv } from "./otherPosts";

export function createHeader(): HTMLElement {
  // creating header element
  const header: HTMLElement = document.createElement("header");
  header.classList.add(
    "bg-black",
    "text-white",
    "flex",
    "flex-col",
    "justify-center",
    "items-center",
    "h-16"
  );
  // creating text in header
  const title: HTMLElement = document.createElement("p");
  title.innerText = "JanPomelo";
  title.classList.add("text-3xl", "font-bold");
  const subTitle: HTMLElement = document.createElement("p");
  subTitle.innerText = "thoughts and other stuff.";
  subTitle.classList.add("font-bold");
  header.appendChild(title);
  header.appendChild(subTitle);
  return header;
}

export function createFooter(): HTMLElement {
  // createing footer element
  const footer: HTMLElement = document.createElement("footer");
  footer.classList.add(
    "bg-black",
    "text-white",
    "flex",
    "flex-col",
    "justify-center",
    "items-center",
    "h-16"
  );
  const footerText: HTMLElement = document.createElement("p");
  footerText.innerText = "All Rights Reserved";
  footerText.classList.add("font-bold");
  footer.appendChild(footerText);
  return footer;
}

export function createMain(): HTMLElement {
  const main: HTMLElement = document.createElement("main");
  main.classList.add(
    "overflow-auto",
    "px-5",
    "py-5",
    "md:mx-12",
    "grow",
    "xl:mx-28",
    "2xl:mx-48"
  );
  return main;
}

export function createArticle(
  heading: string,
  text: string,
  date: string
): HTMLDivElement {
  const div: HTMLDivElement = document.createElement("div");
  div.classList.add("flex", "flex-col", "gap-3", "col-span-3");
  div.appendChild(createHeading(heading));
  div.appendChild(createText(text));
  div.appendChild(createArticleFooter(date));
  return div;
}

function createHeading(text: string): HTMLHeadingElement {
  const heading: HTMLHeadingElement = document.createElement("h1");
  heading.classList.add("font-bold", "text-3xl", "col-span-4");
  heading.innerText = text;
  return heading;
}

function createText(text: string): HTMLElement {
  const section: HTMLElement = document.createElement("section");
  section.classList.add("col-span-3", "text-justify");
  section.innerText = text;
  return section;
}

function createArticleFooter(text: string): HTMLElement {
  const p: HTMLElement = document.createElement("p");
  p.classList.add("text-gray-500", "text-right");
  p.innerText = text;
  return p;
}

export function createSideDiv(): HTMLDivElement {
  const div: HTMLDivElement = document.createElement("div");
  div.classList.add("flex", "flex-col", "gap-10");
  div.appendChild(createBackToMainButton());
  div.appendChild(createOtherPostsDiv());
  return div;
}

function createBackToMainButton(): HTMLAnchorElement {
  const a: HTMLAnchorElement = document.createElement("a");
  a.classList.add("self-center", "md:self-end");
  const button: HTMLButtonElement = document.createElement("button");
  button.classList.add(
    "border-2",
    "border-black",
    "rounded-xl",
    "bg-white",
    "px-3"
  );
  button.innerText = "Back to Main Page";
  a.appendChild(button);
  a.href = "index.html";
  return a;
}
