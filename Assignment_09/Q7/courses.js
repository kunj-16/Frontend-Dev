$(document).ready(function() {

  function updateCount(count) {
    $("#matchCount").text("Matched Courses: " + count);
  }

  $("#searchInput").keyup(function() {
    const query = $(this).val().toLowerCase();
    let matchedCount = 0;

    $(".course").each(function() {
      const courseText = $(this).text();
      if(courseText.toLowerCase().includes(query) && query !== "") {
        $(this).show();
        const regex = new RegExp(`(${query})`, "gi");
        $(this).html(courseText.replace(regex, '<span class="highlight">$1</span>'));
        matchedCount++;
      } else if(query === "") {
        $(this).show();
        $(this).html(courseText);
      } else {
        $(this).hide();
      }
    });

    updateCount(matchedCount);
  });

  $("#clearBtn").click(function() {
    $("#searchInput").val("");
    $(".course").show().each(function() {
      const text = $(this).text();
      $(this).html(text);
    });
    updateCount($(".course").length);
  });

  updateCount($(".course").length);

});
