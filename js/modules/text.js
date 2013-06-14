define(['jquery'], function($) {
	//$('#module').html("Test String");

	$(".hello").click(function(event) {
		$(this).append("<strong>Hello World</strong>");
	});


	$('input').change(function(event) {
		$('.check').append("<strong>Click Happen</strong>");
	});

});