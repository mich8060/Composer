$(document).ready(function(){ 
	
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
	
	$.fn.templates = function(_t, _d){            
		$.each(_d,function(i,v){  
			_t = _t.replace(new RegExp('{{'+i+'}}','gi'),v);       
		}); 
		            
		_t = _t.replace(/(\{\{.*?\}\})/gi,"");
		return _t;                
	} 
	
	var components = ['card']  
	
	$.each(components,function(i,v){
		$('.'+v).each(function(){   
			var data = {};  
			var el = $(this);

			$.each(this.attributes, function(){                                       
			    if(this.specified) { data[this.name] = this.value; }
			}); 

			$.get('components/'+data.class+'.html', function(text) {
				el.replaceWith($(this).templates(text,data));       
			});
		});		
	});

	
});