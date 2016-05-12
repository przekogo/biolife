$(document).on('focusout', 'form input, form textarea', function() {
  resetValidationErrors();
  validateForm($(this).closest('form'));
})

function resetValidationErrors() {
  $('form input, form textarea').each(function(){
    $(this).parent().children('span').remove();
  })
}

function isValidEmailAddress(emailAddress) {
    var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return pattern.test(emailAddress);
};

function validateForm(form) {
  var valid = true;
  form.find('input, textarea').each(function(){
    switch ($(this).prop('name')) {
      case 'name':
        if ($(this).val()=='') {
          $(this).parent().append('<span class="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span><span class="help-block">Imię i nazwisko lub nazwa firmy nie może być puste.</span>')
          valid = false
        }
        break;
      case 'email':
        if ($(this).val()=='' || !isValidEmailAddress( $(this).val() )) {
          $(this).parent().append('<span class="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span><span class="help-block">Proszę podać prawidłowy adres e-mail.</span>')
          valid = false
        }
        break;
      case 'message':
        if ($(this).val()=='') {
          $(this).parent().append('<span class="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span><span class="help-block">Treść wiadomości nie może być pusta.</span>')
          valid = false
        }
        break;
    }  
  })
  console.log(valid);
  return valid;
}