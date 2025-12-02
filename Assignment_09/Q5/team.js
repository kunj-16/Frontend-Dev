$(document).ready(function() {

  $(".manager").click(function() {
    $(this).siblings(".employee").toggleClass("highlight");
  });

  $(".employee").hover(
    function() { $(this).children(".contact").slideDown(); },
    function() { $(this).children(".contact").slideUp(); }
  );

  $(".department").click(function(e) {
    if (!$(e.target).hasClass("department")) return;
    $(this).children(".employee").css("background-color", "#dfe6e9");
  });

  $("#randomEmployeeBtn").click(function() {
    const allEmployees = $(".employee");
    const randomIndex = Math.floor(Math.random() * allEmployees.length);
    const randomEmployee = allEmployees.eq(randomIndex);
    randomEmployee.siblings(".employee").addClass("highlight");
  });

  $("#toggleTeamBtn").click(function() {
    $(".department").each(function() {
      $(this).toggleClass("collapsed");
    });
  });

});
