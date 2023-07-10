export function createPreviewPostsForMainPage(
  headingText: string,
  textText: string,
  link: string = ""
): HTMLAnchorElement {
  const a: HTMLAnchorElement = document.createElement("a");
  a.href = link;
  a.classList.add(
    "xl:w-1/4",
    "min-w-[14rem]",
    "absolute",
    "invisible",
    "xl:visible",
    "xl:static",
    'h-full',
    "top-1/2",
    "left-1/2",
    "transform", "-translate-x-1/2",
    "-translate-y-1/2",
    'xl:transform-none'
  );
  const div: HTMLDivElement = document.createElement("div");
  div.classList.add(
    "bg-white",
    "p-3",
    "rounded-xl",
    "border-2",
    "border-black",
    "shadow-md",
    "shadow-gray-600",
    "w-full",
    "h-full",
    "p-4"
  );
  const heading: HTMLHeadingElement = document.createElement("h3");
  heading.classList.add("text-xl", "font-bold");
  heading.innerText = headingText;
  const text: HTMLElement = document.createElement("p");
  text.classList.add("article-preview", "h-2/3", "text-sm");
  text.innerText = textText;
  div.appendChild(heading);
  div.appendChild(text);
  a.appendChild(div);

  return a;
}
