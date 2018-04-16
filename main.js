$(document).ready(function() {
	$(".ham").click(function() {
		$(".nav-list-dropdown").css("display", "block");
	});
	$(".close-icon-wrapper").click(function() {
		$(".nav-list-dropdown").css("display", "none", 2000);
	});
	
	 $(window).scroll(function(){                          
            if ($(this).scrollTop() > 100) {
				console.log(">100");
                $(".navbar").fadeIn(1000);
            } else {
                $(".navbar").fadeOut(1000);
				console.log("<100");
            }
        });

});