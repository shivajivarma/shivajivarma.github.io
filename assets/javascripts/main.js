$(document).ready(function(){
	$('#loading').remove();
	$('.hidden').removeClass('hidden');
});
/*var $root = $('html, body');
var contact = false;

$('a').click(function(e) {
    var href = $.attr(this, 'href');
    var hash;
    if(href == '#'){
    	e.preventDefault();
    	hash = $('body');
     }else if(href.match(/^#[a-zA-Z0-9]+$/g)){
     	e.preventDefault();
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
            contact = true;
        }
        else if(contact){
           $('.navbar-right li:first').addClass('active');
           $('.navbar-right li:last').removeClass('active');
           contact = false;
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
           contact = true;
        }
    });
  }

});*/

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
      scrollTop: $(hash).offset().top
    }, 500, function () {
      window.location.hash = href;
  });
 
  return false;
});


