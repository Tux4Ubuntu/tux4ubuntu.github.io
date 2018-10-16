// // vanilla JS
// // init with element
// var grid = document.querySelector('.grid');
// var msnry = new Masonry( grid, {
//   // options...
//   itemSelector: '.grid-item',
//   columnWidth: 200
// });

// // init with selector
// var msnry = new Masonry( '.grid', {
//   // options...
// });

// var imgLoad = imagesLoaded( grid );
//   debugger;
//   imgLoad.on( 'progress', msnry.layout() );

$(document).ready(function() {

  var $boxes = $('.grid-item');
  $boxes.hide();

  var $container = $('.grid');
  $container.imagesLoaded( function() {
    $boxes.fadeIn();

    $container.masonry({
        itemSelector : '.grid-item',
        columnwidth: 200,
        //gutter: 20,
        //isFitWidth: true,
        isAnimated: !Modernizr.csstransitions
    });    
  });
});