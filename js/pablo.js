$(document).ready(function () {
  var debounceScrolling = null;

  $(".countdown").each(function (e) {
    new Countdown(this, "2020-03-20 19:30:00");
  });
});
