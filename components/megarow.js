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
	mixins: [myMixin],
	data() {
		return {
			results: []
		}
	},
	beforeCreate:function(){},  
	created:function(){ 
		term = this.getParameter('q');
		axios.get('https://app.pluralsight.com/search/proxy?q='+term)
			.then(response => { 
				this.results = response.data.resultsets[0].results;
				for(x = 0;x < this.results.length;x++){   
					_el = this.results[x];
					if(_el.categories == 'course'){
						_el.image.url = this.formatImage(_el.image.url);    
			   			_el.publishedDate = this.formatDate(_el.publishedDate); 
			   			_el.duration = this.formatDuration(_el.duration);						
					}  
				}
			})
		    .catch(e => {
		      	this.errors.push(e)
		    });              
	}
});

console.log('Megarow component loaded.');