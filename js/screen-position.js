var bodyHeight = ((document.getElementById('body').offsetHeight) / 30);

//get offsets for all your div's.  Now. you can access the number of pixels from the top of the document
//each object is by using one.top, two.top, or whatever you name your variables

var one = $("#testemunhos").offset();

$(document).ready(function() {
  $(window).scroll(function() {
    //the scroll() function will run every time the selected object is scrolled.
    //since you are binding the change of size to the scroll event, it may be best not to provide a direct
    //href to the objects.  Instead, you may want to use scrollTo inside of a click event.
    //Or, you could just add a click event that calls scroll when the link is clicked, as done below.
    //calling the scrollTop() function with no arguments will give you the current position in pixels of the selected object.
    var screenPosition = $(document).scrollTop();
    if ((screenPosition + bodyHeight + 1000) >= one.top) {
      $("#testemunhos").css("background-color", "white");

    }
    if ((screenPosition + bodyHeight + 250) >= one.top) {
      $("#testemunhos").css("animation-play-state", "initial");

    }
  });

  //call the scroll() event so that the proper one is highlighted at the start
  $(window).scroll();
  $(".one").click(function() {
    $(window).scroll();
  });
});