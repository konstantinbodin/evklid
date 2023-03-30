const burger = document.querySelector('.burger');
const menu = document.querySelector('.header__nav');
const menuClose = menu.querySelector('.nav__close')

burger.addEventListener('click',
  function () {
    menu.classList.toggle('header__nav--active');
    document.body.classList.toggle('stop-scroll');
  })

menuClose.addEventListener('click',
  function () {
    menu.classList.remove('header__nav--active');
    document.body.classList.remove('stop-scroll');
  })

document.querySelector('.header__button').addEventListener('click', function() {
  document.querySelector('.header__form').classList.add('form__active');
  this.classList.add('active');
})

document.querySelector(".form__close").addEventListener("click", function() {
  let form = document.querySelector(".header__form");
 form.classList.remove("form__active");
   form.querySelector("header__input").value = "";
   document.querySelector(".header__button").classList.remove("active")
});

const swiper = new Swiper('.hero__swiper', {
  speed: 300,
  pagination: {
    el: '.hero__pagination',
    type: 'bullets',
    clickable: true,
  }
})

const tabsBtn = document.querySelectorAll('.steps__btn');
const tabsItem = document.querySelectorAll('.step__item');

tabsBtn.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function (btn) { btn.classList.remove('steps__btn--active') });
    e.currentTarget.classList.add('steps__btn--active');

    tabsItem.forEach(function (element) { element.classList.remove('step__item--active') });
    document.querySelector(`[data-target="${path}"]`).classList.add('step__item--active');
  });
})

new Accordion('.accordion', {
  elementClass: 'accordion__item',
  triggerClass: 'accordion__trigger',
  panelClass: 'accordion__content',
  activeClass: 'accordion--active'
});
