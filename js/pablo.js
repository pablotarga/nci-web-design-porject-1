$(document).ready(function() {
  var debounceScrolling = null;

  $(document).on("scroll", checkScrolling);

  function checkScrolling(e) {
    if (debounceScrolling) {
      return;
    }

    debounceScrolling = true;
    setTimeout(function() {
      debounceScrolling = false;
    }, 50);

    console.log(e);
    console.log($("html").scrollTop());

    scrollTimer = null;
  }
});
