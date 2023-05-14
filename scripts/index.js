import "./data.js";
import "./utils.js";

import { vegetables } from "./data.js";
import { getFormattedDate } from "./utils.js";

const themeButton = document.querySelector(".checkbox__real");
const navItems = Array.from(document.querySelectorAll(".nav__item"));
const vegetablesContainer = document.querySelector("#vegetables-container");
const templateProductCard = document.querySelector(
  ".template-product-card"
).content;

const changeColorScheme = () => {
  if (colorScheme.getAttribute("href") === "./color-scheme/light.css") {
    colorScheme.href = "./color-scheme/dark.css";
  } else {
    colorScheme.href = "./color-scheme/light.css";
  }
};

const colorScheme = document.querySelector("#color-scheme");
themeButton.addEventListener("click", changeColorScheme);

const scrollIntoCategory = (id) => {
  console.log(id);
  const categoryTitle = document.querySelector(`#${id}`);
  categoryTitle.scrollIntoView({
    block: "end",
    behavior: "smooth",
  });
};

navItems.forEach((item) => {
  item.addEventListener("click", () => scrollIntoCategory(item.id));
});

const createProductCard = (item) => {
  const card = templateProductCard
    .querySelector(".product-card")
    .cloneNode(true);

  const cardImage = card.querySelector(".product-card__image");
  const cardName = card.querySelector(".product-card__figcaption");
  const cardDate = card.querySelector(".product-card__date");

  cardImage.src = item.link;
  cardImage.alt = item.name;
  cardName.textContent = item.name;
  cardDate.textContent = getFormattedDate(Date.now());

  return card;
};

function renderCard() {
  const cardList = vegetables.map((item) => {
    return createProductCard(item);
  });
  vegetablesContainer.append(...cardList);
}

renderCard();
