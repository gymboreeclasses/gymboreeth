$(document).foundation();
$(window).on('resize', function () {
  new Foundation.Equalizer($("body"));
});