import { createHeader, createFooter, createMain } from "./generalElements";
import "./style.css";
import { createWelcome } from "./welcomePage";

const body = document.querySelector("body");
body.appendChild(createHeader());
body.appendChild(createMain());
body.appendChild(createFooter());

const main = document.querySelector("main");
main.appendChild(createWelcome());
