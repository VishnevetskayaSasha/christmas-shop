import burgerMenu from "./modules/burger.js";
import {hamburger, hamburgerBlock, menu, menuList, menuItem, menuLink} from "./modules/burger.js";
import { giftCards } from "./giftsCards.js";

burgerMenu();

document.querySelector(".header__menu-item_active").addEventListener("click", () => {
  hamburger.classList.remove("hamburger_open");
    hamburgerBlock.classList.remove("hamburger__block_open");
    menuList.classList.remove("header__menu-list_mob-activ");
    menuItem.forEach(item => {
      item.classList.remove("header__menu-item_mob")
    })
    menuLink.forEach(item => {
      item.classList.remove("header__menu-link_mob")
    })
    document.body.classList.remove("lock");
})

// gifts.json

const giftsCardsBlock = document.querySelector(".gifts__cards"); // блок с карточками
giftsCardsBlock.innerHTML = ""

// добавление карточек
function addCards() {
  giftCards.forEach(item => {
    giftsCardsBlock.innerHTML += `
    <li class="gifts__card" data-id=${item.id}>
      <img class="gifts__card-img" src="${item.img}" alt="${item.category}">
      <div class="gifts__card-text-content">
        <h3 class="gifts__card-title gifts__card-title_${item.class}">${item.category}</h3>
        <p class="gifts__card-text">${item.name}</p>
      </div>
    </li>
  `
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

// tags
const tagsBlock = document.querySelector(".gifts__tag-content");
let tags = tagsBlock.querySelectorAll(".gifts__tag-item");
tagsBlock.addEventListener("click", (e) => { // клик по блоку с тегами
  if(e.target.classList.contains("gifts__tag-item")) { //  работает только если клин на элементе с классом gifts__tag-item
    let clickedTag = e.target; // тег на котором произошел клик
    // удаляем класс gifts__tag-item_active
    tags.forEach(item => {
      item.classList.remove("gifts__tag-item_active");
    })
    // добавляем класс gifts__tag-item_active для тега по которому сработал клик
    clickedTag.classList.add("gifts__tag-item_active");
    if(clickedTag.innerText === "ALL") {
      showAllCards();
    } else {
      showFilterCards(clickedTag.innerText);
    }
  }
})

function showAllCards() {
  let cards = document.querySelectorAll(".gifts__card");
  cards.forEach(card => {
    card.classList.remove("gifts__card_hidden"); // удаляем у всех карточек скрывающий клас 
  })
}

function showFilterCards(selectedTag) {
  let cards = document.querySelectorAll(".gifts__card");
  cards.forEach(card => {
    card.classList.add("gifts__card_hidden"); //скрываем все карточки
    let cardsTitle = card.querySelectorAll(".gifts__card-title");
    cardsTitle.forEach(cardTitle => {
      if(cardTitle.innerText.toUpperCase() === selectedTag) { // если текст заголовка карточки совпадает с текстом тега
        card.classList.remove("gifts__card_hidden"); // показываем эту карточку
      }
    })
  })
}

let arrowUp = document.createElement("a");
arrowUp.classList.add("link__up");
arrowUp.setAttribute("href", "#header")
arrowUp.innerHTML = `<img class="link__up-img" src="./img/arrow-up.png" alt="arrow-up"></img>`
document.querySelector(".page").append(arrowUp)

let distance = 0;
window.onscroll = function(e) {
  distance += window.scrollY - distance;
  if (distance >= 300) {
    arrowUp.classList.add("link__up_active");
  } else {
    arrowUp.classList.remove("link__up_active");
  }
  //console.info(distance); // В пикселях
};





