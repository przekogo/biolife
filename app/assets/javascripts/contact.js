$(document).on('click', '#contact_form .send-mail', function() {
  resetValidationErrors();
  var valid = validateForm($('#contact_form'));
  if (valid){
    $(this).html("<i class='fa fa-circle-o-notch fa-spin fa-lg fa-fw margin-bottom'></i><span class='sr-only'>Loading...</span>").removeClass('send-mail')
    $('#contact_form').submit();
  }
}
).on('click', '#contact_form .reset-button', function() {
  $('#contact_form .form-control').prop('disabled', false);
  $('#contact_form textarea').val('');
  $(this).html('Dostarcz').removeClass('reset-button').blur().addClass('send-mail');
}
).on('mouseover', '#contact_form .reset-button', function() {
  $(this).html('Jeszcze raz');
}).on('mouseout', '#contact_form .reset-button', function() {
  $(this).html('Dostarczono');
})