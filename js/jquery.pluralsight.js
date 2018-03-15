$(document).ready(function(){  
	
	// Create a root instance  
	new Vue({
	  	el: '#app'
	});
	
	// Create carousel segments for scrolling. 
	if($('.carousel').length){    
		 
		$('.carousel').each(function(){     
			var el = $(this);    
			  
			_el = el.find('.carousel--body');              
			_l = _el.attr('data-limits');               
			                                 
			_count = el.find('.carousel--segment').length;         
			if(_count > 1){                                                      
		   		control = $('<div />').attr('class','carousel--control').append(icon);                                          
				_el.append(control);  
				   
				// Build indicator for number of carousel segments that exist.
				for(x = 0; x < _count;x++){  
					el.find('.carousel--indicator ul').append($('<li />'));
				} 
				// Make the first list item active by default. 
				el.find('.carousel--indicator li').first().addClass('active');                                                                                  
			}
			
			$('.carousel--overflow').each(function(){
				$(this).find('.carousel--segment').css('flex-basis', $(this).outerWidth());
			});                                                                                                                        
		});                                                                           
		
		$(window).resize(function(){  
			$('.carousel--overflow').each(function(){
				$(this).find('.carousel--segment').css('flex-basis',$(this).outerWidth());
			});
		});
	} 
	
	
	window.setTimeout(function(){
		var el = $('.carousel:eq(0) .card:eq(0)');    
			el.removeClass('active');
	},5000);                             
	
	//css
	$(document).on({
		click:function(e){
			e.preventDefault();
			$('.search--overlay').show();
			$('.search--editable').focus();
		}
	},'search input');
	
	$(document).on({
		click:function(e){   
			$('body').removeClass('nav--open');
		}
	},'.overlay');
	
	$(window).on({
		resize:function(){     
			$('body').removeClass('nav--open');     
		}
	});
	
	$(document).on({
		click:function(e){        
			$('body').addClass('nav--open');
		}
	},'.header--button');  
	
	$(document).on({
		click:function(e){
			e.preventDefault(); 
			e.stopPropagation();
			$('.menu').addClass('active');
		}
	},'.menu--icon');  
	
	/* Capture All Documents Listener */
	$(document).on({
		click:function(e){
			$('.menu').removeClass('active');
		}
	});
	
	$(document).on({
		keydown:function(e){
			var _v = $(this).text();
			if(_v.length >= 2){
				var url = ""+_v;
				$.get(url, function(data){
				  	console.log(data);
				});
			}
		}
	},'.search--editable');
});





