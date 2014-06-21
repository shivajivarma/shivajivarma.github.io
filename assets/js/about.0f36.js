function contactForm(){
	$.ajax({
		type: "POST",
		url: 'http://php-shivajivarma.rhcloud.com/mail/mail.php',
		data: {name:$('#name').val(),sender:$('#sender').val(),message:$('#message').val(),subject:"Contact Form"},
		success: function(status){
		 if(status == 'success')
			$('#myModal .modal-body').html('Message send successfully :)');
		else 
			$('#myModal .modal-body').html('Unable to send. Please try after sometime.');
			
			$('#myModal').modal('show');
		}
	});
}