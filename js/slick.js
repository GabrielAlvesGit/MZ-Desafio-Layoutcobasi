$(document).ready(function(){
  $('.slicks').slick({
    dots: true, 
    arrows: true, 
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1, 
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
          dots: true
        }
      }
    ]
  });
});
