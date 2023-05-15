import "./data.js";
import "./utils.js";
import { fruits, vegetables, berries } from "./data.js";
import { getFormattedDate } from "./utils.js";

const themeButton = document.querySelector(".color-scheme-button__real");
const scrollButton = document.querySelector(".scroll-button");
const burgerButton = document.querySelector("#burger-menu__toggle");
const headerNavList = document.querySelector(".nav__list_position_header");
const navItems = Array.from(document.querySelectorAll(".nav__item"));
const fruitsContainer = document.querySelector("#fruits-container");
const vegetablesContainer = document.querySelector("#vegetables-container");
const berriesContainer = document.querySelector("#berries-container");
const colorScheme = document.querySelector("#color-scheme");
const templateProductCard = document.querySelector(
  ".template-product-card"
).content;

/* Сменить цветовую схему */
const changeColorScheme = () => {
  if (colorScheme.getAttribute("href") === "./color-scheme/light.css") {
    colorScheme.href = "./color-scheme/dark.css";
  } else {
    colorScheme.href = "./color-scheme/light.css";
  }
};

/* Скоролл до категории */
const scrollIntoCategory = (id) => {
  const category = document.querySelector(`#${id}-category`);
  category.scrollIntoView({
    block: "start",
    behavior: "smooth",
  });
};

/* Создать карточку продукта */
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
  cardDate.textContent = getFormattedDate("15.12.2021");
  return card;
};

/* Отрендерить массив карточек */
const renderCard = (container, list) => {
  const cardList = list.map((item) => {
    return createProductCard(item);
  });
  container.append(...cardList);
};

const toggleClass = (item, className) => {
  item.classList.toggle(className);
};

/* Установить слушатели событий */
window.addEventListener("scroll", () => {
  const scrollPosition = document.documentElement.scrollTop;
  if (scrollPosition >= 100) {
    scrollButton.classList.add("scroll-button_active");
  } else {
    scrollButton.classList.remove("scroll-button_active");
  }
});

burgerButton.addEventListener("click", () => {
  toggleClass(headerNavList, "nav__list_active");
});

themeButton.addEventListener("click", changeColorScheme);
navItems.forEach((item) => {
  item.addEventListener("click", () => scrollIntoCategory(item.id));
});
scrollButton.addEventListener("click", () => scrollIntoCategory("fruits"));

renderCard(fruitsContainer, fruits);
renderCard(vegetablesContainer, vegetables);
renderCard(berriesContainer, berries);
