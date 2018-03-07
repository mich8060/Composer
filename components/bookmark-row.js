Vue.component('bookmark-row', { 
	template: `
		<div class="bookmark--row">
			<div class="bookmark--cell" style="width:4%;"><a href="#"><icon name="play" color="white"></icon></a></div>
			<div class="bookmark--cell" style="width:40%;"><a href="#" class="text--white">{{ title }}</a></div>
			<div class="bookmark--cell" style="width:15%;">{{ level }}</div>
			<div class="bookmark--cell" style="width:10%;"><time>{{ time }}</time></div>
			<div class="bookmark--cell" style="width:15%;">by <a href="#" class="text--gray02">{{ author }}</a></span></div>
			<div class="bookmark--cell" style="width:15%;">{{ created }}</div>      		
		</div>
	`,
	props: {   
		author: 	{ default: 'Jan Doe', type: String },
		created: 	{ default: null, type: Date },
		level: 		{ default: 'Beginner', type: String },
		time: 		{ default: '2h 00m', type: String },
		title: 		{ default: 'Course title', type: String }
	},                                   
    data: function(){   
		// Calculate Date if property left empty.
		if(this.created == null){ 
			var date = new Date(); 
			var monthNames = ["Jan", "Feb", "Mar","Apr", "May", "Jun", "Jul","Aug", "Sept", "Oct","Nov", "Dec"]; 
		  	var day = date.getDate();
		  	var monthIndex = date.getMonth();
		  	var year = date.getFullYear();       
			this.created = monthNames[monthIndex] + ' ' + day + ', ' + year;  
		}
	}
});
	
console.log('Bookmark Rows component loaded.');