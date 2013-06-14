// Define the libraries you woould like to have for this module,
// Here we want to load jquerytools
define (['jquerytools'],function(){
	$("img[rel]").overlay({mask: {color: '#666666',loadSpeed: 200,opacity: 0.5}});

});