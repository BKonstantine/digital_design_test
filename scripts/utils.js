export function getFormattedDate(dateString) {
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

  const dateParts = dateString.split(".");  
  const day = parseInt(dateParts[0]);
  const month = parseInt(dateParts[1]) - 1;
  const year = parseInt(dateParts[2]);

  const dateObj = new Date(year, month, day);
  const dayOfWeek = daysOfWeek[dateObj.getDay()];
  const weekNumber = Math.ceil(day / 7);
  const monthName = months[month];

  const formattedDate = `${dayOfWeek}, ${weekNumber} неделя ${monthName} ${year} года`;

  return formattedDate;
}
