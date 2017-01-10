$(function () {
  var elMasonry = $('.masonry');
  elMasonry.imagesLoaded(function () {
    elMasonry.masonry({
      columnWidth: '.card',
      itemSelector: '.card'
    })
  })
});
