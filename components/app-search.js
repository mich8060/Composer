Vue.component('app-search', {  
	template: `
		<div class="header--search"> 
			<div class="search">
				<div class="search--icon"><icon name="search" color="gray02"></icon></div>
				<div class="search--input">
					<input type="search" placeholder="What do you want to learn?" :value="term" @focus="openSearchOverlay()" />
				</div> 
				<div class="search--suggest"></div>
			</div>
		</div>
	`,
	data(){
		return {
			term: ''
		}
	},
	methods: {
		openSearchOverlay(){
			document.querySelector('.search--overlay').style.display = 'block';
			document.querySelector('.search--edit').focus();
		}
	},
	mixins: [myMixin],
	created(){
		this.term = this.getParameter('q');
	}   
});