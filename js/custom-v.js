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
    console.log(tgThumb,tgThumbH);
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



// 프로젝트 슬라이드 시작!!

(function($) {
 
  var SliceSlider = {
    
    /**
     * Settings Object
     */
    settings: {
      delta:              0,
      currentSlideIndex:  0,
      scrollThreshold:    40,
      slides:             $('.slide'),
      numSlides:          $('.slide').length,
      navPrev:            $('.js-prev'),
      navNext:            $('.js-next'),
    },
    
    /**
     * Init
     */
    init: function() {
      s = this.settings;
      this.bindEvents();
    },
    
    /**
     * Bind our click, scroll, key events
     */
    bindEvents: function(){
      
      // On click prev
      s.navPrev.on({
        'click' : SliceSlider.prevSlide
      });
      // On click next
      s.navNext.on({
        'click' : SliceSlider.nextSlide
      });
      // On Arrow keys
      $(document).keyup(function(e) {
        // Left or back arrows
        if ((e.which === 37) ||  (e.which === 38)){
          SliceSlider.prevSlide();
        }
        // Down or right
        if ((e.which === 39) ||  (e.which === 40)) {
          SliceSlider.nextSlide();
        }
      });
    },
    

    /**
     * Show Slide
     */
    showSlide: function(){ 
      // reset
      s.delta = 0;
      // Bail if we're already sliding
      if ($('.test').hasClass('is-sliding')){
        return;
      }
      // Loop through our slides
      s.slides.each(function(i, slide) {

        // Toggle the is-active class to show slide
        $(slide).toggleClass('is-active', (i === s.currentSlideIndex)); 
        $(slide).toggleClass('is-prev', (i === s.currentSlideIndex - 1)); 
        $(slide).toggleClass('is-next', (i === s.currentSlideIndex + 1)); 
        
        // Add and remove is-sliding class
        $('.test').addClass('is-sliding');

        setTimeout(function(){
            $('.test').removeClass('is-sliding');
        }, 1000);
      });
    },

    /**
     * Previous Slide
     */
    prevSlide: function(){
      
      // If on first slide, loop to last
      if (s.currentSlideIndex <= 0) {
        s.currentSlideIndex = s.numSlides;
      }
      s.currentSlideIndex--;
      
      SliceSlider.showSlide();
    },

    /**
     * Next Slide
     */
    nextSlide: function(){
      
      s.currentSlideIndex++;
   
      // If on last slide, loop to first
      if (s.currentSlideIndex >= s.numSlides) { 
        s.currentSlideIndex = 0;
      }
 
      SliceSlider.showSlide();
    },
  };
  SliceSlider.init();
})(jQuery);