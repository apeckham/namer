function liveValidateForm () {
  function formCompleted () {
    return $('#survey_what').val().length > 0 && $('#survey_description').val().length > 0;
  }

  $("input, textarea").keyup(function() {
    $("#survey_submit").attr("disabled", !formCompleted());
  });

  $("form").submit(function () {
    return formCompleted();
  });
  
}