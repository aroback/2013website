jQuery(document).ready(function() {

	var cvnav = jQuery("nav").offset().top;
	
	jQuery(window).scroll(function() {
		var scroll = jQuery(window).scrollTop();
		
		if (scroll >= cvnav) {
			jQuery("nav").addClass("fixed-navbar");
		} else {
			jQuery("nav").removeClass("fixed-navbar");		
		}
		
	});
	
});
//Props to @LearnWebCode for the YouTube tutorial https://www.youtube.com/watch?v=utonytGKodc
