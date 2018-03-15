Vue.component('hero',{ 
	template: `
		<div class="hero">
			<div class="hero--content" v-bind:style="{ backgroundImage:'url('+image+')' }"> 
				<div class="hero--actions">                
	  				<icon name="download" color="white" size="md"></icon>
					<icon name="more" color="white" size="md"></icon>     
				</div>
				<div class="hero--meta">
					<icon name="player--play" size="xl"></icon>
				</div>
				<div class="hero--overlay"></div>
				<div class="hero--head"> 
					<div class="hero--subtitle" v-if="resume == 'true'">Continue watching:</div> 
					<div class="hero--subtitle" v-else>{{type}}</div>   
					<div class="hero--title">{{title}}</div> 

				</div>
				<div class="hero--foot">
					<div>{{metadata1}}</div>   
				</div>                                                     
		   		<progress class="progress" :value="progress" max="100"></progress>                                                           
			</div>
		</div>
	`,
	props: { 
		resume: 	{ default: false, type: Boolean }, 
		image: 		{ default: 'http://placehold.it/400x200', type: String },  
		length: 	{ default: '20m', type: String }, 
		metadata1: 	{ default: 'Metadata 1', type: String }, 
		metadata2: 	{ default: 'Metadata 2', type: String },
		module: 	{ default: 'Module Name', type: String },
		progress: 	{ default: 0, type: Number },
		title: 		{ default: 'Hero title course', type: String },
		type: 		{ default: 'Course', type: String } 
	}
});