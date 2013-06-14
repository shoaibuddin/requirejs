// Define the libraries you woould like to have for this module,
// Here we just want to load jquery
define(['jquery'], function($) {
	$('#slide').click(function(event) {
		$(this).slideToggle('slow/400/fast');
	});

});