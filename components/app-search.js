Vue.component('app-search', {  
	template: `
		<search class="header--search"> 
			<div class="search">
				<div class="search--icon"><icon name="search" color="gray02"></icon></div>
				<div class="search--input">
					<input type="search" placeholder="What do you want to learn?" />
				</div> 
				<div class="search--suggest"></div>
			</div>
		</search>
	`,
	props: { }   
});