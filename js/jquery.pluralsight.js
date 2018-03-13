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
			_c = _el.children().children().attr('class');  
			_l = _el.attr('data-limits');
			_d = _el.find('.'+_c);  
			
			for(i = 0; i < _d.length; i+=_l) { _d.slice(i, i+_l).wrapAll($('<div class="carousel--segment" />')); }  
			_count = el.find('.carousel--segment').length;         
			if(_count > 1){        
				svg = $('');
				icon = $('<span />').attr('class','icon md white').append(svg);  
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
		})
	}                                 
	
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





