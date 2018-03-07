Vue.component('app',{
	template:`
		<div id="app">   
			<app-header v-bind:name="name" v-bind:email="email" v-bind:avatar="avatar"></app-header>                                                       
			<app-nav v-bind:context="context"></app-nav> 
			<main class="main">
				<div class="main--container">
					<slot></slot>  
				</div> 
			</main>
		</div>
	`,
	props: {                                                    
		avatar: 	{ default: 'img/avatar/avatar.png', type: String }, 
		context: 	{ default: 'home', type: String }, 
		email: 		{ default: 'jane-doe@pluralsight.com', type: String },
		menu: 		{ default: 'learner', type: String },
		name: 		{ default: 'Jane Doe', type: String }
	}                      
});

console.log('App component loaded.'); 