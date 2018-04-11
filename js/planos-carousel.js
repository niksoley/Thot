// finger swipe

$(".carousel").on("touchstart", function(event) {
  var xClick = event.originalEvent.touches[0].pageX;
  $(this).one("touchmove", function(event) {
    var xMove = event.originalEvent.touches[0].pageX;
    if (Math.floor(xClick - xMove) > 5) {
      $(this).carousel('next');
    } else if (Math.floor(xClick - xMove) < -5) {
      $(this).carousel('prev');
    }
  });
  $(".carousel").on("touchend", function() {
    $(this).off("touchmove");
  });
});

//stop auto-sliding and cycling

$('.carousel').carousel({
  interval: false,
  wrap: false
});

// show and hide control arrow
$('.carousel').on('slid.bs.carousel', '', function() {
  var $this = $(this);

  $this.children('.carousel-control').show();

  if ($('.carousel-inner .item:first').hasClass('active')) {
    $this.children('.left.carousel-control').hide();
  } else if ($('.carousel-inner .item:last').hasClass('active')) {
    $this.children('.right.carousel-control').hide();
  }

});