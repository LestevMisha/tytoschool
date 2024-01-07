document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 1,
    slidesPerView: 1,
    centeredSlides: true,
    roundLengths: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      0: {
        slidesPerView: 1.5,
        spaceBetween: 16,
      },
      768: {
        slidesPerView: 2.5,
        spaceBetween: 16,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 32,
      },
    },
  });

  var swiper1 = new Swiper(".mySwiper1", {
    spaceBetween: 1,
    slidesPerView: 1,
    // centeredSlides: true,
    roundLengths: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 16,
      },
      768: {
        slidesPerView: 1.5,
        spaceBetween: 16,
      },
      1200: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
    },
  });

  // swipe by click
  const swiper_element = document.querySelector("div.swiper.mySwiper");
  const swiper1_element = document.querySelector("div.swiper.mySwiper1");
  apply_click(swiper_element, swiper)
  apply_click(swiper1_element, swiper1)

  function apply_click (element, swiper) {
    element.addEventListener("click", (e) => {
      var tmp_el = e.target.closest(".swiper-slide")
      if (tmp_el !== null && tmp_el !== undefined) {
        if (tmp_el.classList.contains("swiper-slide-next")) {
          swiper.slideNext();
        } else if (tmp_el.classList.contains("swiper-slide-prev")) {
          swiper.slidePrev();
        }
      }
    });
  }

});