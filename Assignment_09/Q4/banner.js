$(document).ready(function() {
  $(".banner").show();

  $("#hideBtn").click(function() {
    $(".banner").hide();
  });

  $("#showBtn").click(function() {
    $(".banner").show();
  });

  $("#slideUpBtn").click(function() {
    $(".banner").slideUp();
  });

  $("#slideDownBtn").click(function() {
    $(".banner").slideDown();
  });

  $("#fadeInBtn").click(function() {
    $(".banner").fadeIn(1000);
  });

  $("#fadeOutBtn").click(function() {
    $(".banner").fadeOut(1000);
  });

  let currentIndex = 0;
  const banners = $(".banner");

  function rotateBanners() {
    banners.fadeOut(500);
    currentIndex = (currentIndex + 1) % banners.length;
    banners.eq(currentIndex).fadeIn(500);
  }

  setInterval(rotateBanners, 5000);
});
