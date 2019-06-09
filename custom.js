jQuery(document).ready(function($){  // <-- Ensures jQuery runs after the document has loaded.
    console.log('hi');//test that this js file is enqueue'd
	
	$('#navigationBar').hide(); //hides the top navigation bar on load
	
	$(window).scroll(function(){
    
        var scroll = $(window).scrollTop(); // <-- This is how you use variables in jQuery! Easy, right?!
    
            if (scroll >= 350) { // If user is scrolled down 350px from the top...
    
                $('#navigationBar').fadeIn('slow');//fades in the navigationBar to show when window hits greater than 350px
             }else{
				 $('#navigationBar').fadeOut('slow');//fades out the navigationBar to hide
			 };
            });
	
});