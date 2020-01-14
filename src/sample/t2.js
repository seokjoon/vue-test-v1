if(typeof Vue === 'undefined') var Vue = () => {};

var router = new VueRouter({
	routes: [
		{ path: '/foo', component: { template: '<div>foo</div>' }, },
		{ path: '/bar', component: { template: '<div>bar</div>' }, },
	],
});

var app = new Vue({
	router: router,
});
app.$mount('#app');