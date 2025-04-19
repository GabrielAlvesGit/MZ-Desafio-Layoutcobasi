$(function () {
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 50) {
      $('.js-scroll').addClass('active');
    } else {
      $('.js-scroll').removeClass('active');
    }
  });
});
