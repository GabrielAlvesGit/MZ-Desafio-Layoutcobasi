/* ======== JS Header ======== */

$(document).ready(() => {

  /* ======== Search ======== */
  $('.js-click-search').click((e) => {
    $('.js-active-search').toggleClass('active');
    $('.js-open-menu').toggleClass('active');
    e.preventDefault();
  })

  /* ======== Menu ======== */
  $('.js-open-menu').click(( ) => {
    $('.js-open').toggleClass('active');
    $('.js-close').toggleClass('active');
    $('.js-close-tickers').toggleClass('active');
    $('.js-open-navigation').toggleClass('active');
    $('.js-active').toggleClass('active');
  })
})

