Vue.component('carousel', { 
	template: `
		<div class="carousel">
			<div class="carousel--head">
				<div class="carousel--title">{{title}}</div>
				<div class="carousel--description">{{description}}</div>
				<a v-if="action" v-bind:href="url">{{action}} <svg aria-hidden="true" width="7px" height="10px" viewBox="0 0 7 10"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Home-2.0-course-resources" transform="translate(-943.000000, -360.000000)" stroke-width="2" stroke="#F96816"><g id="Group-35" transform="translate(798.000000, 239.000000)"><g id="Group-12" transform="translate(1.000000, 118.000000)"><polyline id="Shape" transform="translate(146.967109, 8.108976) rotate(-90.000000) translate(-146.967109, -8.108976) " points="142.858132 6.14186755 146.967109 10.0760849 151.076085 6.14186755"></polyline></g></g></g></g></svg>
				</a>
				<div class="carousel--indicator">
					<ul class="indicator"></ul>
				</div>
			</div>
			<div class="carousel--body" :data-limits="limit">
				<slot></slot>
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