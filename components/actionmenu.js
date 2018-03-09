Vue.component('actionmenu', {                 
	template: `
		<div class="actionmenu origin-topRight">           
			<ul>                                   
				<li>
					<a href="#">Add to Channel</a> 
					<ul>
						<li><input type="text" placeholder="New Channel" /></li>
						<li class="line"></li>
						<li><checkbox label="Advanced Prototyping"></checkbox></li> 
						<li><checkbox label="Analytics"></checkbox></li>
						<li><checkbox label="Back End Development"></checkbox></li>
						<li><checkbox label="Front End Development"></checkbox></li>
					</ul>
				</li>
				<li class="line"></li>   
				<li>
					<a href="#">Course resources</a>  
					<ul> 
						<li><a href="#">Download exercise files</a></li>
						<li><a href="#">Test your knowledge</a></li>
						<li><a href="#">Join the discussion</a></li>
					</ul>
				</li>

				<li class="line"></li>
				<li class="title">Share via</li>
				<li><a href="#">Twitter</a></li> 
				<li><a href="#">Facebook</a></li>
				<li><a href="#">LinkedIn</a></li>
				<li><a href="#">Copy Link</a></li>  
				<li class="line"></li>
	   			<li class="remove"><a href="#">Remove</a></li>
			</ul>
		</div>
	`,
	props: { 
    	
	}
});
	
console.log('ActionMenu component loaded.');