$(document).ready(function() {
	$(".ham").click(function() {
		$(".nav-list-dropdown").css("display", "block");
	});
	$(".close-icon-wrapper").click(function() {
		$(".nav-list-dropdown").css("display", "none", 2000);
	});
});