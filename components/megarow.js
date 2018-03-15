Vue.component('megarow', {
  	template: `  
		<div class="megarow">
    		<div class="megarow--item" v-for="r in results"> 
				
				<div class="megarow--image"><img :src="r.image" alt="" /></div>
				<div class="megarow--content">
					<div class="megarow--title"><a :href="r.prodId">{{r.title}}</a></div>
					<div class="megarow--metadata">
						{{r.authors[0].displayName}} &bull;
						{{r.skillLevels}} <span>&bull;</span>
						{{r.publishedDate}} <span>&bull;</span>
						{{r.duration}} <span>&bull;</span>
						{{r.averageRating}}
					</div>
				</div>
				<div class="megarow--actions">
					<icon name="bookmark" color="gray02"></icon>
					<icon name="more" color="gray02"></icon>
					<icon name="caret-down" color="gray02"></icon>
				</div>
			</div> 
        </div>
	`,
	data() {
		return {
			results: []
		}
	},
	beforeCreate:function(){},  
	created:function(){             
		axios.get('https://sp10050dad.guided.ss-omtrdc.net/?q=css&page=1&do=landing2')
		    .then(response => {                                  
				this.results = response.data.resultsets[1].results;
				for(x = 0;x < this.results.length;x++){
					_el = this.results[x]; 
					_el.image = this.formatImage(_el.prodId,_el.imageVersion);
					_el.publishedDate = this.formatDate(_el.publishedDate); 
					_el.duration = this.formatDuration(_el.duration);
				}
		    })
		    .catch(e => {
		      	this.errors.push(e)
		    });                
	},
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
		formatImage:function(id,version){
			return 'https://pluralsight-res.cloudinary.com/image/upload/w_120/pluralsight-static/course-images/'+id+'-v'+version+'.jpg';
		}
	}
});

console.log('Megarow component loaded.');