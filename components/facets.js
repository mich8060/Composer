Vue.component('facets',{ 
	template: `
		<div class="facet"></div>
	`,
	mixins: [myMixin],
	data(){
		return { };
	},
	methods: { },
	props: { },
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
	},
});

console.log('Facets component loaded.');