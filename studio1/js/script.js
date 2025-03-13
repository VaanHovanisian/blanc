const burger = document.querySelector(".burger");
const navbar = document.querySelector(".navbar");
burger.addEventListener("click", function () {
  burger.classList.toggle("burger_active");
  navbar.classList.toggle("nav-active")
})

document.querySelectorAll(".accordion-item").forEach((item) => {
  item.querySelector(".accordion-item-header").addEventListener("click", () => {
    item.classList.toggle("open");
  });
});


const modal = new GraphModal();
function myFunction() {
  let x = document.getElementById("pavilions-content");

  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }

}

function myFunction1() {
  let x = document.getElementById("flag-content");

  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }

}



/*-----------------footer------------------------*/


let copyright = document.getElementById("copyright");
copyright.innerHTML = new Date().getFullYear();

/*------------animation of about as--------*/

const valueDisplays = document.querySelectorAll(".aboutus-span");
let interval = 2000;
valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-value"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
})

const valueDisplays1 = document.querySelectorAll(".aboutus-span1");
let interval1 = 250000;
valueDisplays1.forEach((valueDisplay1) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay1.getAttribute("data-value"));
  let duration = Math.floor(interval1 / endValue);
  let counter = setInterval(function () {
    startValue += 125;
    valueDisplay1.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
})

/* -------- pavilions-section6-gallery-------------*/

funcName = "lightGallery";
if (isFunction(window[funcName])) {

  let pavilionsgallery = document.getElementById("pavilions-section6-gallery")
  lightGallery(pavilionsgallery, {
    controls: true,
    counter: true,
    download: false,
    plugins: [lgShare, lgZoom, lgFullscreen]
  })

  let studio1gallery = document.getElementById("studio1-section3-gallery")
  lightGallery(studio1gallery, {
    controls: true,
    counter: true,
    download: false,
    plugins: [lgShare, lgZoom, lgFullscreen]
  })

  let studio2gallery = document.getElementById("studio2-section3-gallery")
  lightGallery(studio2gallery, {
    controls: true,
    counter: true,
    download: false,
    plugins: [lgShare, lgZoom, lgFullscreen]
  })

  let studio3gallery = document.getElementById("studio3-section3-gallery")
  lightGallery(studio3gallery, {
    controls: true,
    counter: true,
    download: false,
    plugins: [lgShare, lgZoom, lgFullscreen]
  })
}

// isFunction взято со стэка
function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}



const languageButtons = document.querySelectorAll("[data-button-lang]")
languageButtons.forEach(item => {
  const lang = localStorage.getItem("lang") || "en"
  document.querySelectorAll("[data-lang]").forEach(el => el.style.display = "none")
  document.querySelectorAll(`[data-lang="${lang}"]`).forEach(el => el.style.display = "block")
  item.onclick = () => {
    const lang = item.dataset.buttonLang
    document.querySelectorAll("[data-lang]").forEach(el => el.style.display = "none")
    document.querySelectorAll(`[data-lang="${lang}"]`).forEach(el => el.style.display = "block")
    localStorage.setItem("lang", lang)
  }
})
function translate(language) {
  const elements = document.querySelectorAll('[data-' + language + ']');
  elements.forEach((element) => {
    element.style.display = "block";
  });
}

// Function to change language dynamically
function changeLanguage(language) {
  translate(language);
}

// Example usage:

changeLanguage(localStorage.getItem('lang') || "en")



const swiperEl = document.querySelector('swiper-container');
const swiper = swiperEl;




if (document.querySelector(`[data-accordion="accordion"`)) {
  const accordion = new Accordion('accordion');
}

new Swiper(".mySwiper2", {
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 3
    }, 576: {
      slidesPerView: 2
    }
  }
});
new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 1,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    clickable: true,
    el: ".swiper-pagination",
  }, breakpoints: {
    576: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 3
    }
  }
});
