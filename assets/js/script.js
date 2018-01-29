$(document).ready(function() {
  $('.nav-link').click(function(event) {
    var target = event.target;
    var id = target.id;
    var url = '/_includes/html/' + id + '.html';
    $.get(url, function(content) {
      $('main').html(content);
    })

  });
});

