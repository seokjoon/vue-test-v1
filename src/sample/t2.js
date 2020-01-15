if(typeof Vue === 'undefined') var Vue = () => {};

var router = new VueRouter({
	routes: [
		{ path: '/link1', component: { template: '<div>link1</div>' }, },
		{ path: '/link2/:id', component: { template: '<div>link2 id {{ $route.params.id }}</div>' }, },
		{ path: '/link3/:id', name: 'link3', component: { template: '<div>link3 id {{ $route.params.id }}</div>' }, },
		{ path: '/link5', beforeEnter: function(to, from, next) { if(to.query.foo === 'bar') next('/link1'); else next(); }, component: { template: '<div>link 5</div>' } },
	],
});
router.beforeEach(function(to, from, next) { if(to.path === '/link4') next('/link1'); else next(); });

var app = new Vue({ router: router, });
app.$mount('#app');

