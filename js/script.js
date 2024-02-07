$(document).ready(function(){
    var swiper = new Swiper(".mySwiper", {
        loop:true,
        loopedSlides: 1,
        slidesPerView: 3,
        slidesPerGroup:1,
        spaceBetween: 30,
          navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        // breakpoint:'(max-width:1600px)'{
        //   slidesPerView: 2,
        //   slidesPerGroup:1,
        //   spaceBetween: 30,
        // }
      });

      $('.menu-btn-mobile').click(function(){
        $('.menu-box-mobile').toggleClass('on');
      });
  
});