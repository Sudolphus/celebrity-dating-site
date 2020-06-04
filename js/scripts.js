$(document).ready(function() {
  const age = confirm("Are you over 18, kid?");
  if (age) {
    $("#hiddenQuiz").show();
  } else {
    $("#underAge").show();
  };

  $("button#submit").click(function(event) {
    event.preventDefault();
    const genderInput = $("input:radio[name='gender']:checked").val();
    const dateInput = $("#firstDate").val();
    const religionInput = $("input:radio[name='religion']:checked").val();
    console.log(genderInput, dateInput, religionInput)

    if (!genderInput) {
      $("span#genderError").show();
    } else {
      $("span#genderError").hide();
    }

    if (!dateInput) {
      $("span#dateError").show();
    } else {
      $("span#dateError").hide();
    }

    if (!religionInput) {
      $("span#religionError").show();
    } else {
      $("span#religionError").hide();
    }

    if (genderInput === undefined || dateInput === "" || religionInput === undefined) {
      alert("You are unworthy!")
    } else {
      $("div#hiddenCage").show();
    };
  });

  $("button#reset").click(function() {
    $("div#hiddenCage").hide();
    $("span#religionError").hide();
    $("span#dateError").hide();
    $("span#genderError").hide();
  });
})