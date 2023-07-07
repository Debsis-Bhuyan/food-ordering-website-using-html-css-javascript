let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar");
let list = document.querySelectorAll(".navbar a");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};
let section = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header .navbar a");

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
  section.forEach((sec) => {
    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = (sec.offsetTop = 150);
    let id = sec.getAttribute("id");
    if ((top) => offset && top < offset + height) {
      navlinks.forEach((links) => {
        links.classList.remove("active");
      });
    }
  });
};
// search section
document.querySelector("#search-icon").onclick = () => {
  document.querySelector("#search-form").classList.toggle("active");
};
document.querySelector("#close").onclick = () => {
  document.querySelector("#search-form").classList.remove("active");
};
// slide part
var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
});
// review slider
var swiper = new Swiper(".review-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// loader
function loader() {
  document.querySelector(".loader-container").classList.add("fade-out");
}
function Fadeout() {
  setInterval(loader, 1000);
}
window.onload = Fadeout;
