import Profile  from "./img/profile.jpg";

const main: HTMLElement = document.querySelector("main");

export function createWelcome(): HTMLDivElement {
  const div: HTMLDivElement = document.createElement("div");
  div.classList.add("py-3");
  div.appendChild(createWelcomeParagraph());
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
  section.innerText = `Hello you! I am glad you found your way onto my website.My name is Jan and I am 28 years old.I currently live in Bangkok.I was born and raised in Germany but decided to move abroad in 2022 since I was not happy in Germany anymore.
In this blog I will write about my current life, how I landed in Bangkok, my general thougths and some other stuff. 
Right now, this page is barely filled with content since I am just starting to implement writing as a habit in my life. I hope you don't mind.
My main goal with this blog is to give some value to the people reading the articles published here.  Feel free to browse through the different pages. Maybe you find something that inspires you.`;
  section.classList.add("whitespace-pre-line", "lg:col-start-1");
  const img = document.createElement("img");
  img.src = Profile;
  img.classList.add('absolute','invisible', 'lg:visible', 'rounded-full', 'h-64', 'w-64', 'right-20', 'top-2', 'object-cover')
  div.appendChild(heading);
  div.appendChild(img);
  div.appendChild(section);
  return div;
}
