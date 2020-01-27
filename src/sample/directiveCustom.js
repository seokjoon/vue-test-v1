if(typeof Vue === 'undefined') var Vue = () => {};

Vue.directive('fallback-image', {
	bind: function(el) {
		el.addEventListener('error', () => {
			el.src = 'https://dummyimage.com/400x400/000/ffffff/png&text=no+image';
		});
	},
});

new Vue({
	el: '#directiveCustom',
});