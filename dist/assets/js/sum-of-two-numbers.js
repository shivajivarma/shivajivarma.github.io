$(document).ready(function(){
	var a = getUrlParameter("a");
	var b = getUrlParameter("b");
	if(a!="" && b!=""){
		if($.isNumeric(a) && $.isNumeric(b)){
			$("#output").html(+a + +b);
		}
		else  $("#output").html("Enter only numbers.");
	}
	else $("#output").html("Please fill the input and hit add button.");
});
function getUrlParameter( key ){  
		key = key.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");  
		var regexExpression = "[\\?&]"+key+"=([^&#]*)";  
		var regex = new RegExp( regexExpression );  
		var results = regex.exec( window.location.href );  
		if( results == null )    return "";  
			else    return unescape(results[1]).replace(/<script.*>.*<\/script>/g, "");
}