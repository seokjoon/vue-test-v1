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

var componentPropsEventBtn = Vue.extend({
	data: () => ({counter: 0}),
	methods: { add: function () { this.counter += 1; this.$emit('increment'); }, },
	template: '<span>{{ counter }} <button v-on:click="add">add</button></span>',
});
new Vue({
	components: { componentPropsEventBtn: componentPropsEventBtn, },
	data: { items: [{ title: 'foo' }, { title: 'bar' }, ], total: 0, },
	el: '#componentPropsEvent',
	methods: { increment: function() { this.total += 1; }, },
});

Vue.component('componentPropsSingular', {
	//props: { item: { type: String, default: 'default', required: false, validator: () => true, }, },
	props: { item: { type: Object, default: () => ({ id: 0, title: ''}), required: false, validator: () => true, }, },
	template: '<span>{{ item.id }} | {{ item.title }} &nbsp;&nbsp;</span>',
});
new Vue({
	data: { items: [ { id: 1, title: 'title 1', }, { id: 2, title: 'title 2' } ] },
	el: '#componentPropsPlural',
});

Vue.component('componentRefChild', { data: () => ({title: 'componentRefChild'}), template: '<span>componentRefChild</span>', });
var componentRefParent = new Vue({ el: '#componentRefParent' });
var componentRefChildFoo = componentRefParent.$refs.foo; console.log(componentRefChildFoo.title);

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


Vue.component('login-tmpl', {
	template: '#login-tmpl',
	data: () => ({ id: '', password: '', }),
	methods: { login: function () { console.log(this.id, this.password); } },
});
new Vue({ el: '#login', });


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