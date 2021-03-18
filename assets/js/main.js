// Header
$('.header__menu-bar').click(function() {
  $('.menu-list-mobile').addClass('show')
  $('.wrapper').addClass("show")
});
$('.menu-close').click(function() {
  $('.menu-list-mobile').removeClass('show')
  $('.wrapper').removeClass("show")
});
$('.menu-search').click(function(){
  $('.search__layout').addClass("show")
});
$('.fa-times').click(function() {
  $('.search__layout').removeClass("show")
});
$('.dropdown-lv2').each(function(){
  $(this).click(function(){
    $(this).children().last().toggleClass('show')
  })
})

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
$(".toTop").click(function(){
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})

// Window onscroll
$(window).scroll(function() {
  $('.header').toggleClass('sticky', window.scrollY > 0)
  $('.toTop').toggleClass('show', window.scrollY > 300)
})