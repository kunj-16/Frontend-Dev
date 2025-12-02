$(document).ready(function() {

  $("#topics .topic").on("click", function() {
    $(this).toggleClass("subscribed");
    const status = $(this).hasClass("subscribed") ? "Subscribed" : "Unsubscribed";
    $("#message").text(`${status} to ${$(this).data("topic")}`);
  });

  $(".unsubscribeBtn").on("click", function(e) {
    e.stopPropagation();
    const parent = $(this).closest(".topic");
    parent.removeClass("subscribed");
    $("#message").text(`Unsubscribed from ${parent.data("topic")}`);
  });

  $("#addTopicBtn").click(function() {
    const topicName = $("#newTopic").val().trim();
    if(topicName === "") return;
    const newTopic = $(`<div class="topic" data-topic="${topicName}">${topicName} <button class="unsubscribeBtn">Unsubscribe</button></div>`);
    $("#topics").append(newTopic);
    $("#newTopic").val("");

    $("#topics .topic").off("click").on("click", function() {
      $(this).toggleClass("subscribed");
      const status = $(this).hasClass("subscribed") ? "Subscribed" : "Unsubscribed";
      $("#message").text(`${status} to ${$(this).data("topic")}`);
    });

    $(".unsubscribeBtn").off("click").on("click", function(e) {
      e.stopPropagation();
      const parent = $(this).closest(".topic");
      parent.removeClass("subscribed");
      $("#message").text(`Unsubscribed from ${parent.data("topic")}`);
    });
  });

});
