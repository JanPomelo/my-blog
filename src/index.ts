import { createHeader, createFooter, createMain } from "./generalElements";
import "./style.css";

const body = document.querySelector("body");
body.appendChild(createHeader());
body.appendChild(createMain());
body.appendChild(createFooter());
