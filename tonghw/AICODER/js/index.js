$(function () {
  $('.map-course li:even').css("margin-left", "260px");
  $('.map-course li:even').css("text-align", "right");
  $('.map-course li:odd').css("margin-left", "730px");
  $('.map-course li:even').css("width", "30%");
  $('.map-course li:odd').css("width", "40%");

  $('.kk').on('click', function () {
    console.log(this);
    $(this).children('.map-detail').show();
    $(this).siblings().children('.map-detail').hide();

  })

});