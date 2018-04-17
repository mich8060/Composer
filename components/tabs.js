Vue.component('tabs',{ 
	template: `
		<div class="tabs" role="tablist">
			<div class="tabs--head">
				<a :href="tab.href" @click.prevent="selectTab(tab)" v-for="tab in tabs" :class="{ 'is-active': tab.isActive }">
					<icon :name="tab.icon" color="white" size="sm" v-if="tab.icon"></icon>
					{{ tab.title }}
					<span v-if="tab.count">({{ tab.count }})</span>
				</a>
			</div>
	        <div class="tabs--panels"><slot></slot></div>
		</div>
	`,
	data(){
		return { tabs: [] };
	},
	methods: {
		selectTab(selectedTab){
			this.tabs.forEach(tab => {
				tab.isActive = (tab.title == selectedTab.title);
			});
		}
	},
	props: { 
		count:  { default:'', type:String },
	  	title: 	{ default:'', type:String, },
		icon: 	{ default:'', type:String },
	},
	created(){
        this.tabs = this.$children;
    },
});

Vue.component('tab',{
	template:`
		<div v-show="isActive"><slot></slot></div>
	`,
	props: { 
		count:  	{ default:'', type:String },
	  	title: 		{ default:'', required:true, type:String, },
		icon: 		{ default:'', type:String },
		selected: 	{ default:false, type:Boolean },
	},
	data(){
		return {
			isActive: false
		};
	},
	computed: {
		href(){
			return '#' + this.title.toLowerCase().replace(/ /g,'-');
		}
	},
	mounted(){
		this.isActive = this.selected;
	},
});

console.log('Tabs component loaded.');