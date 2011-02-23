function liveValidateForm ($form) {
  function formCompleted () {
    var allCompleted = true;
    $form.find('input[type=text], textarea').each(function () {
      if ($(this).val().length == 0) {
        allCompleted = false;
      }
    });
    
    return allCompleted;
  }

  $("input, textarea").keyup(function() {
    $form.find('input[type=submit]').attr("disabled", !formCompleted());
  });

  $form.submit(function () {
    return formCompleted();
  });
}