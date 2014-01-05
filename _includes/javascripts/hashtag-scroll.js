var $root = $('html, body');
$('a').click(function() {
    var href = $.attr(this, 'href');
    var hash;
    if(href == '#'){
	hash = $('body');
     }else if(href.match(/^#[a-zA-Z0-9]+$/g)){
    	hash = $('[name='+href.substring(1)+']');
     }else 
	return true;
	
    $root.animate({
        scrollTop: $(hash).offset().top - 90
    }, 500, function () {
        window.location.hash = href;
        if(href == '#contact'){
            $('.navbar-right li:first').removeClass('active');
            $('.navbar-right li:last').addClass('active');
        }
    });
    return false;
});

$(document).ready(function(){
  
  var href = window.location.hash;
  
  if(href != ''){
    hash = $('[name='+href.substring(1)+']');

    $root.animate({
        scrollTop: $(hash).offset().top - 90
      }, 500, function () {
        if(href == '#contact'){
            $('.navbar-right li:first').removeClass('active');
            $('.navbar-right li:last').addClass('active');
        }
    });
  }

});