jQuery(document).ready(function() {

	var cvnav = jQuery("nav").offset().top;
	
	jQuery(window).scroll(function() {
		var scroll = jQuery(window).scrollTop();
		
		if (scroll >= cvnav) {
			jQuery("nav").addClass("fixed-navbar").addClass("fixed-navbar-placeholder");
		} else {
			jQuery("nav").removeClass("fixed-navbar").removeClass("fixed-navbar-placeholder");		
		}
		
	});
	
});
//Props to @LearnWebCode for the YouTube tutorial https://www.youtube.com/watch?v=utonytGKodc
