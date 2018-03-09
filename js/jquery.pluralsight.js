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
	
	Vue.component('app-header', { 
		props: { 
			email: {
				default: 'jane-doe@pluralsight.com',
				type: String
			},
			avatar: {
				default: 'img/avatar/avatar.png',
				type: String
			},
			name: {
				default: 'Jane Doe',
				type: String
			}
		},
		template: '#app-header-template'
	});
	
	Vue.component('app-search', {
		props: {
			
		},
		template: '#app-search-template'
	});
	
	Vue.component('app-nav', {
		props: {
			context: {           
				type: String
			},			
		},
		template: "#app-nav-template"
	});
	
	
	Vue.component('carousel', { 
		props: {
			action: {
				default: 'View All',
				type: String
			},  
			description: {
				default: '',
				type: String
			},
			title: {
				default: 'Carousel Title',
				type: String
			},
			url: {
				default: '#',
				type: String
			}
		},
	  	template: '#carousel-template'
	});                                                          

	Vue.component('card', {
		props: {
			image: {
				default: 'http://placehold.it/400x200',
				type: String
			},   
			overlay: {
				default: true,
				type: Boolean
			},
			metadata1: {
				default: 'Metadata 1',
				type: String
			}, 
			metadata2: {
				default: 'Metadata 2',
				type: String
			},
			state: {
				default: "",
				type: String
			},
			status: {  
				default: 0,
				type: Number
			},
			title: {
				default: 'The Card Title',
				type: String
			}  
		},                                                            
		template: '#card-template'
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
	
	Vue.component('icon',{
		props: {
			color: {
				default: 'white',
				type: String
			},
			name: {
				default: 'home',
				type: String
			},
			size: {
				default: 'normal',
				type: String
			}
		},
		template: '#icon-template'
	});
	
	var rows = [
		{ title: 'Hello World' },
		{ title: 'Hello World 2' },	
	];
	
	Vue.component('bookmark',{
		props: ['rows'],
		template: '#bookmark-template'
	});
	
	Vue.component('bookmark-row', {
   		props: {   
			author: {
				default: 'Jan Doe',
				type: String
			},
			created: {
				default: null,
				type: Date 
			},
			level: {
				default: 'Beginner',
				type: String
			},
			time: {
				default: '2h 00m',
				type: String
			},
			title: {
				default: 'Course title',
				type: String
			}
		},
	  	template: '#bookmark-row-template',
	    data: function(){   
			// Calculate Date if property left empty.
			if(this.created == null){ 
				var date = new Date(); 
				var monthNames = ["Jan", "Feb", "Mar","Apr", "May", "Jun", "Jul","Aug", "Sept", "Oct","Nov", "Dec"];

			  	var day = date.getDate();
			  	var monthIndex = date.getMonth();
			  	var year = date.getFullYear();
				
				this.created = monthNames[monthIndex] + ' ' + day + ', ' + year;  
			}
		}
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
	//css
	$(document).on({
		click:function(e){
			e.preventDefault();
			$('.search--overlay').show();
			$('.search--editable').focus();
		}
	},'search input');
	
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





