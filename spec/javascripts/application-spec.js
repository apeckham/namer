describe("liveValidateForm", function() {
  it("disables the submit button until all fields are non empty", function() {
    spec.loadFixture('form');
    liveValidateForm();
    expect($('form input[type=submit]').attr('disabled')).toBeFalsy();
    $('form input').keyup();
    expect($('form input[type=submit]').attr('disabled')).toBeTruthy();
  });
  
  it("prevents the form from being submitted until all fields are non empty");
});