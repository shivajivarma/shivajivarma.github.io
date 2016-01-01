var $root = $('html, body');

$('a').click(function() {
  var href = $.attr(this, 'href');
  var hash;
    
  if(href == '#'){
    hash = $('body');
  }else if(href.match(/^#[a-zA-Z0-9]+$/g)){
    hash = $('#'+href.substring(1));
  }else 
	return true;
	
  $root.animate({
      scrollTop: $(hash).offset().top
    }, 500, function () {
      window.location.hash = href;
  });
 
  return false;
});

$(document).ready(function() {
	$.material.init();
	$('.dropdown-toggle').dropdown();

	$("#owl-index").owlCarousel({  
		autoPlay : 7000,
		stopOnHover : true,
		paginationSpeed : 1000,
		singleItem : true,
		autoHeight : false,
     });
	 
	 var owlWrapperHeight = parseInt($('.owl-wrapper').css('height'),10);
	 $('.owl-item').each(function(){
		$(this).css('padding-top',(owlWrapperHeight-parseInt($(this).css('height'), 10))/2 + 'px');
	 });
});

$(document).on('ready page:load', function() {
    Prism.highlightAll();
});