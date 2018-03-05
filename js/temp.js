 
	
	
	var app = [{ 
			name: "carousel", 
			type: "component",
			title: "Channels", 
			description: "Save, organize and share your favorite content to help accomplish your objectives.",
			action: "View All",
			url: "#",
			indicator: 5,
			body: [
				{ 
					name: "card",       
					type: "component",   
					image: "https://pluralsight.imgix.net/course-images/modern-web-layout-flexbox-css-grid-v1.jpg", 
					title: "Front End Development",
					metadata1: "Michael Stevens &bull; 1 followers",
					metadata2: "",
					status: "",
					state: ""
				},{ 
					name: "card",       
					type: "component",   
					image: "https://pluralsight.imgix.net/course-images/modern-web-layout-flexbox-css-grid-v1.jpg", 
					title: "Front End Development",
					metadata1: "Michael Stevens &bull; 1 followers",
					metadata2: "",
					status: "",
					state: ""
				},{ 
					name: "card",       
					type: "component",   
					image: "https://pluralsight.imgix.net/course-images/modern-web-layout-flexbox-css-grid-v1.jpg", 
					title: "Front End Development",
					metadata1: "Michael Stevens &bull; 1 followers",
					metadata2: "",
					status: "",
					state: ""
				},{ 
					name: "card",       
					type: "component",   
					image: "https://pluralsight.imgix.net/course-images/modern-web-layout-flexbox-css-grid-v1.jpg", 
					title: "Front End Development",
					metadata1: "Michael Stevens &bull; 1 followers",
					metadata2: "",
					status: "",
					state: ""
				}
			]
		}];

$.fn.cycle = function(obj){ 
	$.each(obj,function(_i,_v){  
   		console.log(_i);
	   	//console.log(typeof(_v));
	});
} 

$.each(app,function(_i,_v){
	if(_v.type == "component"){
		$(this).cycle(_v);
	}
});