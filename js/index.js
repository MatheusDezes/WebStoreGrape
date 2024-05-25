//======Rolagem hedaer window========//
window.addEventListener("scroll", function(){
    var header = document.querySelector('#header')
    header.classList.toggle('scroll',window.scrollY > 0)
})
//======Rolagem hedaer window/========//

//======Swiper card========//
var swiper1 = new Swiper(".produtos-selection", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    slidesPerView: 5,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1.3,
        spaceBetween: 20,
      },
      500: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 25,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 25,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
      1280: {
        slidesPerView: 5,
        spaceBetween: 50,
    },
},
});
//======Swiper card========//

//======Swiper loja========//
var swiper2 = new Swiper(".loja", {
  slidesPerView: 3.7,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
  320: {
    slidesPerView: 1.3,
    spaceBetween: 10,
  },
  500: {
    slidesPerView: 2,
    spaceBetween: 10,
  },
  640: {
    slidesPerView: 2,
    spaceBetween: 15,
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 15,
  },
  1024: {
    slidesPerView: 3.7,
    spaceBetween: 30,
  },
},
});
//======Swiper loja========//

//======Swiper loja2========//
var swiper3 = new Swiper(".loja2", {
  slidesPerView: 3.5,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
  320: {
    slidesPerView: 1.2,
    spaceBetween: 10,
  },
  500: {
    slidesPerView: 2,
    spaceBetween: 5,
  },
  640: {
    slidesPerView: 2,
    spaceBetween: 10,
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 10,
  },
  1024: {
    slidesPerView: 3.5,
    spaceBetween: 25,
  },
},
});
//======Swiper loja2========//

