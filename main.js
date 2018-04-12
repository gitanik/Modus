$(document).ready(function() {
	$(".ham").click(function() {
		$(".nav-list-dropdown").css("display", "block");
	});
	$(".close-icon-wrapper").click(function() {
		$(".nav-list-dropdown").css("display", "none", 2000);
	});

	$('.nav-list li').click(function(){
		$('.nav-list li').removeClass('active');
		$(this).addClass('active');

		$('.switch-section.active').removeClass('active');
		$('.switch-section.section-'+$(this).data('show')).addClass('active');
		
	})
});