const slickCarousel = $('.slick-carousel');
const downArrow = $('.down-arrow-container');
slickCarousel.slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  initialSlide: 0,
  // fade: true,
  draggable: true,
  // infinite: true,
  cssEase: 'ease-out',
  speed: 500,
  swipeToSlide: true,
  vertical: true,
  verticalSwiping: true
});

downArrow.click( function() {
  slickCarousel.slick('slickNext');
})
