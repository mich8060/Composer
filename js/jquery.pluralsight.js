<<<<<<< HEAD
var data = 'app app-nav app-header app-search bookmark bookmark-row card carousel hero icon tile';
	data = data.split(" ");
	console.log(data);

// Component Loader
$.each(data,function(_i,_v){  	   
	console.log("./components/"+_v+".html");               
	$(document).load("./components/"+_v+".html",function(response, status, xhr){   
		console.log(_v+'-template');   
		var script = document.createElement('script');
			script.type = 'text/x-template';
			script.id = _v+'-template';
			script.text = response;         
			document.body.appendChild(script);
	});
});

$(document).ready(function(){
	// Register component   
	
	Vue.component('app',{
		props: {    
			context: {           
				type: String
			},
			avatar: {
				default: 'img/avatar/avatar.png',
				type: String
			},  
			email: {
				default: 'jane-doe@pluralsight.com',
				type: String
			},
			menu: {
				default: 'learner',
				type: String
			},
			name: {
				default: 'Jane Doe',
				type: String
			}
		},
		template:"#app-template"
	});
=======
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
			_c = _el.children().attr('class');  
			_l = _el.attr('data-limits');
			_d = _el.find('.'+_c);  
			
			for(i = 0; i < _d.length; i+=_l) { _d.slice(i, i+_l).wrapAll($('<div class="carousel--segment" />')); }  
			_count = el.find('.carousel--segment').length;         
			if(_count > 1){        
				svg = $('<svg viewBox="0 0 30 30"><g transform="translate(10,0)"><path d="M14.5,15L14.5,15L2.4,0L0,2l10.6,13L0,28l2.4,2L14.5,15L14.5,15z"/></g></svg>');
				icon = $('<span />').attr('class','icon md white').append(svg);  
		   		control = $('<div />').attr('class','carousel--control').append(icon);                                          
				el.append(control);  
				

				for(x = 0; x < _count;x++){   
					el.find('.carousel--indicator ul').append($('<li />'));
				} 
				
				el.find('.carousel--indicator li').first().addClass('active');                                                                                  
			}                                                                                                                        
		});
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





