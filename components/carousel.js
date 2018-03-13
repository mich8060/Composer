Vue.component('carousel', { 
	template: `
		<div class="carousel">
			<div class="carousel--head">
				<div class="carousel--title">{{title}}</div> 
				<icon v-if="action" name="caret-right" color="white"></icon>
				<!-- 
				<div class="carousel--description">{{description}}</div>
				<a v-if="action" v-bind:href="url">
					{{action}}    
					<icon name="caret-right" color="orange"></icon>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
				</a>
				 -->
				<div class="carousel--indicator">
					<ul class="indicator"></ul>
				</div>
			</div>
			<div class="carousel--body" :data-limits="limit">
				<div class="carousel--overflow">
					<slot></slot>
				</div>
			</div>
		</div>
	`,
	props: {
		action: 		{ default: 'View All', type: String },  
		description: 	{ default: '', type: String }, 
		limit: 			{ default: 5, type: Number },       
		title: 			{ default: 'Carousel Title', type: String },
		url: 			{ default: '#', type: String }
	}
}); 

console.log('Carousel component loaded.'); 