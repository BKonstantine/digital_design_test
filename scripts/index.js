function getFormattedDate(date) {
  const daysOfWeek = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ];
  const months = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
  ];

  const dateObj = new Date(date);
  const dayOfWeek = daysOfWeek[dateObj.getDay()];
  const weekNumber = Math.ceil(dateObj.getDate() / 7);
  const month = months[dateObj.getMonth()];
  const year = dateObj.getFullYear();
  const formattedDate = `${dayOfWeek}, ${weekNumber} неделя ${month} ${year} года`;
  return formattedDate;
}

getFormattedDate(Date.now());

const themeButton = document.querySelector(".checkbox__real");

const changeColorScheme = () => {
  if (colorScheme.getAttribute("href") == "./color-scheme/light.css") {
    colorScheme.href = "./color-scheme/dark.css";
  } else {
    colorScheme.href = "./color-scheme/light.css";
  }
};

const colorScheme = document.querySelector("#color-scheme");
themeButton.addEventListener("click", changeColorScheme);
