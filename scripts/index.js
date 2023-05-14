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
  cardDate.textContent = getFormattedDate(Date.now());
  return card;
};

const renderCard = (container, list) => {
  const cardList = list.map((item) => {
    return createProductCard(item);
  });
  container.append(...cardList);
};


window.addEventListener('scroll', () => { 
 
 const scrollPosition = document.documentElement.scrollTop;
  console.log(scrollPosition);

/* let headerWrapper = document.querySelector('.header-wrapper');
console.log(headerWrapper);

if(scrollTop >= 100){
  headerWrapper.classList.add('hide');
}else{    
  headerWrapper.classList.remove('hide');
} */
});

themeButton.addEventListener("click", changeColorScheme);
navItems.forEach((item) => {
  item.addEventListener("click", () => scrollIntoCategory(item.id));
});
renderCard(fruitsContainer, fruits);
renderCard(vegetablesContainer, vegetables);
renderCard(berriesContainer, berries);
