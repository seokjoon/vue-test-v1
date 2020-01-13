if(typeof Vue === 'undefined') var Vue = () => {}; // console.assert(typeof Vue !== 'undefined'); console.log(typeof Vue);

var vmBtn = new Vue({ data: { title: 'btn', disable: false, }, });
vmBtn.$mount('#btn');

var vmCompute = new Vue({
	computed: { compute1: function() { return this.items[0] + this.items[1] }, },
	data: { items: [ 2, 3, ], },
});
vmCompute.$mount('#compute');

var vmDirective = new Vue({
	computed: { bool: function() { return true; }, },
	data: { item: { value: 200, }, timer: null, },
});
vmDirective.$mount('#directive');

var vmFilter = new Vue({ filters: { filter1: (val) => { return ((!(val)) ? '0' : val.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,')); }, }, });
vmFilter.$mount('#filter');

var vmLifeCycle = new Vue({
	data: { lifecycle: '' },
	created: function() { this.timer = setInterval(function() { vmLifeCycle.$destroy(); }, 1000); },
	mounted: function() { this.lifecycle = 'mounted'; },
	beforeDestroy: function() { clearInterval(this.timer); console.log('beforeDestroy') },
});
vmLifeCycle.$mount('#lifecycle');

var vmMethod = new Vue({ methods: { method1: function($e) { console.log($e.target.name); }, }, });
vmMethod.$mount('#method');

var vmTitle = new Vue({ data: { items: [{title: 'bar'}], }, });
vmTitle.$mount('#title'); //console.log(vm.items);