const hamburger = document.querySelector(".hamburger");
const hamburgerBlock = document.querySelector(".hamburger__block");
const menu = document.querySelector(".header__menu");
const menuList = menu.querySelector("ul");
const menuItem = menuList.querySelectorAll("li");
const menuLink = menuList.querySelectorAll("a");


// клик на бургер открывает - закрывает меню
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger_open");
  hamburgerBlock.classList.toggle("hamburger__block_open");
  menuList.classList.toggle("header__menu-list_mob-activ");
  menuItem.forEach(item => {
    item.classList.toggle("header__menu-item_mob")
  })
  menuLink.forEach(item => {
    item.classList.toggle("header__menu-link_mob")
  })
  document.body.classList.toggle("lock");
})
// клик на ссылку в открытом меню - закрывает меню
menuLink.forEach(item => {
  item.addEventListener("click", () => {
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
})
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