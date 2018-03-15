Vue.component('carousel', { 
	template: `
		<div class="carousel">
			<div class="carousel--indicator">
				<ul class="indicator"></ul>
			</div>
			<div class="carousel--body" :data-limits="limit">
				<div class="carousel--control"></div>
				<div class="carousel--control left"></div>
				<div class="carousel--overflow">
					<slot></slot>
				</div>
			</div>
		</div>
	`,
	props: {                                               
		limit: { default: 5, type: Number },  
	}
}); 

console.log('Carousel component loaded.'); 