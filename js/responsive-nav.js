jQuery(document).ready(function(){
	
	
	jQuery('#nav-button').click(function() {
			jQuery('#options li').show();
	});
	
	if ( jQuery(window).width() < 767) {
	jQuery('#options li a').click(function() {
			jQuery('#options li').hide();
	});
	}
	
	jQuery(window).resize(function() {
  if ( jQuery(window).width() < 767) {
	jQuery('#options li a').click(function() {
			jQuery('#options li').hide();
	});
	}
	});
	
	jQuery(window).resize(function() {
  if ( jQuery(window).width() > 767) {
			jQuery('#options li').show();
			jQuery('#options li a').click(function() {
			jQuery('#options li').show();
	});
	}
	});
	
});	
	