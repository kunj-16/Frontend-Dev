$(document).ready(function() {
  $(".question").click(function() {
    $(this).next(".answer").slideToggle();
  });

  $(".question").hover(
    function() { $(this).css("color", "#e67e22"); },
    function() { $(this).css("color", "black"); }
  );

  $(".question").dblclick(function() {
    $(".answer").slideUp();
  });

  $(".answer-input").focus(function() {
    $(this).closest(".faq-item").find(".question").css("background-color", "#dfe6e9");
  });

  $(".answer-input").blur(function() {
    $(this).closest(".faq-item").find(".question").css("background-color", "");
  });
});
