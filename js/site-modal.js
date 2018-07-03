// Get the modal
var modal = document.getElementById('mySiteModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var modalImg = document.getElementById("siteModal");

function reply_click(clicked_id) {
  modal.style.display = "flex";
  $("body").addClass("modal-open"); //block body scroll


  var srcString = String(document.getElementById(clicked_id).src);

  // String.prototype.splice = function(idx, rem, str) {
  //   return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
  // };
  //
  // if (screen.width < 992) {
  //   var result = srcString.splice((srcString.length - 4), 0, "full");
  // } else {
  //   var result = srcString.splice((srcString.length - 4), 0, "full2");
  // }
  //
  // modalImg.src = result;

}

// When the user clicks on modalImg, close the modal
modalImg.onclick = function() {
  modal.style.display = "none";
  $("body").removeClass("modal-open"); //remove blocked scroll from body
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("siteClose")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  $("body").removeClass("modal-open"); //remove blocked scroll from body
  $("#siteModal").css("display", "none");
  $("#guiaDispositivo").css("display", "flex");
};




//menu

var buttonActive = false;

function buttonActive() {
  if (buttonActive == false) {
    buttonActive = true;

  }
}

$(document).ready(function() {
  $("#smartphone").click(function() {
    $("#smartphone").children().css("color", "#bbb");
    $("#tablet").children().css("color", "white");
    $("#desktop").children().css("color", "white");
    $("hr").css("margin-left", "0");
    $("#guiaDispositivo").css("display", "none");
  });
});

$(document).ready(function() {
  $("#tablet").click(function() {
    $("#smartphone").children().css("color", "white");
    $("#tablet").children().css("color", "#bbb");
    $("#desktop").children().css("color", "white");
    $("hr").css("margin-left", "33.33%");
    $("#guiaDispositivo").css("display", "none");
  });
});

$(document).ready(function() {
  $("#desktop").click(function() {
    $("#smartphone").children().css("color", "white");
    $("#tablet").children().css("color", "white");
    $("#desktop").children().css("color", "#bbb");
    $("hr").css("margin-left", "66.66%");
    $("#guiaDispositivo").css("display", "none");
  });
});

$(document).ready(function() {
  $("#smartphone").mouseover(function() {
    $("#smartphone").children().css("color", "#bbb");
  });
  $("#tablet").mouseover(function() {
    $("#tablet").children().css("color", "#bbb");
  });
  $("#desktop").mouseover(function() {
    $("#desktop").children().css("color", "#bbb");
  });
  $("#smartphone").mouseout(function() {
    $("#smartphone").children().css("color", "white");
  });
  $("#tablet").mouseout(function() {
    $("#tablet").children().css("color", "white");
  });
  $("#desktop").mouseout(function() {
    $("#desktop").children().css("color", "white");
  });
});



//resize frame

function frameSize(deviceValue) {

  var device = {
    smartphone: 500,
    tablet: 900,
    desktop: 1920
  }

  var deviceSetting = String(deviceValue);

  var proportion = document.getElementById("iframeContainer").offsetWidth / device[deviceSetting];


  // $("#" + deviceSetting).children().css("color", "#bbb");
  $("#siteModal").css("display", "block");
  $("#siteModal").css("width", device[deviceSetting]);
  $("#siteModal").css("-webkit-transform", "scale(" + proportion + ")");


  $(window).scroll(function() {
    $("#siteModal").css("display", "block");
    $("#siteModal").css("width", device[deviceSetting]);
    $("#siteModal").css("-webkit-transform", "scale(" + proportion + ")");
  })
}


// block background when modal is open
(function() {
  var _overlay = document.getElementById('mySiteModal');
  var _clientY = null; // remember Y position on touch start

  _overlay.addEventListener('touchstart', function(event) {
    if (event.targetTouches.length === 1) {
      // detect single touch
      _clientY = event.targetTouches[0].clientY;
    }
  }, false);

  _overlay.addEventListener('touchmove', function(event) {
    if (event.targetTouches.length === 1) {
      // detect single touch
      disableRubberBand(event);
    }
  }, false);

  function disableRubberBand(event) {
    var clientY = event.targetTouches[0].clientY - _clientY;

    if (_overlay.scrollTop === 0 && clientY > 0) {
      // element is at the top of its scroll
      event.preventDefault();
    }

    if (isOverlayTotallyScrolled() && clientY < 0) {
      //element is at the top of its scroll
      event.preventDefault();
    }
  }

  function isOverlayTotallyScrolled() {
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight#Problems_and_solutions
    return _overlay.scrollHeight - _overlay.scrollTop <= _overlay.clientHeight;
  }
}())