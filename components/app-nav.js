Vue.component('app-nav', { 
	template: `
		<nav class="nav">                     
			<div class="nav--container">              
				<a href="home.html" class="nav--item branding">  
					<icon name="logo" color="white"></icon>
					<span>Pluralsight</span>
				</a>
				<a href="home.html" class="nav--item" v-bind:class="{ 'active': context == 'home' }"> 
					<icon name="home" color="gray01"></icon>
					<span>Home</span>
				</a>
				<a href="#" class="nav--item" v-bind:class="{ 'active': context == 'browse' }">
					<icon name="browse" color="gray01"></icon>
					<span>Browse</span>
				</a>
				<a href="#" class="nav--item" v-bind:class="{ 'active': context == 'feed' }">  
					<icon name="scope" color="gray01"></icon>
					<span>Feed</span>
				</a>
				<a href="#" class="nav--item" v-bind:class="{ 'active': context == 'paths' }">                
					<icon name="path" color="gray01"></icon>
					<span>Paths</span>
				</a>
				<a href="#" class="nav--item" v-bind:class="{ 'active': context == 'mentors' }">
					<icon name="hand" color="gray01"></icon>
					<span>Mentors</span>
				</a>
				<a href="#" class="nav--item" v-bind:class="{ 'active': context == 'channels' }">
					<icon name="channel" color="gray01"></icon>
					<span>Channels</span>
				</a>
				<a href="#" class="nav--item" v-bind:class="{ 'active': context == 'bookmarks' }">
					<icon name="bookmark" color="gray01"></icon>
					<span>Bookmarks</span>
				</a>
				<a href="#" class="nav--item" v-bind:class="{ 'active': context == 'notes' }">
					<icon name="note" color="gray01"></icon>
					<span>Notes</span>
				</a>
			</div>
		</nav>
	`,
	props: {
		context: { type: String },			
	}                            
});