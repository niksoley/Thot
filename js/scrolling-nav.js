$('a').click(function() {
  $('html, body').animate({
    scrollTop: ($($(this).attr('href')).offset().top) - 0
  }, 500);
  return false;
});