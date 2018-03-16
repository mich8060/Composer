Vue.component('megarow', {
  	template: `  
		<div class="megarow">
    		<div v-for="r in results">    
				<div class="megarow--item" v-if="r.categories == 'course'">
					<div v-for="(v,i) in r.image">     
						<div v-if="i == 'url'" class="megarow--image"><img :src="v" alt="" /></div>
					</div>
					<div class="megarow--content">
						<div class="megarow--title"><a :href="r.prodId" v-html="r.title"></a></div>
						<div class="megarow--metadata">
							<a href="">{{r.authors[0].displayName}}</a> <span>&bull;</span>
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
        </div>
	`,
	data() {
		return {
			results: []
		}
	},
	beforeCreate:function(){},  
	created:function(){  
		axios.get('https://app.pluralsight.com/search/proxy?q=css')
			.then(response => { 
				this.results = response.data.resultsets[0].results;
				for(x = 0;x < this.results.length;x++){   
					_el = this.results[x];
					_el.image.url = this.formatImage(_el.image.url); 
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
		formatImage:function(src){ 
			console.log(src);
			return src+'?w=120';
		}
	}
});

console.log('Megarow component loaded.');