//function to get the windows height
function screenHeight() {
  return $(window).height()
};

//update window height on screen flip
$(window).resize(function() {
  screenHeight();
});


//the scroll() function will run every time the selected object is scrolled.
//since you are binding the change of size to the scroll event, it may be best not to provide a direct
//href to the objects.  Instead, you may want to use scrollTo inside of a click event.
//Or, you could just add a click event that calls scroll when the link is clicked, as done below.
//calling the scrollTop() function with no arguments will give you the current position in pixels of the selected object.
$(document).ready(function() {
  $(window).scroll(function() {

    // get screen position
    var screenPosition = $(document).scrollTop();
    // get the bottom of the screen position
    var screenPositionBottom = screenPosition + screenHeight();


    //each object is by using one.top, two.top, or whatever you name your variables
    var one = $("#card").offset();
    var two = $("#planosContainer").offset();
    var three = $("#testemunhosH2").offset();


    if ((screenPositionBottom - 100) < one.top) {
      $("#card").css('transition', 'initial');
      $("#card").addClass("opacity");
      $("#card").css('transform', 'translateY(20px)');
    }
    if ((screenPositionBottom - 100) >= one.top) {
      $("#card").css('transition', 'opacity 0.7s ease-in , transform 0.5s linear');
      $("#card").removeClass("opacity");
      $("#card").css('transform', 'translateY(0px)');
    }
    if (screenPositionBottom < two.top) {
      $("#planosContainer").css('transition', 'initial');
      $("#planosContainer").addClass("opacity");
      $("#planosContainer").css('transform', 'translateY(20px)');
    }
    if (screenPositionBottom >= two.top) {
      $("#planosContainer").css('transition', 'opacity 0.7s ease-in , transform 0.5s linear');
      $("#planosContainer").removeClass("opacity");
      $("#planosContainer").css('transform', 'translateY(0px)');
    }
    if (screen.width > 1280) {
      if (screenPositionBottom < three.top) {
        $("#testemunhosH2").css('transition', 'initial');
        $("#testemunhosH2").addClass("opacity");
        $("#testemunhosH2").css('transform', 'translateY(20px)');
        $(".subTestemunhos").css('transition', 'initial');
        $(".subTestemunhos").addClass("opacity");
      }
      if (screenPositionBottom >= three.top) {
        $("#testemunhosH2").css('transition', 'opacity 0.7s ease-in , transform 0.5s linear');
        $("#testemunhosH2").removeClass("opacity");
        $("#testemunhosH2").css('transform', 'translateY(0px)');

        setTimeout(function() {
          $(".subTestemunhos").css('transition', 'opacity 0.7s ease-in , transform 0.5s linear');
          $(".subTestemunhos").removeClass("opacity");
        }, 300);
      }
    }
  });

  //call the scroll() event so that the proper one is highlighted at the start
  $(window).scroll();


  // $(".one").click(function() {
  //   $(window).scroll();
  // });
});