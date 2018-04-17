Vue.component('modal',{   
	template: `
		<div class="modal">
			<div class="modal--container" :class="{ 'is-active': isActive, 'is-animating': isAnimating }">
				<div class="modal--overlay" @click="openModal()"></div>
				<div class="modal--content">
					<div class="modal--close" @click="openModal()"><icon name="close" color="gray04"></icon></div>
					<slot></slot>
				</div>
			</div>	
			<div class="button" :class="[appearance, size]" @click="openModal()">{{label}}</div>
		</div>
	`,
	props: {
		appearance: { default:'', type:String },
		label: 		{ default:'Open Modal', type:String },
		size: 		{ default:'', type:String }, 
	},
	methods: {
		openModal(){
			var self = this;
			self.isAnimating = !self.isAnimating;
			if(this.isActive){
				setTimeout(function(){
					self.isActive = !self.isActive;
				},300);	
			}else{	
				self.isActive = !self.isActive;
			}
		}
	},
	data(){
		return {
			isActive: false,
			isAnimating: false,
		};
	},                       
});

console.log('Modal component loaded.');