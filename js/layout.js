var myDiv = $("#visualContainer");

// função tamanho total do div com scroll
function scrollSize() {
  return myDiv.get(0).scrollWidth;
};

// função tamnaho do scroll menos viewport
function scrollViewPortSize() {
  return scrollSize() - myDiv.innerWidth()
}

// função ponto médio do scroll
function midScroll() {
  return myDiv.offset().left + (scrollViewPortSize() / 2);
}

// função alinhamento do layout
function layoutAlign() {
  myDiv.animate({
    scrollLeft: midScroll()
  });
}

layoutAlign();

// rodar alinhamento ao mudar tamanho da tela
document.getElementsByTagName("BODY")[0].onresize = function() {
  layoutAlign()
};

// pegar posicao do scroll

// $(document).ready(function() {
//   $("#visualContainer").scroll(function() {
//     var horizontalPosition = $("#visualContainer").scrollLeft();
//     console.log(horizontalPosition);
//   });
// });

document.getElementById("visualContainer").addEventListener("touchend", cardAlign);
document.getElementById("visualContainer").addEventListener("touchstart", stopAnimation);

function stopAnimation() {
  myDiv.stop();
}

function cardAlign() {
  setTimeout(function() {
    myDiv.css("-ms-overflow-scrolling", "auto");
    myDiv.css("overflow-scrolling", "auto");
    myDiv.css("-moz-overflow-scrolling", "auto");
    myDiv.css("-o-overflow-scrolling", "auto");
    myDiv.css("-webkit-overflow-scrolling", "auto");
    myDiv.stop();

    var horizontalPosition = $("#visualContainer").scrollLeft();
    console.log(horizontalPosition);
    if ((horizontalPosition > (midScroll() - (midScroll() / 3))) && (horizontalPosition < (midScroll() + (midScroll() / 3)))) {
      layoutAlign();
    }
    if (horizontalPosition < (midScroll() - (midScroll() / 3))) {
      myDiv.animate({
        scrollLeft: "0"
      });
    }
    if (horizontalPosition > (midScroll() + (midScroll() / 3))) {
      myDiv.animate({
        scrollLeft: scrollViewPortSize()
      });
    }
    myDiv.css("-ms-overflow-scrolling", "touch");
    myDiv.css("overflow-scrolling", "touch");
    myDiv.css("-moz-overflow-scrolling", "touch");
    myDiv.css("-o-overflow-scrolling", "touch");
    myDiv.css("-webkit-overflow-scrolling", "touch");
  }, 2500);

};