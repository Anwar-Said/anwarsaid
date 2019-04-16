/*

My Custom JS
============

Author:  Brad Hussey
Updated: August 2013
Notes:	 Hand coded for Udemy.com

*/

$(document).ready(function() {

	$('#mujahidInfo').click(function(e) {

		e.preventDefault();
		$('#successAlert1').slideDown();

	});
	$('#asimInfo').click(function(e) {

		e.preventDefault();
		$('#successAlert2').slideDown();

	});
	$('#nayyarInfo').click(function(e) {

		e.preventDefault();
		$('#successAlert3').slideDown();

	});
	$('#rehanInfo').click(function(e) {

		e.preventDefault();
		$('#successAlert4').slideDown();

	});

	$('a.pop').click(function(e) {
		e.preventDefault();	
	});

	$('a.pop').popover();

	$('[rel="tooltip"]').tooltip();

	$("#homeMenuButtonID").click(function(){

		var requiredPos = $("#teamID").offset().top;

		$("html, body").animate({scrollTop: requiredPos },"slow");

	});


	// navbar dropdown functionality
	$('#mainNavBarID .dropdown').hover(function() {
		$(this).find('.dropdown-menu').first().stop(true, true).slideDown();
	}, function() {
		$(this).find('.dropdown-menu').first().stop(true, true).slideUp()
	});
});