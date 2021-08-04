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
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: ".slider-arrow-left",
    nextArrow: ".slider-arrow-right",
  });

  // change slider background
  $('.post-item').hover(function(){
    let img_src = $(this).children('img').attr('src');
    let video_src = $(this).children('video').attr('src');
    if(img_src){
      $(".thumbnail-img").css("display","block");
      $(".thumbnail-video").css("display","none");
      $(".thumbnail-img").attr("src",img_src);
    }
    if(video_src){
      console
      $(".thumbnail-img").css("display","none");
      $(".thumbnail-video").css("display","block");
      $(".thumbnail-video").attr("src",video_src);
    }
  });
});

