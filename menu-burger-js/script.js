"use srtict"

const isMobile = {
  Android: function() {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function() {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function() {
    return navigator.userAgent.match(/iPhone|iPod|iPod/i);
  },
  Opera: function() {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function() {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function() {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    );
  }
}

if (isMobile.any()) {
  document.body.classList.add("_touch");
  let menuArrows = document.querySelectorAll(".menu__arrow");
  if(menuArrows.length){
    for(let index = 0; index < menuArrows.length; index++){
      const menuArrow = menuArrows[index];
      menuArrow.addEventListener('click', (e)=>{
        menuArrow.parentElement.classList.toggle('_active');
      })
    }
  }
} else {
  document.body.classList.add("_pc");
};

// Меню бургер

const menuBtn = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".menu__body");

if(menuBtn){
  menuBtn.addEventListener("click", (e) => {
      document.body.classList.toggle("_lock");;
      menuBtn.classList.toggle("_active");
      menuBody.classList.toggle("_active");
  });
}


// Прокрутка при клике

const menuLinks = document.querySelectorAll('.menu__link[data-goto]')

if(menuLinks.length){
  menuLinks.forEach(menuLinks => {
    menuLinks.addEventListener("click", onMenuLinkClick)
  });

  function onMenuLinkClick(e){
    const menuLink = e.target;
    
    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight;

      if(menuBtn.classList.contains("_active")){
        document.body.classList.remove("_lock");;
        menuBtn.classList.remove("_active");
        menuBody.classList.remove("_active");
      }

      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth"
      });
      e.preventDefault();
    }
  }
}