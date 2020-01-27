<template>
	<div id="app">
		<div>title: {{ titleBar }}</div>
		<div>title: {{ title }}</div>
	</div>
</template>


<script>
	import { mapState, mapMutations, } from 'vuex';

	export default {
		computed: mapState([ 'title', ]),
		data: function() {
			return {
				titleBar: this.$store.state.title,
			};
		},
		methods: mapMutations([ 'foo' ]),

	};
</script>

<style>

</style>