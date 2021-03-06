Vue.component('app-header', { 
	template: `
		<header class="header">  
			<div class="header--content"> 
				<label class="header--button">
					<div class="header--line"></div>
					<div class="header--line"></div>
					<div class="header--line"></div>
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
					<menu class="menu">
						<div class="menu--icon"><span class="icon"><svg viewBox="0 0 24 24"><g transform="translate(2, 9)" class="fill"><path d="M2.5,1 C1.6732,1 1,1.6732 1,2.5 C1,3.3268 1.6732,4 2.5,4 C3.3268,4 4,3.3268 4,2.5 C4,1.6732 3.3268,1 2.5,1 M2.5,5 C1.12222222,5 0,3.87777778 0,2.5 C0,1.12222222 1.12222222,0 2.5,0 C3.87777778,0 5,1.12222222 5,2.5 C5,3.87777778 3.87777778,5 2.5,5"></path><path d="M9.5,1 C8.6732,1 8,1.6732 8,2.5 C8,3.3268 8.6732,4 9.5,4 C10.3268,4 11,3.3268 11,2.5 C11,1.6732 10.3268,1 9.5,1 M9.5,5 C8.12222222,5 7,3.87777778 7,2.5 C7,1.12222222 8.12222222,0 9.5,0 C10.8777778,0 12,1.12222222 12,2.5 C12,3.87777778 10.8777778,5 9.5,5"></path><path d="M16.5,1 C15.6732,1 15,1.6732 15,2.5 C15,3.3268 15.6732,4 16.5,4 C17.3268,4 18,3.3268 18,2.5 C18,1.6732 17.3268,1 16.5,1 M16.5,5 C15.1222222,5 14,3.87777778 14,2.5 C14,1.12222222 15.1222222,0 16.5,0 C17.8777778,0 19,1.12222222 19,2.5 C19,3.87777778 17.8777778,5 16.5,5"></path></g></svg></span></div>
						<div class="menu--popover">
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
								<a href="#"><span class="icon"><svg viewBox="0 0 24 24"><g class="linkIconFill---oshAH" transform="translate(4, 4)"><path d="M9,14 L1,14 L1,1 L9,1 L9,4 L10,4 L10,0.5 C10,0.223857625 9.77614237,0 9.5,0 L0.5,0 C0.223857625,0 0,0.223857625 0,0.5 L0,14.5 C0,14.7761424 0.223857625,15 0.5,15 L9.5,15 C9.77614237,15 10,14.7761424 10,14.5 L10,11 L9,11 L9,14 Z"></path><path d="M4.00000001,8 L15.5,8 C15.7761424,8 16,7.77614237 16,7.5 C16,7.22385763 15.7761424,7 15.5,7 L4.00000001,7 L4.00000001,8 Z"></path><path d="M12.1464466,4.85355339 L15.1464466,7.85355339 L15.1464466,7.14644661 L12.1464466,10.1464466 C11.9511845,10.3417088 11.9511845,10.6582912 12.1464466,10.8535534 C12.3417088,11.0488155 12.6582912,11.0488155 12.8535534,10.8535534 L15.8535534,7.85355339 C16.0488155,7.65829124 16.0488155,7.34170876 15.8535534,7.14644661 L12.8535534,4.14644661 C12.6582912,3.95118446 12.3417088,3.95118446 12.1464466,4.14644661 C11.9511845,4.34170876 11.9511845,4.65829124 12.1464466,4.85355339 L12.1464466,4.85355339 Z"></path></g></svg></span>Sign out</a>
							</div>                                              
						</div>
					</menu>
				</div>		
			</div> 
		</header>
		<div class="overlay">x</div>
	`,
	props: { 
		email: 	{ default: 'jane-doe@pluralsight.com', type: String },
		avatar: { default: 'img/avatar/avatar.png', type: String },
		name: 	{ default: 'Jane Doe', type: String }
	}
});  

console.log('App header component loaded.');