var jq1 = jQuery.noConflict(true); // Version 1
var jq2 = jQuery.noConflict(true); // Version 2

jq1(document).ready(function() {
  var slides = jq1("#carousel .slide");
  var current = 0;
  function showSlide(index) {
    slides.hide();
    slides.eq(index).fadeIn();
    jq1(".widget").removeClass("active");
    jq1(".widget").eq(index % jq1(".widget").length).addClass("active");
  }
  showSlide(current);
  setInterval(function() {
    current = (current + 1) % slides.length;
    showSlide(current);
  }, 3000);
});

jq2(document).ready(function() {
  jq2(".widget").hover(function(e) {
    var tooltipText = jq2(this).data("tooltip");
    var tooltip = jq2("<div class='tooltip'></div>").text(tooltipText).appendTo("body");
    tooltip.css({ top: e.pageY + 10 + "px", left: e.pageX + 10 + "px" }).fadeIn();
    jq2(this).data("tooltipEl", tooltip);
  }, function() {
    jq2(this).data("tooltipEl").remove();
  });

  setTimeout(function() {
    jq2("#modal").fadeIn();
  }, 2000);

  jq2("#modalClose").click(function() {
    jq2("#modal").fadeOut();
  });
});
