var verticalScrollPosition = 0;
var verticalScrolling = 0;
var fingerMovementVertical = 0;
var fingerHorzintalPosition = 0;
var fingerHorizontalScrolling = 0;
var fingerMovement = 0;
var screenWidthChange = false;

// document.getElementsByTagName("BODY")[0].onresize = function() {
//   screenWidthChange = true;
//   console.log(screenWidthChange);
//   // setTimeout(function() {
//   //   screenWidthChange = false;
//   //   console.log(screenWidthChange);
//   // }, 1000);
// };



//seta  somar index++



if (screen.width < 992) {

  if (navigator.msMaxTouchPoints) {

    $('#sliderPlanos').addClass('ms-touch');

    $('#sliderPlanos').on('scroll', function() {
      $('.slidePlanos').css('transform', 'translate3d(-' + (100 - $(this).scrollLeft() / 6) + 'px,0,0)');
    });

  } else {

    var slider = {

      el: {
        slider: $("#sliderPlanos"),
        holder: $(".holder")
        // imgSlide: $(".slidePlanos")
      },

      slideWidth: $('#sliderPlanos').width(),
      touchstartx: undefined,
      touchmovex: undefined,
      movex: undefined,
      index: 0,
      longTouch: undefined,
      screenWidthChange: false,



      init: function() {
        this.screenChange();
        this.bindUIEvents();
      },

      screenChange: function() {
        document.getElementsByTagName("BODY")[0].onresize = function() {
          screenWidthChange = true;
          console.log(screenWidthChange);
          // setTimeout(function() {
          //   screenWidthChange = false;
          //   console.log(screenWidthChange);
          // }, 1000);
        };
      },


      bindUIEvents: function() {

        this.el.holder.on("touchstart", function(event) {
          slider.start(event);
        });

        this.el.holder.on("touchmove", function(event) {
          slider.move(event);
        });

        this.el.holder.on("touchend", function(event) {
          slider.end(event);

        });

      },

      start: function(event) {

        verticalScrollPosition = Math.floor(event.touches[0].clientY);

        // Test for flick.
        this.longTouch = true;
        setTimeout(() => {
          this.longTouch = true;
        }, 150);

        // Get the original touch position.
        this.touchstartx = event.originalEvent.touches[0].pageX;

        // The movement gets all janky if there's a transition on the elements.
        $('.animate').removeClass('animate');
      },

      move: function(event) {
        var verticalScrolling = Math.floor(event.touches[0].clientY);
        var fingerMovementVertical = Math.abs(verticalScrolling - verticalScrollPosition);
        console.log("MovimentoV: " + fingerMovementVertical);

        // Continuously return touch position.
        this.touchmovex = event.originalEvent.touches[0].pageX;
        // Calculate distance to translate holder.
        this.movex = this.index * this.slideWidth + (this.touchstartx - this.touchmovex);
        // Defines the speed the images should move at.
        var panx = 400 - this.movex / 6;
        if (this.movex < 1800) { // Makes the holder stop moving when there is no more content.
          this.el.holder.css('transform', 'translate3d(-' + this.movex + 'px,0,0)');
        }
        // if (panx < 100) { // Corrects an edge-case problem where the background image moves without the container moving.
        //   this.el.imgSlide.css('transform', 'translate3d(-' + panx + 'px,0,0)');
        // }
        console.log("MovimentoH: " + fingerMovement)

      },

      end: function(event) {
        // Calculate the distance swiped.
        var absMove = Math.abs(this.index * this.slideWidth - this.movex);
        // Calculate the index. All other calculations are based on the index.
        // if (fingerMovementVertical < 5 && (fingerMovement > 80)) {
        if ((absMove > this.slideWidth / 7) && (this.longTouch === true)) {
          if (this.movex > this.index * this.slideWidth && this.index < 2) {
            this.index++;
          } else if (this.movex < this.index * this.slideWidth && this.index > 0) {
            this.index--;
          }
        }
        // };
        // Move and animate the elements.

        this.el.holder.addClass('animate').css('transform', 'translate3d(-' + this.index * this.slideWidth + 'px,0,0)');
        // this.el.imgSlide.addClass('animate').css('transform', 'translate3d(-' - this.index * 50 + 'px,0,0)');

      }

    };

    slider.init();
    document.getElementsByTagName("BODY")[0].onresize = function() {
      slider.slideWidth = $('#sliderPlanos').width();
      slider.el.holder.addClass('animate').css('transform', 'translate3d(-' + slider.index * slider.slideWidth + 'px,0,0)');
    }
  }
}


// bloquear scroll vertical durante scroll horizontal

(function() {
  var _overlay = document.getElementById('sliderPlanos');
  var _clientY = null; // remember Y position on touch start


  _overlay.addEventListener('touchstart', function(event) {
    fingerHorzintalPosition = Math.floor(event.touches[0].clientX);
  }, false);

  _overlay.addEventListener('touchstart', function(event) {
    if (event.targetTouches.length === 1) {
      // detect single touch
      _clientY = event.targetTouches[0].clientY;
    }
  }, false);

  _overlay.addEventListener('touchmove', function(event) {
    fingerHorizontalScrolling = Math.floor(event.touches[0].clientX);
    fingerMovement = Math.abs(fingerHorizontalScrolling - fingerHorzintalPosition);
    if (fingerMovement > 20 || fingerMovement < (-20)) {
      if (event.targetTouches.length === 1) {
        // detect single touch
        disableRubberBand(event);
      }
    }
  }, false);

  function disableRubberBand(event) {
    var clientY = event.targetTouches[0].clientY - _clientY;
    // var test = event.cancelable;
    // console.log("é can:" + test);

    if (_overlay.scrollTop === 0 && clientY > 0) {
      // element is at the top of its scroll
      // event.cancelable = true;
      event.preventDefault();

    }

    if (isOverlayTotallyScrolled() && clientY < 0) {
      //element is at the top of its scroll
      // event.cancelable = true;
      event.preventDefault();

    }
  }

  function isOverlayTotallyScrolled() {
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight#Problems_and_solutions
    return _overlay.scrollHeight - _overlay.scrollTop <= _overlay.clientHeight;
  }
}())