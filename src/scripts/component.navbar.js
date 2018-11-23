document.addEventListener("DOMContentLoaded", function (event) {

  // Initial scroll position
  var scrollState = 0;

  // Store navbar classes
  var navClasses = document.getElementById('js-navbar').classList;

  // returns current scroll position
  var scrollTop = function () {
    return window.scrollY;
  };

  // Primary scroll event function
  var scrollDetect = function (home, down, up) {
    // Current scroll position
    var currentScroll = scrollTop();
    if (scrollTop() === 0) {
      home();
    } else if (currentScroll > scrollState) {
      down();
    } else {
      up();
    }
    // Set previous scroll position
    scrollState = scrollTop();
  };

  function homeAction() {
    console.log("home");
    navClasses.remove('open');
    navClasses.remove('collapse');
  }

  function downAction() {
    navClasses.remove('open');
    navClasses.add('collapse');
  }

  function upAction() {
    navClasses.remove('collapse');
    navClasses.add('open');
  }

  // run it attached to window
  window.addEventListener("scroll", function () {
    if (window.innerWidth <= 768) {
      scrollDetect(homeAction, downAction, upAction);
    }
  });

});