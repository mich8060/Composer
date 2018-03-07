Vue.component('card', {                 
	template: `
		<div class="card">           
			<div class="card--head"> 
				<div class="card--overlay" v-if="overlay == true">
					<div class="card--play"><icon name="play" size="md"></icon></div>
					<div class="card--actions">
						<div class="card--actionbar">
							<icon color="white" name="more" size="sm"></icon>                                        
						</div>
						<div class="card--actionmenu">     
							<actionmenu>
								
							</actionmenu>
						</div>
					</div>
				</div>
				<a href="#" class="card--image"><img :src="image" alt="" /></a>
				<progress class="progress" :value="status" max="100"></progress> 
			</div>  
			<div class="card--info">
				<a href="#" class="card--title">{{title}}</a> 
				<div class="card--metadata1">{{metadata1}}</div>
				<div class="card--metadata2">{{metadata2}}</div>
				<div class="card--state">{{state}}</div>
			</div>
		</div>
	`,
	props: {  
		image: 		{ default: 'http://placehold.it/400x200', type: String }, 
		metadata1: 	{ default: 'Metadata 1', type: String }, 
		metadata2: 	{ default: 'Metadata 2', type: String },   
		overlay: 	{ default: true, type: Boolean },
		state: 		{ default: "", type: String },
		status: 	{ default: 0, type: Number },
		title: 		{ default: 'The Card Title', type: String }  
	}
});
	
console.log('Card component loaded.');