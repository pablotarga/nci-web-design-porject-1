$(document).ready(function() {
  var debounceScrolling = null;

  $(".countdown").each(function(e) {
    new Countdown(this, "2019-11-23 19:30:00");
  });
});
