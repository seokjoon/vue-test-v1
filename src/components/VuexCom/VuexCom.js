import Vue from 'vue';
import Vuex from 'vuex';

import VuexComTmpl from './VuexComTmpl.vue';

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		title: 'title VuexCom',
	},
});

new Vue({
	el: '#app',
	methods: {
		foo: () => {},
	},
	render: h => h(VuexComTmpl),
	store,
	//template: VuexComTmpl,
});