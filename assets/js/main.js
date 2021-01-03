// Header
let bar = document.querySelector(".header__menu-bar");
let menuMobile = document.querySelector(".menu-list-mobile");
let menuClose = document.querySelector(".menu-close");
let wrapper = document.querySelector(".wrapper");
let header = document.querySelector(".header");
let menuSearch = document.querySelector(".menu-search");
let searchClose = document.querySelector(".search-close");
let searchLayout = document.querySelector(".search__layout");
let dropdownLv2 = document.querySelectorAll(".dropdown-lv2");

bar.addEventListener('click', () => {
  menuMobile.classList.add('show')
  wrapper.classList.add("show")
});
menuClose.addEventListener('click', () => {
  menuMobile.classList.remove('show')
  wrapper.classList.remove("show")
});
menuSearch.addEventListener('click', () => {
  searchLayout.classList.add("show")
});
searchClose.addEventListener('click', () => {
  searchLayout.classList.remove("show")
});
window.addEventListener('scroll', () => {
  header.classList.toggle('sticky', window.scrollY > 0)
})
dropdownLv2.forEach(item => {
  item.addEventListener('click', () => {
    item.lastElementChild.classList.toggle("show")
  });
});

// Slider
$(".slider__carousel").owlCarousel({
  nav: false,
  margin: 10,
  loop: false,
  dots: true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      dotsEach: 1,
    },
    768: {
      items: 2,
      dotsEach: 2,
    },
    1200: {
      items: 3,
      dotsEach: 3,
    },
  }
})

// To Top Button
let toTop = document.querySelector(".toTop");
toTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})

// Window onscroll
window.addEventListener('scroll', () => {
  toTop.classList.toggle('show', window.scrollY > 300)
})