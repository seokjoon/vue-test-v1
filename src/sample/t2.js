if(typeof Vue === 'undefined') var Vue = () => {};


var getUser = function (id, cb) {
	setTimeout(function() {
		var filteredUsers = userData.filter(function(user) { return user.id === parseInt(id, 10); });
		cb(null, filteredUsers && filteredUsers[0]);
	}, 500);
};
var getUsers = function(cb) { setTimeout(function() { cb(null, userData); }, 500); };
var postUser = function(params, cb) {
	setTimeout(function() {
		params.id = userData.length + 1;
		userData.push(params);
		cb(null, params);
	}, 500);
};
var UserCreate = {
	created: () => {},
	data: function () {
		return {
			error: null,
			sending: false,
			user: this.defaultUser(),
		};
	},
	methods: {
		createUser: function() {
			if(this.user.name.trim() === '') { this.error = 'required name'; return; }
			if(this.user.desc.trim() === '') { this.error = 'required desc'; return; }
			postUser(this.user, (function(err, user) {
				this.sending = false;
				if(err) this.error = err.toString();
				else {
					this.error = null;
					this.user = this.defaultUser();
					alert('add user');
					this.$router.push('/users');
				}
			}).bind(this));
		},
		defaultUser: () => ({ name: '', desc: '', }),
	},
	template: '#spa-user-create',
};
var userData = [ { id: 1, name: 'foo', desc: 'foo desc', }, { id: 2, name: 'bar', desc: 'bar desc', } ];
var UserItem = {
	created: function() { this.fetchData(); },
	data: () => ({ loading: false, user: null, error: null }),
	methods: {
		fetchData: function() {
			this.loading = true;
			getUser(this.$route.params.id, (function(err, user) {
				this.loading = false;
				if(err) this.error = err.toString();
				else this.user = user;
			}).bind(this));
		},
	},
	template: '#spa-user-item',
	watch: { '$route': 'fetchData', },
};
var UserList = {
	created: function() { this.fetchData(); },
	data: function() { return { loading: false, users: () => [], error: null, }; },
	methods: {
		fetchData: function() {
			this.loading = true;
			getUsers((function(err, users) {
				this.loading = false;
				if(err) this.error = err.toString();
				else this.users = users;
			}).bind(this));
		},
	},
	template: '#spa-user-list',
	watch: { '$route': 'fetchData', },
};
var routerSpa = new VueRouter({
	routes: [
		{ path: '/top', component: { template: '<div>top</div>', }, },
		{ path: '/users', component: UserList, },
		{ path: '/users/create', component: UserCreate, },
		{ path: '/users/:id', component: UserItem, }
	],
});
var spa = new Vue({ router: routerSpa, });
spa.$mount('#spa');


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

