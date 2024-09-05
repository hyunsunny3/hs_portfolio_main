// JQUERY

$(function () {

  //Wheel scroll event
  $(".scroll").each(function () {
    $(this).on("mousewheel DOMMouseScroll", function (e) {
        e.preventDefault();
        var delta = 0;
        
        if (e.originalEvent.wheelDelta) {
            delta = e.originalEvent.wheelDelta / 50;
        } else if (e.originalEvent.detail) {
            delta = -e.originalEvent.detail / 3;
        }

        var moveTop = null;
        if (delta < 0) {
            // 다음 요소 체크
            if ($(this).next().length) {
                moveTop = $(this).next().offset().top;
            }
        } else {
            // 이전 요소 체크
            if ($(this).prev().length) {
                moveTop = $(this).prev().offset().top;
            }
        }

        if (moveTop !== null) { // moveTop이 null이 아닐 때만 애니메이션
            $("html, body").stop().animate({
                scrollTop: moveTop + 'px'
            }, 500);
        }
    });
});

  // $(".scroll").each(function () {
  //   $(this).on("mousewheel DOMMouseScroll", function (e) {
  //       e.preventDefault();
  //       var delta = 0;

  //       if (!event) event = window.event;
  //       if (event.wheelDelta) {
  //           delta = event.wheelDelta / 50;
  //           if (window.opera) delta = -delta;
  //       } else if (event.detail) delta = -event.detail / 3;

  //       var moveTop = null;
  //       if (delta < 0) {
  //           if ($(this).next() != undefined) {
  //               moveTop = $(this).next().offset().top;
  //           }
  //       } else {
  //           if ($(this).prev() != undefined) {
  //               moveTop = $(this).prev().offset().top;
  //           }
  //       }

  //       $("html,body").stop().animate({
  //           scrollTop: moveTop + 'px'
  //       }, {
  //           duration: 300, complete: function () {
  //           }
  //       });
  //     });
  // });


  $(window).scroll(function () {
    let navshow = $(window).scrollTop();
    let mainnav = $(".nav_home");
    let contnav = $(".nav_cont");
    let headerbg = $("#wrap > header");
    let lipick = $(".nav_cont li")

    //Nav click scroll
    if (navshow < 500) {
      $(mainnav).addClass("show");
      $(contnav).removeClass("show");
      $(headerbg).removeClass("drop");
    } else {
      if (navshow >= 500) {
        $(contnav).addClass("show");
        $(mainnav).removeClass("show");
        $(headerbg).addClass("drop");
      }
    };

    //Nav pick
    if (navshow < 900){
      $('.nav_cont li').removeClass('pick');
    }else {
      if(navshow < 1600){
        $('.nav_cont li').removeClass('pick');
        $('.nav_cont li:nth-child(1)').addClass('pick');
      }else {
        if(navshow < 2600){
          $('.nav_cont li').removeClass('pick');
          $('.nav_cont li:nth-child(2)').addClass('pick');
        }else {
          if(navshow < 3680){
            $('.nav_cont li').removeClass('pick');
            $('.nav_cont li:nth-child(4)').addClass('pick');
          }else{
            if(navshow < 5000){
              $('.nav_cont li').removeClass('pick');
              $('.nav_cont li:nth-child(5)').addClass('pick');
            }
          }
        }
      }
    }
    
  }); 


  /** ----- Section03- Project Slide ----- **/
  let SliceSlider = {
    // Settings Object
    settings: {
      delta: 0,
      currentSlideIndex: 0,
      scrollThreshold: 40,
      slides: $(".slide"),
      numSlides: $(".slide").length,
      navPrev: $(".js-prev"),
      navNext: $(".js-next"),
    },

    // Init
    init: function () {
      s = this.settings;
      this.bindEvents();
    },

    // Bind our click, scroll, key events
    bindEvents: function () {
      // On click prev
      s.navPrev.on({
        click: SliceSlider.prevSlide,
      });
      // On click next
      s.navNext.on({
        click: SliceSlider.nextSlide,
      });
      // On Arrow keys
      $(document).keyup(function (e) {
        // Left or back arrows
        if (e.which === 37 || e.which === 38) {
          SliceSlider.prevSlide();
        }
        // Down or right
        if (e.which === 39 || e.which === 40) {
          SliceSlider.nextSlide();
        }
      });
    },

    // Show Slide
    showSlide: function () {
      // reset
      s.delta = 0;
      // Bail if we're already sliding
      if ($(".test").hasClass("is-sliding")) {
        return;
      }
      // Loop through our slides
      s.slides.each(function (i, slide) {
        // Toggle the is-active class to show slide
        $(slide).toggleClass("is-active", i === s.currentSlideIndex);
        $(slide).toggleClass("is-prev", i === s.currentSlideIndex - 1);
        $(slide).toggleClass("is-next", i === s.currentSlideIndex + 1);

        // Add and remove is-sliding class
        $(".test").addClass("is-sliding");

        setTimeout(function () {
          $(".test").removeClass("is-sliding");
        }, 1000);
      });
    },

    // Previous Slide
    prevSlide: function () {
      // If on first slide, loop to last
      if (s.currentSlideIndex <= 0) {
        s.currentSlideIndex = s.numSlides;
      }
      s.currentSlideIndex--;

      SliceSlider.showSlide();
    },

    // Next Slide
    nextSlide: function () {
      s.currentSlideIndex++;

      // If on last slide, loop to first
      if (s.currentSlideIndex >= s.numSlides) {
        s.currentSlideIndex = 0;
      }

      SliceSlider.showSlide();
    },
  };
  SliceSlider.init();
});

