import { createPollBody } from "@twurple/api/lib/interfaces/helix/poll.external";
import { Post } from "./PostType";

const posts: Post[] = [];
posts.push(
  new Post(
    "Why I declined my first job offer in Thailand",
    `Today I declined a job offer. It was not just the first job offer i received since I am in Thailand (which would be a huge opportunity for me), but also the first job offer ever I declined in my life. This has many different reasons, but the main reason is that I and my time are more worth way more than the company was willing to offer me.`,
    "jobOfferThailand.html"
  )
);
posts.push(
  new Post("My Coding Journey - Part 1", "", "myCodingJourneyPart1.html")
);
posts.push(
  new Post(
    "placeHolder 1",
    "Since there are currently no other posts on my website, this is a placeholder which will be filled as soon as there are other posts released. Stay tuned!",
    ""
  )
);
posts.push(
  new Post(
    "placeHolder 2",
    "Since there are currently no other posts on my website, this is a placeholder which will be filled as soon as there are other posts released. Stay tuned!",
    ""
  )
);
posts.push(
  new Post(
    "placeHolder 3",
    "Since there are currently no other posts on my website, this is a placeholder which will be filled as soon as there are other posts released. Stay tuned!",
    ""
  )
);

export function createOtherPostsDiv(): HTMLDivElement {
  const div: HTMLDivElement = document.createElement("div");
  const miniDiv: HTMLDivElement = document.createElement("div");
  div.classList.add(
    "flex",
    "flex-col",
    "rounded-2xl",
    "border-2",
    "border-black",
    "px-3",
    "grow",
    "pt-3",
    "pb-8"
  );
  div.appendChild(createOtherPostHeading());
  div.appendChild(miniDiv);
  miniDiv.classList.add("flex", "flex-col", "grow", "justify-between", "gap-4");
  let i = 0;
  const currentPosts: number[] = [];
  while (i < 4) {
    const rndmPost: number = Math.floor(Math.random() * posts.length);
    let isDouble: boolean = false;
    for (let j = 0; j < currentPosts.length; j++) {
      if (rndmPost === currentPosts[j]) {
        isDouble = true;
      }
    }
    if (
      !isDouble &&
      !(
        posts[rndmPost].heading ===
        document.querySelector("main").querySelector("h1").innerText
      )
    ) {
      miniDiv.appendChild(
        createPost(
          posts[rndmPost].heading,
          posts[rndmPost].text,
          posts[rndmPost].link
        )
      );
      i++;
      currentPosts.push(rndmPost);
    }
  }
  return div;
}

function createOtherPostHeading(): HTMLHeadingElement {
  const heading: HTMLHeadingElement = document.createElement("h2");
  heading.innerText = "Other interesting Posts";
  heading.classList.add("text-2xl", "font-bold", "self-center");
  return heading;
}

function createPost(
  headingText: string,
  textText: string,
  link: string
): HTMLAnchorElement {
  const a: HTMLAnchorElement = document.createElement("a");
  a.href = link;
  const div: HTMLDivElement = document.createElement("div");
  div.classList.add("flex", "flex-col", "p-2", "bg-gray-200", "rounded-xl");
  const heading: HTMLHeadingElement = document.createElement("h3");
  heading.classList.add("font-bold", "text-lg", "mb-1");
  const text: HTMLElement = document.createElement("p");
  text.classList.add("otherPostPreview");
  heading.innerText = headingText;
  text.innerText = textText;
  div.appendChild(heading);
  div.appendChild(text);
  a.appendChild(div);
  return a;
}
