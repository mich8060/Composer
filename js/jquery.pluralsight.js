var data = 'app-search hero tile';
	data = data.split(" ");   

// Component Loader
$.each(data,function(_i,_v){  	                           
	$(document).load("./components/"+_v+".html",function(response, status, xhr){       
		var script = document.createElement('script');
			script.type = 'text/x-template';
			script.id = _v+'-template';
			script.text = response;         
			document.body.appendChild(script); 
	});
});

$(document).ready(function(){   
	
	// Register component  
	
	Vue.component('app-search', {
		props: {
			
		},
		template: '#app-search-template'
	});   
	
	Vue.component('hero',{
		props: { 
			image: {
				default: 'http://placehold.it/400x200',
				type: String
			},  
			length: {
				default: '20m',
				type: String
			}, 
			metadata1: {
				default: 'Metadata 1',
				type: String
			}, 
			metadata2: {
				default: 'Metadata 2',
				type: String
			},
			module: {
				default: 'Module Name',
				type: String 
			},
			title: {
				default: 'Hero title course',
				type: String
			} 
		},
		template: '#hero-template'
	});  

	

	
 
	
	Vue.component('tile',{
		props: {   
			image: {
				default: 'http://placehold.it/2h00x200',
				type: String
			},
			title: {
				default: 'Techology',
				type: String
			}
		},
		template: '#tile-template'
	});


	// Create a root instance
	new Vue({
	  	el: '#app'
	});
});

$(document).ready(function(){  
	
	// Create carousel segments for scrolling.
	$('.carousel--body').each(function(_i,_v){
		_el = $(this); 
		_c = _el.children().attr('class');  
		_l = _el.attr('data-limits');
		_d = _el.find('.'+_c);
		for(i = 0; i < _d.length; i+=_l) { _d.slice(i, i+_l).wrapAll("<div class='carousel--segment'></div>"); } 
	});                                         
	
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





