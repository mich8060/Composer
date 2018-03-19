// Defining mixin object
var myMixin = {
	methods: {
		formatDate:function(_d){    
			_d = new Date(_d);  
			_m = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"];
			return _m[_d.getMonth()]+' '+_d.getFullYear();	
		},
		formatDuration:function(duration){ 
			/* Format Duration of the course */
			var hoursString = duration.match(/\d+H/),
		        minutesString = duration.match(/\d+M/),
		        secondsString = duration.match(/[\d\.]+S/),
		        formattedDuration = '',
		        hours = 0,
		        minutes = 0,
		        seconds = 0;   

		    if (hoursString)  { hours = parseInt(hoursString[0].substring(0,hoursString[0].length - 1)); }
		    if (minutesString){ minutes = parseInt(minutesString[0].substring(0,minutesString[0].length - 1)); }
		    if (secondsString){ seconds = parseInt(secondsString[0].split(".")[0].substring(0,secondsString[0].length - 1)); }

		    if (seconds >= 60){
		        minutes = minutes + Math.floor(seconds/60);
		        seconds = seconds % 60;
		    } 

		    if (minutes >= 60){
		        hours = hours + Math.floor(minutes/60);
		        minutes = minutes % 60;
		    }

		    if(hours){ formattedDuration += hours + "h "; }
		    if(minutes){ formattedDuration += minutes + "m"; }

		    return formattedDuration;
		},
		formatImage:function(src){  
			return src+'?w=240';
		},
		getParameter:function(name) {
		    var url = window.location.href;
		    name = name.replace(/[\[\]]/g, "\\$&");
		    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
		        results = regex.exec(url);
		    if (!results) return null;
		    if (!results[2]) return '';
		    return decodeURIComponent(results[2].replace(/\+/g, " "));
		}
  	}
}

