import {
  createHeader,
  createFooter,
  createMain,
  createArticle,
  createSideDiv,
} from "./generalElements";
import "./style.css";

const body: HTMLBodyElement = document.querySelector("body");
body.appendChild(createHeader());
body.appendChild(createMain());
body.appendChild(createFooter());

const main: HTMLElement = document.querySelector("main");
main.classList.add(
  "flex",
  "flex-col",
  "gap-5",
  "md:grid",
  "md:grid-cols-4",
  "gap-8"
);
const heading: string = "My Coding Journey - Part 1";
const articleText: string = ``;
const artFooter: string = "07/10/2023 - Bangkok, Thailand";

main.appendChild(createArticle(heading, articleText, artFooter));
main.appendChild(createSideDiv());
