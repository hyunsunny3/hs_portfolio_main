// JAVASCRIPT

// 포트폴리오 화면 호버 시 스크롤 이벤트
// const hiddens = document.querySelectorAll(".view_img");
// const thumbs = document.querySelectorAll(".view_img>img");
// console.log(`hiddens:${hiddens} thumbs:${thumbs}`);

// hiddens.forEach(function (hidden) {
//   hidden.addEventListener("mouseenter", function (e) {
//     e.preventDefault();
//     const tg = e.target;
//     const tgH = tg.offsetHeight;
//     const tgThumb = tg.childNodes[1];
//     const tgThumbH = tgThumb.offsetHeight;
//     // console.log(tgThumb,tgThumbH);
//     tgThumb.style.top=tgH-tgThumbH+"px";
//   });
//   hidden.addEventListener("mouseleave", function (e) {
//     e.preventDefault();
//     const tg = e.target;
//     const tgThumb = tg.childNodes[1];
//     tgThumb.style.top=0;
//   });
// });


const sections = {
  home: '.main',
  about: '.about',
  skills: '.skills',
  project: '.project',
  contact: 'footer'
};

Object.keys(sections).forEach(key => {
  const buttons = document.querySelectorAll(`.${key}_btn`);
  
  buttons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelector(sections[key]).scrollIntoView({ behavior: 'smooth' });
    });
  });
});


var swiper = new Swiper(".project .swiper", {
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  breakpoints: {
    768: {
      spaceBetween: 10,
    },
  },
});


