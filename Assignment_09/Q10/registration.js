$(document).ready(function() {

  const existingEmails = ["user1@example.com", "user2@example.com", "test@example.com"];

  $("#registrationForm").submit(function(e) {
    e.preventDefault();

    let isValid = true;
    const name = $("#name").val().trim();
    const email = $("#email").val().trim();
    const password = $("#password").val();

    $("input").removeClass("error");
    $("#success").text("");

    if(name === "") {
      $("#name").addClass("error");
      isValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailPattern.test(email) || existingEmails.includes(email)) {
      $("#email").addClass("error");
      isValid = false;
    }

    if(password.length < 8) {
      $("#password").addClass("error");
      isValid = false;
    }

    if(isValid) {
      $("#success").text("Registration successful!");
    }
  });

});
