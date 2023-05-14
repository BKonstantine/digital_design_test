import "./data.js";
import "./utils.js";
import { fruits, vegetables, berries } from "./data.js";
import { getFormattedDate } from "./utils.js";

const themeButton = document.querySelector(".checkbox__real");
const navItems = Array.from(document.querySelectorAll(".nav__item"));
const fruitsContainer = document.querySelector("#fruits-container");
const vegetablesContainer = document.querySelector("#vegetables-container");
const berriesContainer = document.querySelector("#berries-container");
const templateProductCard = document.querySelector(
  ".template-product-card"
).content;
const scrollButton = document.querySelector(".scroll-button");

const changeColorScheme = () => {
  if (colorScheme.getAttribute("href") === "./color-scheme/light.css") {
    colorScheme.href = "./color-scheme/dark.css";
  } else {
    colorScheme.href = "./color-scheme/light.css";
  }
};

const colorScheme = document.querySelector("#color-scheme");

const scrollIntoCategory = (id) => {
  const category = document.querySelector(`#${id}-category`);
  category.scrollIntoView({
    block: "start",
    behavior: "smooth",
  });
};

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
  cardDate.textContent = getFormattedDate("15.01.2023");
  return card;
};

const renderCard = (container, list) => {
  const cardList = list.map((item) => {
    return createProductCard(item);
  });
  container.append(...cardList);
};

window.addEventListener("scroll", () => {
  const scrollPosition = document.documentElement.scrollTop;
  if (scrollPosition >= 100) {
    scrollButton.classList.add("scroll-button_active");
  } else {
    scrollButton.classList.remove("scroll-button_active");
  }
});

themeButton.addEventListener("click", changeColorScheme);
navItems.forEach((item) => {
  item.addEventListener("click", () => scrollIntoCategory(item.id));
});
scrollButton.addEventListener('click', () => scrollIntoCategory('fruits'))
renderCard(fruitsContainer, fruits);
renderCard(vegetablesContainer, vegetables);
renderCard(berriesContainer, berries);
