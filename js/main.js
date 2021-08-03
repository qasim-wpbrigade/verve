$(document).ready(function () {
  // full screen toggle
  $("#full-screen-btn").on("click", function () {
    if (!document.fullscreenElement) {
      let e = document.querySelector("html");
      e.requestFullscreen();
      $("#full-screen-icon").removeClass("fa-expand");
      $("#full-screen-icon").addClass("fa-compress");
    } else {
      document.exitFullscreen();
      $("#full-screen-icon").addClass("fa-expand");
      $("#full-screen-icon").removeClass("fa-compress");
    }
  });

  // side menu toggle
  $(".menu-toggle-btn").click(function () {
    $(".side-menu").toggleClass("active");
  });
});

//https://pirenko-themes.com/verve/portfolios/ny-city/
