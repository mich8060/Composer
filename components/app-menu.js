Vue.component('app-menu', { 
	template:`
		<menu class="menu">
			<div class="menu--icon" @click="openMenu()">
				<icon name="more" color="gray02"></icon>
			</div>
			<div class="menu--popover" v-show="isActive">
				<div class="menu--section">
					<a href="#">Account</a>
					<a href="#">History</a>
				</div> 
				<div class="menu--section">
					<a href="#">Business plans</a>
					<a href="#">Integration features</a>
					<a href="#">Mobile &amp; offline apps</a>
					<a href="#">Resource center</a>
					<a href="#">How-to videos</a>
					<a href="#">Support</a>
					<a href="#">Contact us</a>
					<a href="#">Our authors</a>
					<a href="#">Become an author</a>
					<a href="#">Terms of use</a>
					<a href="#">Privacy policy</a> 
				</div> 
				<div class="menu--section">           
					<a href="#"><icon name="logout" color="gray06"></icon>Sign out</a>
				</div>                                              
			</div>
		</menu>
	`,
	data(){
		return {
			isActive:false
		};
	},
	methods:{
		openMenu(){
			this.isActive = !this.isActive;
		}
	}
});	
console.log('App header component loaded.');