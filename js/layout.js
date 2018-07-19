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
    return myDiv.offset().left + ((scrollViewPortSize() / 2) - (innerSlideWidth() / 2));
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

// função tamanho total do slide com margin
function innerSlideWidth() {
  return $('.innerSlide').outerWidth(true);
};

// função para pegar posição do scroll horizontal
function horizontalPosition() {
  return myDiv.scrollLeft();
};

// função para pegar padding do container
function containerPadding() {
  return (myDiv.innerWidth() - myDiv.width());
};

// função para pegar dimensoes além do padding que possam interferir no tamanho do scroll
function containerDimensions() {
  return (scrollSize() - ((innerSlideWidth() * slideNumbers) + containerPadding()));
};

// função para pegar dimensoes paddin e dimensoes extras na esquerda do scroll
function containerLeftDimensions() {
  return (containerDimensions() / 2) + (containerPadding() / 2);
};

// função para definir os pontos de viagem do viewport para que seu centro, esteja centralizado com o do layout
function slidePoints(layoutPoint) {
  var slidePoints = [];
  slidePoints[0] = 0;
  var secondPoint = (containerLeftDimensions() + (innerSlideWidth() + (innerSlideWidth() / 2))) - (myDiv.innerWidth() / 2);
  slidePoints[1] = secondPoint;
  var slidePointCache = secondPoint;
  for (i = 2; i < slideNumbers; i++) {
    slidePointCache += innerSlideWidth();
    slidePoints[slidePoints.length] = slidePointCache;
  };
  return slidePoints[layoutPoint];
};



// função para definir os pontos médios do viewport para cada slide
function slideViewportPoints() {
  ((midScroll() - (innerSlideWidth() * slideNumbers)) / 2)

  return;
};

console.log((containerLeftDimensions() + (innerSlideWidth() + (innerSlideWidth() / 2))))
console.log(slideNumbers)
console.log(innerSlideWidth() * slideNumbers)
console.log(slidePoints(4))
console.log(midScroll())
console.log(scrollSize())
console.log(innerSlideWidth())
console.log(scrollViewPortSize())
console.log(containerPadding())
console.log(containerDimensions())

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


    console.log(horizontalPosition());


    myDiv.animate({
      scrollLeft: slidePoints(1)
    });


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