Vue.component('checkbox', {                 
	template: `
		<span>                                                   
			<input type="checkbox" :id="id" />
	   		<label :for="id">{{label}}</label>
		</span>
	`,
	props: {                                     
		label: 	{ default:'', type:String }, 
		name: 	{ default:'checkbox--'+Math.round(Math.random() * 1000), type:String }
	},
	data() {
	    return {
	        id: 'checkbox--'+this._uid
	    }
	}
});
	
console.log('Checkbox component loaded.');