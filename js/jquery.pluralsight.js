$(document).ready(function(){  
	
	// Create a root instance  
	new Vue({
	  	el: '#app'
	});
	
	$(window).on({
		resize:function(){     
			$('body').removeClass('nav--open');     
		}
	});
	
	
});





