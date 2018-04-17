Vue.component('search-overlay', {  
	template: `
		<div class="search--overlay">
			<div class="search--container">
				<div class="search--title">Search</div> 
				<div class="search--edit" contenteditable="true" @keydown.enter.prevent @keyup="buildSuggest($event)" @keyup.enter.prevent="enterSuggest($event)">{{term}}</div>
				<div class="search--close" @click="closeSearchOverlay()">  
					<icon name="close" size="lg"></icon>
				</div>
				<ul class="search--list">
					<li v-for="r in results"><a :href="'./search.html?q='+r.displayText">{{r.displayText}} <span v-if="r.type == 'course'"> [Course]</span></a></li>
				</ul> 
			</div>
		</div>
	`,
	data(){
		return {
			term: '',
			results: []
		}
	},
	methods: {
		enterSuggest(e){
			t = e.target.innerHTML;
			window.location = './search.html?q='+t;
		},
		buildSuggest(e){
			t = e.target.innerHTML;
			axios.get("http://localhost:8888/_autosuggest/proxy.php?searchTerm="+t)
				.then(response => { 
					this.results = response.data[1];
				});
		},
		closeSearchOverlay(){
			document.querySelector('.search--overlay').style.display = 'none';
		}
	},
	mixins: [myMixin],
	created(){
		this.term = this.getParameter('q');
	}  
}); 

console.log('Search overlay component loaded.');