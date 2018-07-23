  function screenChange(screenWidth) {

    if (screenWidth < 768) {

    } else if (screenWidth >= 768 && screenWidth < 992) {


    } else if (screenWidth >= 992 && screenWidth < 2000) {

      // Contato
      document.getElementById("menuContato").innerHTML = "Entre em contato";

      // Testemunhos
      $("div.containerTestemunhos").removeClass("carousel-inner");
      $("div.subTestemunhos").removeClass("carousel-item");

    } else if (screenWidth >= 2000) {

    }
  };

  screenChange(window.innerWidth);

  $(window).resize(function() {
    function screenChange(screenWidth) {

      if (screenWidth < 768) {

        // Contato
        document.getElementById("menuContato").innerHTML = "contato";

        //Testemunhos
        $("carouselTestemunho").addClass("carousel-inner"); //<div> Class cardTestemunhos
        $("div.subTestemunhos").addClass("carousel-item"); //<div< Class SubTestemunhos

        carouselNormalization()

      } else if (screenWidth >= 768 && screenWidth < 992) {

        // Contato
        document.getElementById("menuContato").innerHTML = "contato";

        //Testemunhos
        $("div.containerTestemunhos").addClass("carousel-inner"); //<div> Class cardTestemunhos
        $("div.subTestemunhos").addClass("carousel-item"); //<div< Class SubTestemunhos

        carouselNormalization()

      } else if (screenWidth >= 992 && screenWidth < 2000) {


        // Contato
        document.getElementById("menuContato").innerHTML = "Entre em contato";

        // Testemunhos
        $("div.containerTestemunhos").removeClass("carousel-inner");
        $("div.subTestemunhos").removeClass("carousel-item");

      } else if (screenWidth >= 2000) {

      }
    };

    screenChange(window.innerWidth);

  });