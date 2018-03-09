Vue.component('hero',{ 
	template: `
		<div class="hero">
			<div class="hero--content" v-bind:style="{ backgroundImage:'url('+image+')' }">
				<div class="hero--overlay"></div>
				<div class="hero--head"> 
					<div class="hero--subtitle">Continue watching:</div>    
					<div class="hero--title">{{title}}</div> 
					<div class="hero--meta">
						<icon name="play-circle" size="md"></icon>
						<div class="hero--module">
							<div>{{module}}</div>
							<div>{{length}} to complete</div>
						</div>
					</div>
				</div>
				<div class="hero--foot">
					<div>{{metadata1}}</div>
					<div>{{metadata2}}</div>
				</div>
				<progress class="progress" value="1" max="100"></progress>                                                            
			</div>
		</div>
	`,
	props: { 
		image: 		{ default: 'http://placehold.it/400x200', type: String },  
		length: 	{ default: '20m', type: String }, 
		metadata1: 	{ default: 'Metadata 1', type: String }, 
		metadata2: 	{ default: 'Metadata 2', type: String },
		module: 	{ default: 'Module Name', type: String },
		title: 		{ default: 'Hero title course', type: String } 
	}
});