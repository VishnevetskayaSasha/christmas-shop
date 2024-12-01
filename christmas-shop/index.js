import { giftCards } from "./giftsCards.js";
import burgerMenu from "./modules/burger.js";

burgerMenu();

// таймер
const deadline = new Date(Date.UTC(2025, 0, 1, 0, 0, 0))

// определение разницы между дедлайном и текущей датой
function getTimeRemaining(endtime) {
  let t = Date.parse(endtime) - Date.parse(new Date()); // кол-во миллисекунд в endtime - кол-во миллисекунд текущей даты
  let days;
  let hours;
  let minutes;
  let seconds;
  
  if (t <= 0) { // если дедлайн прошел, присвоиваем данным 0, чтобы при загрузке страницы не отображались отрицательные значения 
      days = 0;
      hours = 0;
      minutes = 0;
      seconds = 0;
  } else {
      days = Math.floor(t / (1000 * 60 * 60 * 24));
      hours = Math.floor((t / (1000 * 60 * 60)) % 24);
      minutes = Math.floor((t / (1000 * 60)) % 60);
      seconds = Math.floor((t / 1000) % 60);
  }

  return { // функция возвращает обьект в котором на основе расчетов получены отдельные данные.
      "total": t,
      "days": days,
      "hours": hours,
      "minutes": minutes,
      "seconds": seconds
  };
}
// функция установки таймера на странице
function setClock(endtime) {
  const timer = document.querySelector(".cta__timer");
  const days = timer.querySelector("#days");
  const hours = timer.querySelector("#hours");
  const minutes = timer.querySelector("#minutes");
  const seconds = timer.querySelector("#seconds");
  
  setInterval(updateClock, 1000);

  updateClock(); //запускается тут, что бы не было скачков при перезагрузке страницы и она начинала действовать с момента загрузки

  function updateClock() {
      const t = getTimeRemaining(deadline);

      days.innerHTML = t.days;
      hours.innerHTML = t.hours;
      minutes.innerHTML = t.minutes;
      seconds.innerHTML = t.seconds;
  }
}
setClock(deadline)

