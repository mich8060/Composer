Vue.component('card', {                 
	template: `                                                           
		<div class="card" :class="{'condensed': condensed, 'active': isActive }">        
		    <div class="card--detail" v-bind:style="{ backgroundImage: 'url(' + image + ')' }">
		    	<hero :image="image" :metadata1="metadata1" :metadata2="metadata2" :title="title" :resume="resume" :progress="progress" :type="type"></hero>
			</div>
			<div class="card--head"> 
				<a :href="href" class="card--overlay" v-if="overlay == true">
					<div class="card--play"><icon name="play-circle" size="md"></icon></div>
				</a>
				<div class="card--actions" v-if="overlay == true">
					<div class="card--actionbar">                       
						<icon color="white" name="download" size="sm"></icon>
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
			</div>
		</div>
	`,
	data(){
		return {
			isActive: this.active,
		}
	},
	mounted(){
		if(this.active){
			const vm = this;
			setTimeout(function(){
				vm.isActive = false;
			},5000);
		}
	},
	props: {                   
		active:  	{ default: false, type: Boolean },
		condensed:  { default: false, type: Boolean },
		href: 		{ default: '#', type: String }, 
		image: 		{ default: 'http://placehold.it/400x200', type: String }, 
		metadata1: 	{ default: 'Metadata 1', type: String }, 
		metadata2: 	{ default: 'Metadata 2', type: String },   
		overlay: 	{ default: true, type: Boolean },
		progress: 	{ default: 0, type: Number },
		resume: 	{ default: false, type: Boolean },
		title: 		{ default: 'The Card Title', type: String },
		type: 		{ default: 'course', type: String }  
	}
});
	
console.log('Card component loaded.');