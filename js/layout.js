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

// rodar alinhamento ao mudar tamanho da tela

// document.getElementById("visualContainer").addEventListener("touchend", alignTouch);
//
// function alignTouch() {
//   myDiv.on('scroll', function() {
//     var val = $(this).scrollLeft();
//     if (val >= (scrollViewPortSize() / 3)) {
//       layoutAlign();
//
//     }
//     console.log(val);
//     val = 0
//
//   })
// };

// && (val <= (scrollViewPortSize() / 1.8))