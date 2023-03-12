import items from "./items";

export const imageLoader = () => {
  let cards = "";
  items.forEach((item) => {
    cards += `<div class="gallery__card">
    <img src="${item.url}" alt="${item.title}" class="gallery__card_img"></img>
    <h2 class="gallery__card_title">${item.title}</h2>
    </div>`;
  });
  return cards;
};
