Vue.component('selector',{ 
	template: `
		<div class="dropdown" :class="{ 'right' : (align == 'right') }">
			<div class="dropdown--container">
				<div class="dropdown--label" @click="toggleOptions()">{{label}}</div>
				<div class="dropdown--options" v-show="isActive">
					<a href="#" @click="selectOption(o)" v-for="o in option" :class="{ 'is-active': o.isActive }">
						<icon :name="o.icon" color="white" size="sm" v-if="o.icon"></icon>
						{{ o.label }}
					</a>
				</div>
			</div>

			<div class="dropdown--content" v-show="content"><slot></slot></div>
		</div>
	`,
	props: { 
		align: 		{ default:'', type:String },
		content: 	{ default:true, type:Boolean },
	  	label: 		{ default:'', type:String, },
		icon: 		{ default:'', type:String },
	},
	data(){
		return {
			isActive: false,
			option: [],
		};
	},
	methods: {
		toggleOptions(){
			this.isActive = !this.isActive;
		},
		selectOption(selectedOption){
			this.option.forEach(option => {
				option.isActive = (option.label == selectedOption.label);
				if(option.label == selectedOption.label){
					this.label = selectedOption.label;
				}
			});
			this.toggleOptions();
		}
	},
	mounted(){
		this.isActive = this.selected;
	},
	created(){
        this.option = this.$children;
    },
});

Vue.component('myitem',{ 
	template:`
		<div v-show="isActive"><slot></slot></div>
	`,
	props: { 
		label: 		{ default:'', type:String, },
		icon: 		{ default:'', type:String },
		selected: 	{ default:false, type:Boolean },
	},
	data(){
		return {
			isActive: false
		};
	},
	mounted(){
		this.isActive = this.selected;
	},
});

console.log('Dropdown component loaded.');