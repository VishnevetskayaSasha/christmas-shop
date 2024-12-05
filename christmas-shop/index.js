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

// карточки
const giftsCardsBlock = document.querySelector(".gifts__cards"); // блок с карточками
giftsCardsBlock.innerHTML = ""

// добавление всех карточек
function addCards() {
  // рандомный index
  let index1 = Math.floor(Math.random() * 36) + 1;
  let index2 = Math.floor(Math.random() * 36) + 1;
  let index3 = Math.floor(Math.random() * 36) + 1;
  let index4 = Math.floor(Math.random() * 36) + 1;
  // console.log(index1, index2, index3, index4)

  if (index1 === index2 || index1 === index3 || index1 === index4) {
    index1 += 1
  } else if (index2 === index1 || index2 === index3 || index2 === index4) {
    index2 += 1
  } else if (index3 === index1 || index3 === index2 || index3 === index4) {
    index3 += 1
  } else if (index4 === index1 || index4 === index2 || index4 === index3) {
    index3 += 1
  }
  //console.log(index1, index2, index3, index4)

  if (index1 === index2 || index1 === index3 || index1 === index4) {
    index1 += 2
  } else if (index2 === index1 || index2 === index3 || index2 === index4) {
    index2 += 2
  } else if (index3 === index1 || index3 === index2 || index3 === index4) {
    index3 += 2
  } else if (index4 === index1 || index4 === index2 || index4 === index3) {
    index3 += 2
  }

  //console.log(index1, index2, index3, index4)

  giftCards.forEach(item => {
    if(item.id == index1 || item.id == index2 || item.id == index3 || item.id == index4 ) {
      giftsCardsBlock.innerHTML += `
    <li class="gifts__card" data-id=${item.id}>
      <img class="gifts__card-img" src="${item.img}" alt="${item.category}">
      <div class="gifts__card-text-content">
        <h3 class="gifts__card-title gifts__card-title_${item.class}">${item.category}</h3>
        <p class="gifts__card-text">${item.name}</p>
      </div>
    </li>
  `
    }
    
  })
  addPetItemClickHandler()
}

addCards()

// модалка
let popup = document.createElement("div");
popup.classList.add("popup");
document.querySelector("body").append(popup)

function renderPopup(id) {
  giftCards.forEach(item => {
    if (item == id) {
      popup.innerHTML = `
      <div class="modal" data-id=${item.id}>
        <div class="modal__wrapper">
          <div class="modal__content">
            <img src="./img/close.png" alt="close" class="modal__close">
            <div class="modal__content-block">
              <img src="${item.img}" alt="${item.category}" class="modal__img">
              <div class="modal__text-content">
                <h3 class="gifts__card-title gifts__card-title_${item.class}">${item.category}</h3>
                <p class="gifts__card-text">${item.name}</p>
                <p class="modal__description">${item.description}</p>
              </div>
              <div class="modal__superpowers-content">
                <p class="modal__superpowers-title">Adds superpowers to:</p>
                <div class="modal__superpowers">
                  <div class="modal__superpowers-item">
                    <p class="modal__superpowers-item-name">Live</p>
                    <p class="modal__superpowers-item-count">${item.superpowers.live}</p>
                    <div class="modal__superpowers-item-snowflakes">
                      <img src="./img/modal-snowflake.svg" alt="snowflake" class="modal__superpowers-item-snowflake  modal__superpowers-item-snowflakes_color${item.superpowers.live[1]}">
                      <img src="./img/modal-snowflake.svg" alt="snowflake" class="modal__superpowers-item-snowflake  modal__superpowers-item-snowflakes_color${item.superpowers.live[1]}">
                      <img src="./img/modal-snowflake.svg" alt="snowflake" class="modal__superpowers-item-snowflake  modal__superpowers-item-snowflakes_color${item.superpowers.live[1]}">
                      <img src="./img/modal-snowflake.svg" alt="snowflake" class="modal__superpowers-item-snowflake modal__superpowers-item-snowflakes_color${item.superpowers.live[1]}">
                      <img src="./img/modal-snowflake.svg" alt="snowflake" class="modal__superpowers-item-snowflake  modal__superpowers-item-snowflakes_color${item.superpowers.live[1]}">
                    </div>
                  </div>
                  <div class="modal__superpowers-item">
                    <p class="modal__superpowers-item-name">Create</p>
                    <p class="modal__superpowers-item-count">${item.superpowers.create}</p>
                    <div class="modal__superpowers-item-snowflakes modal__superpowers-item-snowflakes_color">
                      <img src="./img/modal-snowflake.svg" alt="snowflake" class="modal__superpowers-item-snowflake  modal__superpowers-item-snowflakes_color${item.superpowers.create[1]}">
                      <img src="./img/modal-snowflake.svg" alt="snowflake" class="modal__superpowers-item-snowflake  modal__superpowers-item-snowflakes_color${item.superpowers.create[1]}">
                      <img src="./img/modal-snowflake.svg" alt="snowflake" class="modal__superpowers-item-snowflake  modal__superpowers-item-snowflakes_color${item.superpowers.create[1]}">
                      <img src="./img/modal-snowflake.svg" alt="snowflake" class="modal__superpowers-item-snowflake  modal__superpowers-item-snowflakes_color${item.superpowers.create[1]}">
                      <img src="./img/modal-snowflake.svg" alt="snowflake" class="modal__superpowers-item-snowflake  modal__superpowers-item-snowflakes_color${item.superpowers.create[1]}">
                    </div>
                  </div>
                  <div class="modal__superpowers-item">
                    <p class="modal__superpowers-item-name">Love</p>
                    <p class="modal__superpowers-item-count">${item.superpowers.love}</p>
                    <div class="modal__superpowers-item-snowflakes modal__superpowers-item-snowflakes_color">
                      <img src="./img/modal-snowflake.svg" alt="snowflake" class="modal__superpowers-item-snowflake  modal__superpowers-item-snowflakes_color${item.superpowers.love[1]}">
                      <img src="./img/modal-snowflake.svg" alt="snowflake" class="modal__superpowers-item-snowflake  modal__superpowers-item-snowflakes_color${item.superpowers.love[1]}">
                      <img src="./img/modal-snowflake.svg" alt="snowflake" class="modal__superpowers-item-snowflake  modal__superpowers-item-snowflakes_color${item.superpowers.love[1]}">
                      <img src="./img/modal-snowflake.svg" alt="snowflake" class="modal__superpowers-item-snowflake  modal__superpowers-item-snowflakes_color${item.superpowers.love[1]}">
                      <img src="./img/modal-snowflake.svg" alt="snowflake" class="modal__superpowers-item-snowflake  modal__superpowers-item-snowflakes_color${item.superpowers.love[1]}">
                    </div>
                  </div>
                  <div class="modal__superpowers-item">
                    <p class="modal__superpowers-item-name">Dream</p>
                    <p class="modal__superpowers-item-count">${item.superpowers.dream}</p>
                    <div class="modal__superpowers-item-snowflakes modal__superpowers-item-snowflakes_color">
                      <img src="./img/modal-snowflake.svg" alt="snowflake" class="modal__superpowers-item-snowflake  modal__superpowers-item-snowflakes_color${item.superpowers.dream[1]}">
                      <img src="./img/modal-snowflake.svg" alt="snowflake" class="modal__superpowers-item-snowflake  modal__superpowers-item-snowflakes_color${item.superpowers.dream[1]}">
                      <img src="./img/modal-snowflake.svg" alt="snowflake" class="modal__superpowers-item-snowflake  modal__superpowers-item-snowflakes_color${item.superpowers.dream[1]}">
                      <img src="./img/modal-snowflake.svg" alt="snowflake" class="modal__superpowers-item-snowflake  modal__superpowers-item-snowflakes_color${item.superpowers.dream[1]}">
                      <img src="./img/modal-snowflake.svg" alt="snowflake" class="modal__superpowers-item-snowflake  modal__superpowers-item-snowflakes_color${item.superpowers.dream[1]}">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
    }
  })
  document.querySelector(".modal").addEventListener("click", closePopup);
  
}

function addPetItemClickHandler() {
  document.querySelector(".gifts__cards-content").addEventListener("click", (e) => {
    if(e.target.closest(".gifts__card")) {
      let clickCardId = e.target.closest(".gifts__card").getAttribute("data-id");
      // console.log(clickCardId);
      let clickItemCard = getClicCards(clickCardId);
      // console.log(clickItemCard);
      renderPopup(clickItemCard)
      document.querySelector(".modal").classList.add("modal_active");
      document.body.classList.add("popup__open");
    }
  })
}

function getClicCards(id) {
  return giftCards.find(cardItem => cardItem.id == id)
}

function closePopup(e) {
  let classes = e.target.classList;
  if (classes.contains('modal_active') || classes.contains('modal__close')) {
    document.querySelector('.modal_active').remove();
    document.body.classList.remove("popup__open");
  }
}

// слайдер
const rowRight = document.querySelector(".slider__row-right");
const rowLift = document.querySelector(".slider__row-left");
const sliderContent = document.querySelector('.slider__slider-content')
const sliderWrapper = document.querySelector('.slider__wrapper');
const slider = document.querySelector(".slider");
const sliderBlock =  document.querySelector(".slider__block");

let totalWidthWeb = sliderBlock.scrollWidth;
let visibleWidthWeb = (window.innerWidth <= 950) ? slider.clientWidth - 8 : slider.clientWidth - 82;
let currentPosition = 0;
let shiftAmount = (window.innerWidth <= 768) ? 6 : 3; // Количество сдвигов для прокрутки в одну сторону

// изменение визуала стрелок + marginLeft
function updateArrows() {
  if (currentPosition === 0) {
    rowLift.classList.remove("slider__row_active");
    if (window.innerWidth <= 950) {
      sliderContent.style.marginLeft = "8px"
    } else {
      sliderContent.style.marginLeft = "82px"
    }
  } else {
    rowLift.classList.add("slider__row_active");
    sliderContent.style.marginLeft = "0"
  }

  if (currentPosition <= -(totalWidthWeb - visibleWidthWeb)) {
    rowRight.classList.remove("slider__row_active");
    if (window.innerWidth <= 950) {
      sliderContent.style.marginRight = "8px"
    } else {
     sliderContent.style.marginRight = "82px"
    }
  } else {
    rowRight.classList.add("slider__row_active");
    sliderContent.style.marginRight = "0"
  }
}

function slide(direction) {
  // на сколько должен сдвигаться слайдер при каждом клике на кнопку
  let shift = Math.round(direction * ((totalWidthWeb - visibleWidthWeb) / shiftAmount));
  currentPosition += shift;
  if (currentPosition >= -1) {
    currentPosition = 0;
  } else if (currentPosition <= -(totalWidthWeb - visibleWidthWeb - 20)) {
    currentPosition = -(totalWidthWeb - visibleWidthWeb);
  }

  sliderWrapper.style.transform = `translateX(${currentPosition}px)`;
  updateArrows();
}

rowLift.addEventListener('click', () => slide(1)); 
rowRight.addEventListener('click', () => slide(-1));

window.addEventListener('resize', () => {
  totalWidthWeb =  sliderBlock.scrollWidth  // обновляем ширину
  visibleWidthWeb =  (window.innerWidth <= 950) ? slider.clientWidth - 8 : slider.clientWidth - 82;// Ширина видимой части
  shiftAmount = (window.innerWidth <= 768) ? 6 : 3; //  обновляем количество сдвигов
  currentPosition = 0; 
  sliderWrapper.style.transform = `translateX(0px)`;
  updateArrows();
});

// Изначальная проверка состояния стрелок
updateArrows();
