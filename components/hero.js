Vue.component('hero',{ 
	template: `
		<div class="hero">
			<div class="hero--content" v-bind:style="{ backgroundImage:'url('+image+')' }"> 
				<div class="hero--actions">                
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
					<div>{{metadata1}}</div>
				</div>
				<div class="hero--foot">
					<div class="avatar md" style="z-index:3;"><img src="https://secure.gravatar.com/avatar/ddb18fb51fcdf669d56a1ddc4f017cd2?s=50&d=https%3A%2F%2Fmentors-api-prod.s3-us-west-2.amazonaws.com%2Fstatic%2Favatar%2Favatar_small.jpg" alt="" /></div>
					<div class="avatar md" style="z-index:2;"><img src="https://secure.gravatar.com/avatar/0f792a763ebf08411c7f566079e4adc7?s=50&d=https%3A%2F%2Fmentors-api-prod.s3-us-west-2.amazonaws.com%2Fstatic%2Favatar%2Favatar_small.jpg" alt="" /></div>
					<div class="avatar md" style="z-index:1;"><img src="https://secure.gravatar.com/avatar/cef14e05e6d48e804e4968cf0c29eebf?s=50&d=https%3A%2F%2Fmentors-api-prod.s3-us-west-2.amazonaws.com%2Fstatic%2Favatar%2Favatar_small.jpg" alt="" /></div>
					<div style="position:absolute;bottom:20px;right:20px;"><img src="https://pluralsight.imgix.net/paths/path-icons/html5-7ac65c8ec0.png" style="width:36px;" />HTML5</div>
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