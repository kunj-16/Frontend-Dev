$(document).ready(function() {

  $("#addPostBtn").click(function() {
    const newPost = $('<div class="post">New Blog Post</div>');
    newPost.append('<span class="tag">New</span>');
    $("#posts").append(newPost);
  });

  $("#prependPostBtn").click(function() {
    const featuredPost = $('<div class="post">Featured Blog Post</div>');
    featuredPost.prepend('<span class="tag">Featured</span>');
    $("#posts").prepend(featuredPost);
  });

  $("#removePostBtn").click(function() {
    $("#posts .post").last().remove();
  });

  $("#highlightBtn").click(function() {
    $("#posts .post").each(function() {
      const text = $(this).text();
      if(text.toLowerCase().includes("jquery")) {
        $(this).addClass("highlight");
      } else {
        $(this).removeClass("highlight");
      }
    });
  });

});
