Vue.component('card', {                 
	template: `                                                           
		<div class="card">           
			<div class="card--head">
			 	<div class="card--type" v-if="(type != 'channel' && type != 'path' && type != 'course')">
			    	<icon v-bind:name="type" color="black" size="sm"></icon>
					{{type}}
				</div>
				<a :href="href" class="card--overlay" v-if="overlay == true">
					<div class="card--play"><icon name="play-circle" size="lg"></icon></div>
				</a>
				<div class="card--actions" v-if="overlay == true">
					<div class="card--actionbar">                               
						<icon color="white" name="more" size="sm"></icon>                                          
					</div>
					<div class="card--actionmenu">     
						<actionmenu></actionmenu>
					</div>
				</div>
				<a :href="href" class="card--image"><img :src="image" alt="" /></a>
				<progress class="progress" :value="progress" max="100"></progress> 
			</div>  
			<div class="card--info">
				<a :href="href" class="card--title">{{title}}</a> 
				<div class="card--metadata1">{{metadata1}}</div>
				<div class="card--metadata2">{{metadata2}}</div>
				<div v-if="progress == 100" class="card--state">Complete</div>
			</div>
		</div>
	`,
	props: { 
		href: 		{ default: '#', type: String }, 
		image: 		{ default: 'http://placehold.it/400x200', type: String }, 
		metadata1: 	{ default: 'Metadata 1', type: String }, 
		metadata2: 	{ default: 'Metadata 2', type: String },   
		overlay: 	{ default: true, type: Boolean },
		progress: 	{ default: 0, type: Number },
		title: 		{ default: 'The Card Title', type: String },
		type: 		{ default: 'course', type:String }   
	}
});
	
console.log('Card component loaded.');