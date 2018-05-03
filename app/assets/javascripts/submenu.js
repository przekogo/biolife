$(document).on('click', '.newslist .snippet', function () {
  if ($(this).hasClass('active')){return};
  $('.snippet.active').removeClass('active');
  $(this).addClass('active');
  var nid = $(this).attr('data-nid');
  $('.article').animate({opacity: 0.0}, 200, 'linear', function(){
    $.ajax({
      url: 'news/render_news',
      method: 'post',
      data: {'news_id' : nid}
    }).success(function(){
      $('.article').animate({opacity: 1}, 200, 'linear')
    });
  });
}).on('click', '.pelletlist .snippet', function(){
  if ($(this).hasClass('active')){return};
  $('.snippet.active').removeClass('active');
  $(this).addClass('active');
  var partial = $(this).attr('data-partial');
  $('.article').animate({opacity: 0.0}, 200, 'linear', function(){
    $.ajax({
      url: 'pellet/switch',
      method: 'post',
      data: {'partial' : partial}
    }).success(function(){
      $('.article').animate({opacity: 1}, 200, 'linear')
    });
  });
})