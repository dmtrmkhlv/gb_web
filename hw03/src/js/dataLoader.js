import items from "./items";

export const dataLoader = () => {
  let cards = "";
  items.forEach((item) => {
    switch (item.type) {
      case "image":
        cards += `<div class="gallery__card">
        <img src="${item.url}" alt="${item.title}" class="gallery__card_image"></img>
        <h2 class="gallery__card_title">${item.title}</h2>
        </div>`;
        break;

      case "audio":
        cards += `<div class="gallery__card">
        <audio controls class="gallery__card_audio">
        <source src="${item.url}" type="audio/mpeg" />
          <p>
           Ваш браузер не поддерживает HTML5 аудио. Вот взамен
            <a href="${item.url}">ссылка на аудио</a>
          </p>
        </audio>
          <h2 class="gallery__card_title">${item.title}</h2>
          </div>`;
        break;
    }
  });
  return cards;
};
