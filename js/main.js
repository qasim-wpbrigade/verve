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
    $("body").toggleClass("sidebar-active");
  });

  // nav-overlay toggle
  $(".nav-overlay").click(function () {
    $("body").toggleClass("sidebar-active");
  });

  // slider
  $('.posts-slider').slick({
    infinite: true,
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: ".slider-arrow-left",
    nextArrow: ".slider-arrow-right",
    responsive: [
      {
        breakpoint: 765,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: "unslick"
      }
    ],
  });

});

 // change slider background
 function sliderbackground(src,type){
  if(type === "image"){
    $(".thumbnail-img").css({display: 'block'});
    $(".thumbnail-video").css({display: 'none'});
    $(".thumbnail-img").attr("src",src);
  }
  if(type === "video"){
    $(".thumbnail-img").css({display: 'none'});
    $(".thumbnail-video").css({display: 'block'});
    $(".thumbnail-video").attr("src",src);
    document.getElementById('backvideo').play();
  }
}