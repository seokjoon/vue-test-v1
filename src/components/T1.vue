<template>
	<div>
		{{ item }}
	</div>
</template>


<script>
	export default {
		name: 'T1',
		props: {
			item: String,
		},
	};
	console.log('T1');
</script>