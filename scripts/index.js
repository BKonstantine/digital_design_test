const themeButton = document.querySelector(".checkbox__real");
const navItems = Array.from(document.querySelectorAll(".nav__item"));

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
  const categoryTitle = document.querySelector(`#${id}`);
  categoryTitle.scrollIntoView({
    behavior: "smooth",
  });
};

navItems.forEach((item) => {
  item.addEventListener("click", () => scrollIntoCategory(item.id));
});
