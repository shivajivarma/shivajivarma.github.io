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
        scrollTop: $(hash).offset().top + 3
    }, 500, function () {
        window.location.hash = href;
    });
    return false;
});