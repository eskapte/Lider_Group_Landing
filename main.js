const carousels = document.querySelectorAll(".carousel");

carousels.forEach(carousel => {
  new Carousel(carousel, {
    'slidesPerPage' : 1,
    'preload' : '1',
  });
})

const menuBurger = document.querySelector(".main-header__menu-burger");
const body = document.body;
const contacts = document.querySelector(".main-header__contacts");

menuBurger.addEventListener("click", onMenuClicked);

function onMenuClicked(evt) {
  body.classList.toggle("menu-displayed");
  contacts.classList.toggle("show");
}