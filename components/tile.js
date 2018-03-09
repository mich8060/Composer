Vue.component('tile',{   
	template: `
		<div class="tile">
			<div class="tile--image"><img v-bind:src="image" alt="" /></div>
			<div class="tile--title">{{title}}</div>
			<div class="tile--action">
				<btn appearance="stroke" size="sm">Measure skill</btn>
			</div>
		</div>
	`,
	props: {   
		image: { default: 'http://placehold.it/2h00x200', type: String },
		title: { default: 'Techology', type: String }
	}                         
});

console.log('Tile component loaded.');  