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
  const post1Heading: string = "PlaceHolder1";
  const post2Heading: string = "PlaceHolder2";
  const post3Heading: string = "PlaceHolder3";
  const post4Heading: string = "PlacerHolder4";
  const post1Text: string =
    "Since there are currently no other posts on my website, this is a placeholder which will be filled as soon as there are other posts released. Stay tuned!";
  const post2Text: string =
    "Since there are currently no other posts on my website, this is a placeholder which will be filled as soon as there are other posts released. Stay tuned!";
  const post3Text: string =
    "Since there are currently no other posts on my website, this is a placeholder which will be filled as soon as there are other posts released. Stay tuned!";
  const post4Text: string =
    "Since there are currently no other posts on my website, this is a placeholder which will be filled as soon as there are other posts released. Stay tuned!";
  miniDiv.classList.add("flex", "flex-col", "grow", "justify-between", "gap-4");
  miniDiv.appendChild(createPost(post1Heading, post1Text));
  miniDiv.appendChild(createPost(post2Heading, post2Text));
  miniDiv.appendChild(createPost(post3Heading, post3Text));
  miniDiv.appendChild(createPost(post4Heading, post4Text));
  return div;
}

function createOtherPostHeading(): HTMLHeadingElement {
  const heading: HTMLHeadingElement = document.createElement("h2");
  heading.innerText = "Other interesting Posts";
  heading.classList.add("text-2xl", "font-bold", "self-center");
  return heading;
}

function createPost(headingText: string, textText: string): HTMLDivElement {
  const div: HTMLDivElement = document.createElement("div");
  div.classList.add("flex", "flex-col", "p-2", "bg-gray-200", "rounded-xl");
  const heading: HTMLHeadingElement = document.createElement("h3");
  heading.classList.add("font-bold", "text-lg", "mb-1");
  const text: HTMLElement = document.createElement("p");
  text.classList.add('otherPostPreview');
  heading.innerText = headingText;
  text.innerText = textText;
  div.appendChild(heading);
  div.appendChild(text);
  return div;
}
