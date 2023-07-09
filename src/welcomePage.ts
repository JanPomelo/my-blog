import Profile from "./img/profile.jpg";
import Instagram from "./img/instagram.svg";
import Twitter from "./img/twitter.svg";
import TikTok from "./img/logo-tiktok.svg";
import Youtube from "./img/logo-youtube.svg";
import Threads from "./img/threads-logo.webp";
import LinkedIn from "./img/linkedin.svg";

const main: HTMLElement = document.querySelector("main");

export function createWelcome(): HTMLDivElement {
  const div: HTMLDivElement = document.createElement("div");
  div.classList.add("py-3", "flex", "flex-col", 'h-full', "gap-5", 'justify-between');
  div.appendChild(createWelcomeParagraph());
  div.appendChild(createLatestPosts());
  div.appendChild(createSocials());
  return div;
}

function createWelcomeParagraph(): HTMLDivElement {
  const div: HTMLDivElement = document.createElement("div");
  div.classList.add(
    "flex",
    "flex-col",
    "gap-2",
    "lg:grid",
    "lg:grid-cols-2",
    "relative"
  );
  const heading: HTMLHeadingElement = document.createElement("h1");
  heading.innerText = "Welcome, stranger!";
  heading.classList.add("font-bold", "text-3xl");
  const section: HTMLElement = document.createElement("section");
  section.innerText = `Hello you! I am glad you found your way onto my website. My name is Jan and I am 28 years old. I currently live in Bangkok. I was born and raised in Germany but decided to move abroad in 2022 since I was not happy in Germany anymore.
In this blog I will write about my current life, how I landed in Bangkok, my general thougths and some other stuff. 
Right now, this page is barely filled with content since I am just starting to implement writing as a habit in my life. I hope you don't mind.
My main goal with this blog is to give some value to the people reading the articles published here.  Feel free to browse through the different pages. Maybe you find something that inspires you.`;
  section.classList.add("whitespace-pre-line", "lg:col-start-1");
  const img = document.createElement("img");
  img.src = Profile;
  img.classList.add(
    "absolute",
    "invisible",
    "lg:relative",
    "lg:visible",
    "rounded-full",
    "h-64",
    "w-64",
    "object-cover",
    "lg:col-start-2",
    "lg:row-span-2",
    "lg:mx-auto"
  );
  div.appendChild(heading);
  div.appendChild(img);
  div.appendChild(section);
  return div;
}

function createLatestPosts(): HTMLDivElement {
  const div: HTMLDivElement = document.createElement("div");
  div.classList.add("gap-3", "flex", "flex-col");
  const heading: HTMLHeadingElement = document.createElement("h2");
  heading.innerText = "Latest Posts";
  heading.classList.add("font-bold", "text-3xl");
  const description: HTMLElement = document.createElement("section");
  description.innerText =
    "Here you will find the latest posts, thoughts and other stuff that may help you. Just click on the the headings below to read the post in full length. I hope you enjoy it!";
  const posts: HTMLDivElement = document.createElement("div");
  posts.classList.add("flex", "w-full", "h-52", "bg-gray-100", "gap-8");
  div.appendChild(heading);
  div.appendChild(description);
  div.appendChild(posts);
  posts.appendChild(createLatestPost1());
  return div;
}

function createLatestPost1(): HTMLAnchorElement {
  const a: HTMLAnchorElement = document.createElement("a");
  a.href = "jobOfferThailand.html";
  const div: HTMLDivElement = document.createElement("div");
  div.classList.add(
    "bg-white",
    "p-3",
    "rounded-xl",
    "border-2",
    "border-black",
    "shadow-xl",
    "shadow-gray-600"
  );
  const heading: HTMLHeadingElement = document.createElement("h3");
  heading.classList.add("text-xl", "font-bold");
  heading.innerText = "Why I declined my first job offer in Thailand";
  div.appendChild(heading);
  a.appendChild(div);
  return a;
}

function createSocials(): HTMLDivElement {
  const div: HTMLDivElement = document.createElement("div");
  div.classList.add("flex", "flex-col", "gap-3",'pb-5');
  const heading: HTMLHeadingElement = document.createElement("h2");
  heading.innerText = "How to connect with me";
  heading.classList.add("font-bold", "text-3xl");
  const description: HTMLElement = document.createElement("section");
  description.innerText =
    "I would love if you could give me some feedback regarding the things I write down or the website in general. To do this, you can contact me on various social media platforms. Thery are linked below. Just click on the icons below and you will be directed. Thank you very much!";
  const icons: HTMLDivElement = document.createElement("div");
  icons.classList.add(
    "flex",
    "flex-wrap",
    "gap-10",
    "justify-center",
    "lg:justify-start"
  );
  createImgAndAnchor(icons, Threads, "https://www.threads.net/@Jan_pomelo");
  createImgAndAnchor(icons, Instagram, "https://www.instagram.com/Jan_pomelo/");
  createImgAndAnchor(
    icons,
    LinkedIn,
    "https://www.linkedin.com/in/jan-steikowski-644176224/"
  );
  createImgAndAnchor(icons, TikTok, "https://www.tiktok.com/@jan.somoh");
  createImgAndAnchor(
    icons,
    Youtube,
    "https://www.youtube.com/channel/UChVObrr3UcUc3eMhM8yOnXA"
  );
  createImgAndAnchor(icons, Twitter, "https://www.twitter.com/jan_pomelo/");
  div.appendChild(heading);
  div.appendChild(description);
  div.appendChild(icons);
  return div;
}

function createImgAndAnchor(
  div: HTMLDivElement,
  img: "*svg" | "*webp" | "*.png",
  link: string
): void {
  const anchorElement: HTMLAnchorElement = document.createElement("a");
  const imgEl: HTMLImageElement = document.createElement("img");
  anchorElement.appendChild(imgEl);
  anchorElement.href = link;
  anchorElement.target = "_blank";
  imgEl.src = img;
  imgEl.classList.add("h-10");
  div.appendChild(anchorElement);
}
