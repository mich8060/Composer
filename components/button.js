Vue.component('btn',{   
	template: `
		<button class="button" :class="[appearance, size]"><slot></slot></button>
	`,
	props: {   
		appearance: { default:'primary', type: String },
		disabled: 	{ default:false, type: Boolean },
		icon: 		{ type: String },
		iconAlign: 	{ default:'left', type: String },
		loading: 	{ default:false, type: Boolean },
		size: 		{ default:'medium', type:String }
	}                         
});

console.log('Button component loaded.');