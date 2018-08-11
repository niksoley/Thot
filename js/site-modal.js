// Get the modal
var modal = document.getElementById('mySiteModal');
// Get the image and insert it inside the modal - use its "alt" text as a caption
var modalImg = document.getElementById("siteImgModal");
// Global variable for getting id from clicked layout
var clicketTemplate;



// Funcion to open modal and store id from clicked layout
function reply_click(clicked_id) {

  modal.style.display = "flex";
  $("body").addClass("modal-open"); //block body scroll
  $("#setaPlano1").css("display", "none");
  $("#setaPlano2").css("display", "none");
  $("#setaVoltar").css("display", "none");
  $("#setasContainer").css("display", "none");
  $(".tooltiptext").css("display", "none");

  clicketTemplate = clicked_id;

  return clicketTemplate
};

//menu

$(document).ready(function() {
  $("#smartphone").click(function() {
    $("#siteImgModal").css("display", "flex");
    $("#iframeContainer").css("max-width", "500px");
    $("#smartphone").children().css("color", "#bbb");
    $("#tablet").children().css("color", "white");
    $("#desktop").children().css("color", "white");
    $("hr").css("margin-left", "0");
    $("#guiaDispositivo").css("display", "none");
  });
});

$(document).ready(function() {
  $("#tablet").click(function() {
    $("#siteImgModal").css("display", "flex");
    $("#iframeContainer").css("max-width", "800px");
    $("#smartphone").children().css("color", "white");
    $("#tablet").children().css("color", "#bbb");
    $("#desktop").children().css("color", "white");
    $("hr").css("margin-left", "33.33%");
    $("#guiaDispositivo").css("display", "none");
  });
});

$(document).ready(function() {
  $("#desktop").click(function() {
    $("#siteImgModal").css("display", "flex");
    $("#iframeContainer").css("max-width", "none");
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
  $('#loader').css('display', 'block');
  $('#siteImgModal').css('display', 'none');

  var srcString = String(document.getElementById(clicketTemplate).src);

  String.prototype.splice = function(idx, rem, str) {
    return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
  };


  var deviceSetting = String(deviceValue);

  if (deviceSetting == "smartphone") {
    var imgAdress = srcString.splice((srcString.length - 4), 0, "smartphone");
  }
  if (deviceValue == "tablet") {
    var imgAdress = srcString.splice((srcString.length - 4), 0, "tablet");
  }
  if (deviceValue == "desktop") {
    var imgAdress = srcString.splice((srcString.length - 4), 0, "full");
  }


  modalImg.src = imgAdress;

  $.get(imgAdress, {}, function() {
    $('#siteImgModal').css('display', 'flex');
    $('#loader').css('display', 'none');
  });


  //
  //
  //
  //   var proportion = document.getElementById("iframeContainer").offsetWidth / device[deviceSetting];
  //
  //
  //   // $("#" + deviceSetting).children().css("color", "#bbb");
  //   $("#siteModal").css("display", "block");
  //   $("#siteModal").css("width", device[deviceSetting]);
  //   $("#siteModal").css("-webkit-transform", "scale(" + proportion + ")");
  //
  //
  //   $(window).scroll(function() {
  //     $("#siteModal").css("display", "block");
  //     $("#siteModal").css("width", device[deviceSetting]);
  //     $("#siteModal").css("-webkit-transform", "scale(" + proportion + ")");
  //   })
  // }
}

// When the user clicks on modalImg, close the modal
modalImg.onclick = function() {
  modal.style.display = "none";
  $("body").removeClass("modal-open"); //remove blocked scroll from body
  $("#siteModal").css("display", "none");
  $("#guiaDispositivo").css("display", "flex");
  if (screen.width >= 992) {
    $("#siteImgModal").css("display", "none");
    $("#setaPlano1").css("display", "block");
    $("#setaPlano2").css("display", "block");
    $("#setaVoltar").css("display", "block");
    $("#setasContainer").css("display", "block");
    $(".tooltiptext").css("display", "inline");
  }
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("siteClose")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  $("body").removeClass("modal-open"); //remove blocked scroll from body
  $("#siteModal").css("display", "none");
  $("#guiaDispositivo").css("display", "flex");

  if (screen.width >= 992) {
    $("#siteImgModal").css("display", "none");
    $("#siteImgModal").css("display", "none");
    $("#setaPlano1").css("display", "block");
    $("#setaPlano2").css("display", "block");
    $("#setaVoltar").css("display", "block");
    $("#setasContainer").css("display", "block");
    $(".tooltiptext").css("display", "inline");
  }
};

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