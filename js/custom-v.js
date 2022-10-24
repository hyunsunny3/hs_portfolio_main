// JAVASCRIPT

const hiddens = document.querySelectorAll(".view_img");
const thumbs = document.querySelectorAll(".view_img>img");
console.log(`hiddens:${hiddens} thumbs:${thumbs}`);

hiddens.forEach(function (hidden) {
  hidden.addEventListener("mouseenter", function (e) {
    e.preventDefault();
    const tg = e.target;
    const tgH = tg.offsetHeight;
    const tgThumb = tg.childNodes[1];
    const tgThumbH = tgThumb.offsetHeight;
    // console.log(tgThumb,tgThumbH);
    tgThumb.style.top=tgH-tgThumbH+"px";
  });
  hidden.addEventListener("mouseleave", function (e) {
    e.preventDefault();
    const tg = e.target;
    const tgThumb = tg.childNodes[1];
    tgThumb.style.top=0;
  });
});

const homebtn = document.querySelector('.home_btn');
const aboutbtn = document.querySelector('.about_btn');
const skillsbtn = document.querySelector('.skills_btn');
const projectbtn = document.querySelector('.project_btn');
const contactbtn = document.querySelector('.contact_btn');
let scrollAmount;
homebtn.addEventListener('click',function(e){
  e.preventDefault();
  document.querySelector('.main').scrollIntoView({behavior:'smooth'})
});
aboutbtn.addEventListener('click',function(e){
  e.preventDefault();
  document.querySelector('.about').scrollIntoView({behavior:'smooth'})
});
skillsbtn.addEventListener('click',function(e){
  e.preventDefault();
  document.querySelector('.skills').scrollIntoView({behavior:'smooth'})
});
projectbtn.addEventListener('click',function(e){
  e.preventDefault();
  document.querySelector('.project').scrollIntoView({behavior:'smooth'})
});
contactbtn.addEventListener('click',function(e){
  e.preventDefault();
  document.querySelector('footer').scrollIntoView({behavior:'smooth'})
});


