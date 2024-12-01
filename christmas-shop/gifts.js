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

function addCards() {
  giftCards.forEach(item => {
    giftsCardsBlock.innerHTML += `
    <li class="gifts__card">
      <img class="gifts__card-img" src="${item.img}" alt="${item.category}">
      <div class="gifts__card-text-content">
        <h3 class="gifts__card-title gifts__card-title_${item.class}">${item.category}</h3>
        <p class="gifts__card-text">${item.name}</p>
      </div>
    </li>
  `
  })
}
addCards() 

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

// modal
