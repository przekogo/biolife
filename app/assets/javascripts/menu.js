$(document).on('click', '.nav a', function(){
  $(this).blur();
}).on('click', '#offer a', function(){
  if ($('.offers').hasClass('slidup')) {
    $('.offers').css({'top' : '2px', 'opacity' : '1', 'z-index' : '2'});  
  }
  else {
    $('.offers').css({'top' : '-150px', 'opacity' : '0', 'z-index' : '-1'});
  }
  $('.offers').toggleClass('slidup');
  $(this).toggleClass('active');
})