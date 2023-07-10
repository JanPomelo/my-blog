import {
  createHeader,
  createFooter,
  createMain,
  createArticle1,
  createHeading,
  createText,
  createArticleFooter,
  createSideDiv,
} from "./generalElements";
import "./style.css";
import OdinOverview  from "./img/odin-overview.png";

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
const articleText1: string = `You are probably wondering why this page is looking the way it does right now. First of all: I like minimalistic designs. But that's of course not all. The main reason is that I am currently learing how to code - but let me explain this a little bit more. I am not fairly new in writing code. During my job as a Systems Engineer I build Simulation Programs for ECU-Tests with C++ and MATLAB/Simulink. Furthermore I also used Python for Toolchain automation. <br><br>
But I am new to Web Development. Several months ago I decided to quit my job (that's another story to be honest) to figure out what I really want to do with my life. I was very interested in creating websites and small games with simple code. So I decided to start learning Web Development. After a few days of research I figured out that a website called 'The Odin Project' would give me a solid unterstanding in the topic of Web Development. If you are interested in Web Development definetily give the Website a try!<br><br>

As I said, this was several months ago. In the last couple of months I dedicaded most of my freetime after work with learning the Thai language and how to write simple websites and doing some smaller websites (check out my Weather Website <a href='https://janpomelo.github.io/weather-app' target='_blank'><u>here</u></a> if you want!). After finishing the Foundation Path at the Odin Project and further digging into the FullStack JavaScript Path (I am currently at the stage of learning a little bit of Computer Science Basics like Sorting Algorithms etc.), I decided that it's time to write my own website. First of all I want to implement writing in my life as a good habit and furthermore I also learn a ton if I make an own project.
`;
const odinPictureDiv: HTMLDivElement = document.createElement('div');
odinPictureDiv.classList.add('w-full', 'flex', 'flex-col', 'my-3', 'gap-2', 'items-center');
const odinView: HTMLImageElement = document.createElement('img');
odinView.src = OdinOverview;
odinView.classList.add('xl:w-1/2', 'self-center');
odinPictureDiv.appendChild(odinView);
const odinViewText: HTMLElement = document.createElement('p');
odinViewText.innerText = 'Overview over the Paths at The Odin Project';
odinViewText.classList.add('text-gray-600', 'text-md')
odinPictureDiv.appendChild(odinViewText);

const articleText2 = `So here I am, writing this stuff on a website fully build by my own, just with HTML, CSS and TypeScript. Of course there is a lot of room for improvement. But I am a little bit proud of myself to be honest. In the future, I want to write more about how I exactly learned how to code and give some updates on my current path. That's why I titled this article as 'Part 1'. I hope to give regular updates, at least once a month. So if you are interested in following me on this journey, it's definetly worth it visiting this website from time to time. (Of course there is also other cool stuff here, trust me).

<br><br>At last, I want to give a small glimpse into the future. As I said, I am currently in the Computer Science Section. Soon I am starting with React.js. Hopefully learning it will improve the look and feel of the whole website a lot. So maybe, if you are reading this in late 2023 or even 2024, the website will look much better (hopefully). `;
const artFooter: string = "07/10/2023 - Bangkok, Thailand";

const articleDiv = createArticle1();
articleDiv.appendChild(createHeading(heading));
articleDiv.appendChild(createText(articleText1));
articleDiv.appendChild(odinPictureDiv)
articleDiv.appendChild(createText(articleText2));
articleDiv.appendChild(createArticleFooter(artFooter));
main.appendChild(articleDiv);
main.appendChild(createSideDiv());
