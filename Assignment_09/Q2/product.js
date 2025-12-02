$(document).ready(function() {
  $(".product").click(function() {
    if ($(this).data("stock") === 0) {
      alert("This product is out of stock!");
      return;
    }
    $(".product").removeClass("highlight");
    $(this).addClass("highlight");
  });

  $(".product").hover(
    function() { $(this).find(".details").slideDown(); },
    function() { $(this).find(".details").slideUp(); }
  );

  $(".favorite").click(function(e) {
    e.stopPropagation();
    $(this).toggleClass("selected");
  });
});
