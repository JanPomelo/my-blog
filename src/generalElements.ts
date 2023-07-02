export function createHeader(): HTMLElement {
  // creating header element
  const header: HTMLElement = document.createElement("header");
  header.classList.add(
    "bg-black",
    "text-white",
    "flex",
    'flex-col',
    "justify-center",
    "items-center"
  );
  // creating text in header
  const title: HTMLElement = document.createElement("p");
  title.innerText = "JanPomelo";
  title.classList.add('text-3xl');
  const subTitle: HTMLElement = document.createElement('p');
  subTitle.innerText = 'thoughts and other stuff.'
  header.appendChild(title);
  header.appendChild(subTitle);
  
  return header;
}
