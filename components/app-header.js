Vue.component('app-header', { 
	template: `           
		<header class="header">  
			<div class="header--content"> 
				<label class="header--button" @click="openMenu()">
					<icon name="menu" color="gray01"></icon>
				</label> 
				<div class="header--branding">
					<a href="#" class="nav--item branding">   
						<span>Pluralsight</span>
					</a>
				</div>
		 		<app-search></app-search>
				<div class="header--utilities">
					<div class="account">   
						<div class="account--info">
							<div class="account--name">{{name}}</div>
							<div class="account--email">{{email}}</div>
						</div>  
						<div class="account--avatar">
							<div class="avatar"><img v-bind:src="avatar" alt="" /></div>
						</div>
					</div>
				</div>
				<div class="header--menu">
					<app-menu></app-menu>
				</div>		
			</div> 
		</header>
	`,
	data(){
		return {
			isActive: false,
		};
	},
	methods: {
		openMenu(){
			document.body.className = 'nav--open';
		}
	},
	props: { 
		email: 	{ default: 'jane-doe@pluralsight.com', type: String },
		avatar: { default: 'img/avatar/avatar.png', type: String },
		name: 	{ default: 'Jane Doe', type: String }
	}
});  

console.log('App header component loaded.');