$(document).ready(function(){
	// Add smooth scrolling to all cta
	$("a").on('click', function(e) {
		
		e.preventDefault();
		if (this.hash !== "") {
			// Prevent default anchor click behavior
		
			// Store hash
			var hash = this.hash;
			var offset = -100;
			// Using jQuery's animate() method to add smooth page scroll
			$('html, body').animate({
				scrollTop: $(hash).offset().top + offset
			}, 1200, function(){
	 
				window.location.hash = hash;
			});
		}
		
 });
 return false
});