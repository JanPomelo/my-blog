import Profile from "./img/profile.jpg";
import Instagram from "./img/instagram.svg";
import Twitter from "./img/twitter.svg";
import TikTok from "./img/logo-tiktok.svg";
import Youtube from "./img/logo-youtube.svg";
import Threads from "./img/threads-logo.webp";
import LinkedIn from "./img/linkedin.svg";
import { createPreviewPostsForMainPage } from "./previewMainPage";
import { Post } from "./PostType";

const main: HTMLElement = document.querySelector("main");

export function createWelcome(): HTMLDivElement {
  const div: HTMLDivElement = document.createElement("div");
  div.classList.add(
    "py-3",
    "flex",
    "flex-col",
    "h-full",
    "gap-5",
    "justify-between"
  );
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

function DoPostContents(): Post[] {
  const posts: Post[] = [];
  const previewHeading1: string =
    "Why I declined my first job offer in Thailand";
  const previewText1: string = `Today I declined a job offer. It was not just the first job offer i received since I am in Thailand (which would be a huge opportunity for me), but also the first job offer ever I declined in my life. This has many different reasons, but the main reason is that I and my time are more worth way more than the company was willing to offer me.`;
  const previewLink1 = "jobOfferThailand.html";
  const previewHeading2: string = "My Coding Journey - Part 1";
  const previewText2: string =
    "You are probably wondering why this page is looking the way it does right now. First of all: I like minimalistic designs. But that's of course not all. The main reason is that I am currently learing how to code - but let me explain this a little bit more. I am not fairly new in writing code. During my job as a Systems Engineer I build Simulation Programs for ECU-Tests with C++ and MATLAB/Simulink. Furthermore I also used Python for Toolchain automation.";
  const previewLink2 = "myCodingJourneyPart1.html";
  const previewHeading3: string = "PlaceHolder1";
  const previewText3: string = "";
  const previewLink3 = "";
  const previewHeading4: string = "PlaceHolder2";
  const previewText4: string = "";
  const previewLink4 = "";
  posts.push(
    new Post(previewHeading1, previewText1, previewLink1),
    new Post(previewHeading2, previewText2, previewLink2),
    new Post(previewHeading3, previewText3, previewLink3),
    new Post(previewHeading4, previewText4, previewLink4)
  );
  return posts;
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
  posts.classList.add(
    "flex",
    "w-full",
    "h-52",
    "gap-8",
    "justify-between",
    "pb-3",
    "px-1",
    "relative",
    "items-center",
    "xl:items-stretch"
  );
  div.appendChild(heading);
  div.appendChild(description);
  div.appendChild(posts);
  const back: HTMLElement = document.createElement("section");
  back.innerText = "arrow_left";
  back.classList.add(
    "xl:absolute",
    "xl:invisible",
    "material-symbols-outlined"
  );
  posts.appendChild(back);
  const allPostContent = DoPostContents();
  for (let i = 0; i < allPostContent.length; i++) {
    posts.appendChild(
      createPreviewPostsForMainPage(
        allPostContent[i].heading,
        allPostContent[i].text,
        allPostContent[i].link
      )
    );
  }
  const forth: HTMLElement = document.createElement("section");
  forth.innerText = "arrow_right";
  forth.classList.add(
    "xl:absolute",
    "xl:invisible",
    "material-symbols-outlined"
  );
  posts.appendChild(forth);
  shufflePosts(posts);
  return div;
}

function shufflePosts(posts: HTMLDivElement) {
  posts.children[1].classList.toggle("invisible");
  const back: HTMLElement = posts.children[0] as HTMLElement;
  back.addEventListener("click", () => {
    for (let i = 1; i < 5; i++) {
      if (!posts.children[i].classList.contains("invisible")) {
        if (i === 1) {
          posts.children[4].classList.toggle("invisible");
          animateBackWards(
            posts.children[i] as HTMLAnchorElement,
            posts.children[4] as HTMLAnchorElement
          );
          return;
        } else {
          animateBackWards(
            posts.children[i] as HTMLAnchorElement,
            posts.children[i - 1] as HTMLAnchorElement
          );
          posts.children[i - 1].classList.toggle("invisible");
          return;
        }
      }
    }
  });
  const forth: HTMLElement = posts.children[5] as HTMLElement;
  forth.addEventListener("click", () => {
    for (let i = 1; i < 5; i++) {
      if (!posts.children[i].classList.contains("invisible")) {
        if (i === 4) {
          posts.children[1].classList.toggle("invisible");
          animateForWards(
            posts.children[i] as HTMLAnchorElement,
            posts.children[1] as HTMLAnchorElement
          );
          return;
        } else {
          posts.children[i + 1].classList.toggle("invisible");
          animateForWards(
            posts.children[i] as HTMLAnchorElement,
            posts.children[i + 1] as HTMLAnchorElement
          );
          return;
        }
      }
    }
  });
}

function fontAnimationPreviewSlideCurDiv(
  element: HTMLElement,
  aniDur: number
): void {
  element.children[0].children[0].animate(
    [
      {
        fontSize: "1.25rem",
      },
      {
        fontSize: "0rem",
      },
    ],
    {
      iterations: 1,
      duration: aniDur,
    }
  );
  element.children[0].children[1].animate(
    [
      {
        fontSize: "0.875rem",
      },
      {
        fontSize: "0rem",
      },
    ],
    {
      iterations: 1,
      duration: aniDur,
    }
  );
}

function fontAnimationPreviewSlideNextDiv(
  element: HTMLElement,
  aniDur: number
): void {
  element.children[0].children[0].animate(
    [
      {
        fontSize: "0rem",
      },
      {
        fontSize: "1.25rem",
      },
    ],
    {
      iterations: 1,
      duration: aniDur,
    }
  );
  element.children[0].children[1].animate(
    [
      {
        fontSize: "0rem",
      },
      {
        fontSize: "0.75rem",
      },
    ],
    {
      iterations: 1,
      duration: aniDur,
    }
  );
}

function animateForWards(
  currentDiv: HTMLAnchorElement,
  nextDiv: HTMLAnchorElement
): void {
  const aniDur: number = 300;
  currentDiv.animate(
    [
      {
        width: "14rem",
        height: "100%",
        left: "50%",
      },
      {
        width: "0rem",
        height: '0%',
        left: "100%",
      },
    ],
    {
      iterations: 1,
      duration: aniDur,
    }
  );
  fontAnimationPreviewSlideCurDiv(currentDiv, aniDur);
  nextDiv.animate(
    [
      {
        width: "0rem",
        height: "0%",
        left: "0%",
      },
      {
        width: "14rem",
        height: "100%",
        left: "50%",
      },
    ],
    {
      iterations: 1,
      duration: aniDur,
    }
  );
  fontAnimationPreviewSlideNextDiv(nextDiv, aniDur);
  setTimeout(() => {
    currentDiv.classList.toggle("invisible");
  }, aniDur);
}

function animateBackWards(
  currentDiv: HTMLAnchorElement,
  nextDiv: HTMLAnchorElement
): void {
  const aniDur: number = 300;
  currentDiv.animate(
    [
      {
        width: "14rem",
        height: "100%",
        left: "50%",
      },
      {
        width: "0%",
        height: "0%",
        left: "0%",
      },
    ],
    {
      iterations: 1,
      duration: aniDur,
    }
  );
  fontAnimationPreviewSlideCurDiv(currentDiv, aniDur);
  nextDiv.animate(
    [
      {
        width: "0%",
        height: "0%",
        left: "100%",
      },
      {
        width: "14rem",
        height: "100%",
        left: "50%",
      },
    ],
    {
      iterations: 1,
      duration: aniDur,
    }
  );
  fontAnimationPreviewSlideNextDiv(nextDiv, aniDur);
  setTimeout(() => {
    currentDiv.classList.toggle("invisible");
  }, aniDur);
}

function createSocials(): HTMLDivElement {
  const div: HTMLDivElement = document.createElement("div");
  div.classList.add("flex", "flex-col", "gap-3");
  const heading: HTMLHeadingElement = document.createElement("h2");
  heading.innerText = "How to connect with me";
  heading.classList.add("font-bold", "text-3xl");
  const description: HTMLElement = document.createElement("section");
  description.innerText =
    "I would love if you could give me some feedback regarding the things I write down or the website in general. To do this, you can contact me on various social media platforms. They are linked below. Just click on the icons below and you will be directed. Thank you very much!";
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
