if(typeof Vue === 'undefined') var Vue = () => {}; // console.assert(typeof Vue !== 'undefined'); console.log(typeof Vue);

new Vue({
	data: { title: 'button', disable: false, },
	el: '#button',
});

Vue.component('component1', {
	template: '<span><component2></component2><component3></component3></span>',
});
Vue.component('component2', {
	data: function() { return { component2: 'component2', } },
	template: '<span>{{ component2 }}</span>',
});
var component3 = Vue.extend({ template: '<span>component3</span>', });
//new component3().$mount('#component3');
Vue.component('component3', component3);
new Vue({ el:'#component', });

new Vue({
	el: '#componentLocal',
	template: '<span><component-local1></component-local1><component-local2></component-local2></span>',
	components: {
		componentLocal1: { template: '<span>componentLocal1</span>', },
		componentLocal2: component3,
	},
});

new Vue({
	computed: { compute1: function() { return this.items[0] + this.items[1] }, },
	data: { items: [ 2, 3, ], },
	el: '#compute',
});

Vue.component('componentProps1', {
	props: { item: { type: String, default: 'default', required: false, validator: () => true, }, },
	template: '<span>{{ item }}</span>',
});
new Vue({
	data: { item: 'item props' },
	el: '#componentProps',
});

new Vue({
	computed: { bool: function() { return true; }, },
	data: { item: { value: 200, }, timer: null, },
	el: '#directive',
});

new Vue({
	el: '#filter',
	filters: { filter1: (val) => { return ((!(val)) ? '0' : val.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,')); }, },
});

var vmLifeCycle = new Vue({
	beforeDestroy: function() { clearInterval(this.timer); console.log('beforeDestroy') },
	created: function() { this.timer = setInterval(function() { vmLifeCycle.$destroy(); }, 1000); },
	data: { lifecycle: '' },
	mounted: function() { this.lifecycle = 'mounted'; },
});
vmLifeCycle.$mount('#lifecycle');

new Vue({
	el: '#method',
	methods: { method1: function($e) { console.log($e.target.name); }, },
});

Vue.component('templateX1', { template: '#templateX1', });
new Vue({
	el: '#templateX2',
	template: '<template-x1></template-x1>',
});


new Vue({
	data: { items: [{title: 'bar'}], },
	el: '#title',
});