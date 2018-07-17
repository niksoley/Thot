var myDiv = $("#visualContainer");
var slideNumbers = 0;

// conta número de slides
slideNumbers = $('#visualContainer .innerSlide').length;

// função tamanho total do div com scroll
function scrollSize() {
  return myDiv.get(0).scrollWidth;
};

// função tamanho do scroll menos viewport
function scrollViewPortSize() {
  return scrollSize() - myDiv.innerWidth()
};

// verificar se numero de slides é par
function isEven() {
  return slideNumbers % 2 == 0;
};

// função ponto médio do scroll
function midScroll() {
  if (isEven() == true) {
    return myDiv.offset().left + (scrollViewPortSize() / 3);
  } else {
    return myDiv.offset().left + (scrollViewPortSize() / 2);
  }
};

// função alinhamento do layout
function layoutAlign() {
  myDiv.animate({
    scrollLeft: midScroll()
  });
};

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

// função tamanho total do slide com margin
function innerSlideWidth() {
  return $('.innerSlide').outerWidth(true);
};

// roda função alinhamento ao termino do touch
document.getElementById("visualContainer").addEventListener("touchend", cardAlign);
// encerra animação de alinamento quando iniciado touch
document.getElementById("visualContainer").addEventListener("touchstart", stopAnimation);

// função para enterromper animação
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

    var horizontalPosition = myDiv.scrollLeft();
    console.log(horizontalPosition);





    // if ((horizontalPosition > (midScroll() - (midScroll() / 3))) && (horizontalPosition < (midScroll() + (midScroll() / 3)))) {
    //   layoutAlign();
    // }
    // if (horizontalPosition < (midScroll() - (midScroll() / 3))) {
    //   myDiv.animate({
    //     scrollLeft: "0"
    //   });
    // }
    // if (horizontalPosition > (midScroll() + (midScroll() / 3))) {
    //   myDiv.animate({
    //     scrollLeft: scrollViewPortSize()
    //   });
    // }


    myDiv.css("-ms-overflow-scrolling", "touch");
    myDiv.css("overflow-scrolling", "touch");
    myDiv.css("-moz-overflow-scrolling", "touch");
    myDiv.css("-o-overflow-scrolling", "touch");
    myDiv.css("-webkit-overflow-scrolling", "touch");
  }, 2500);

};