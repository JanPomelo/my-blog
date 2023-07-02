export function createHeader(): HTMLElement {
  // creating header element
  const header: HTMLElement = document.createElement("header");
  header.classList.add(
    "bg-black",
    "text-white",
    "flex",
    "flex-col",
    "justify-center",
    "items-center",
    "h-16"
  );
  // creating text in header
  const title: HTMLElement = document.createElement("p");
  title.innerText = "JanPomelo";
  title.classList.add("text-3xl");
  const subTitle: HTMLElement = document.createElement("p");
  subTitle.innerText = "thoughts and other stuff.";
  header.appendChild(title);
  header.appendChild(subTitle);
  return header;
}

export function createFooter(): HTMLElement {
  // createing footer element
  const footer: HTMLElement = document.createElement("footer");
  footer.classList.add(
    "bg-black",
    "text-white",
    "flex",
    "flex-col",
    "justify-center",
    "items-center",
    "h-16"
  );
  const footerText: HTMLElement = document.createElement("p");
  footerText.innerText = "All Rights Reserved";
  footer.appendChild(footerText);
  return footer;
}

export function createMain(): HTMLElement {
  const main: HTMLElement = document.createElement("main");
  main.classList.add("grow");
  return main;
}
