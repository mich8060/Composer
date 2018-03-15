Vue.component('headline',{   
	template: `
		<div class="headline" :class="size">
			<div class="headline--title">
				<a href="">
					<slot></slot>
				</a>
			</div>         
			<div class="headline--actions">
				<a v-if="action" v-bind:href="href">
					<span>{{action}}</span>    
					<icon name="caret-right" color="white"></icon>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
				</a>
			</div>

		</div>
	`,
	props: {                                 
		action: 		{ type:String },              
		href: 			{ default:'#', type:String },                                                            
		size: 			{ type: String },
		title: 			{ default: 'Headline Placeholder', type: String }
	}                         
});

console.log('Headline component loaded.');