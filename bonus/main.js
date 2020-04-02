$($(document).ready(function() {


  // collego il click delle frecce all'img e pallino corrispondente

  // evento al click prev
  $('.prev').click(
    prevImg
  );

  // evento click next
  $('.next').click(
    nextImg
  );


  // centralizzo la funzione del prev carousel
  function prevImg(){
    prevImg
  };

  // collegare il click del pallino al pallino e img corrispondente

  // evento click pallino
  $('.nav i').click(
      ballClick
  );

  // centralizzo la funzione per il click sul pallino
  function ballClick(){

    // salvare il riferimento del pallino che vado ad attivare al click
    var ballActiveClick = $('.nav i');

    // salvare il riferimento dell'img attiva al click del pallino
    var imgList = $('.images img');

    var imgActivePrev = $('.images img.activePrev');
    imgActivePrev.removeClass('activePrev');


    var indiceImmagineDaMostrare = ballActiveClick.index(this);

    // togli la classe active a tutti i pallini
    ballActiveClick.removeClass('active');
    imgList.removeClass('active');

    //aggiungo la classe active al pallino cliccato
    $(this).addClass('active').index(this);
    console.log(ballActiveClick.index(this));

    // aggiungo la classe active all'img con index = al pallino cliccato
    $('.images img').eq(indiceImmagineDaMostrare).addClass('active');
    console.log($('.images img').eq(indiceImmagineDaMostrare).addClass('active'));
  };
  // centralizzo la funzione del prev carousel
  function prevImg(){

    // salvare il riferimento dell'img attiva al click
    var imgActive = $('.images img.active');
    // salvare il riferimento del pallino attivo al click
    var ballActive = $('.nav i.active');

    var imgActivePrev = $('.images img.activePrev');
    console.log(imgActivePrev);
    imgActivePrev.removeClass('activePrev');




    // // togliere la classe active all'img
    imgActive.removeClass('active');
    // togliere la classe active al pallino
    ballActive.removeClass('active');

    // se è l'ultimo aggiungi la classe active al first
    if ((imgActivePrev.hasClass('first')) && (ballActive.hasClass('first'))) {
      $(".images img.last").addClass('activePrev');
      $(".nav i.last").addClass('active');

    //altrimenti aggiungere la classe active al next
    }else {
      imgActivePrev.prev().addClass('activePrev');
      ballActive.prev().addClass('active');
    }

  };

  // centralizzo la funzione del next carousel
  function nextImg(){

    // salvare il riferimento dell'img attiva al click
    var imgActive = $('.images img.active');
    // salvare il riferimento del pallino attivo al click
    var ballActive = $('.nav i.active');

    var imgActivePrev = $('.images img.activePrev');

    imgActive.addClass('active');
    imgActive.removeClass('active');
    imgActivePrev.removeClass('activePrev');
    ballActive.removeClass('active');



    // if (imgActivePrev.hasClass('imgActivePrev')) {
    //   imgActivePrev.addClass('active');
    //   imgActivePrev.removeClass('activePrev');
    // }else {
    //
    // }
    if ((imgActive.hasClass('last')) && (ballActive.hasClass('last'))) {
      $(".images img.first").addClass('active');
      $(".nav i.first").addClass('active');

    //altrimenti aggiungere la classe active al next
    }else {
      imgActive.next().addClass('active');
      ballActive.next().addClass('active');

      }





  };

















})
);
