Vue.component('bookmark',{     
	template: `
		<div class="bookmark"> 
			<div class="bookmark--head">
				<div style="width:4%;"></div>
				<div style="width:40%;">TITLE</div>
				<div style="width:15%;">LEVEL</div>
				<div style="width:10%;">TIME</div>
				<div style="width:15%;">AUTHOR(S)</div>
				<div style="width:15%;">CREATED</div>		
			</div>   
			<div class="bookmark--body">
				<slot></slot>                                      
			</div>
		</div>
	`,
	props: {},                     
}); 


console.log('Bookmark component loaded.');