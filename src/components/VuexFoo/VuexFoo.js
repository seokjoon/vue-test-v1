import Vue from 'vue';
import Vuex from 'vuex';
import VuexFooAsync from "./VuexFooAsync";

Vue.use(Vuex);

const store = new Vuex.Store({
	actions: {
		getApi() {
			return VuexFooAsync.getApi('url').then((outs) => { console.log(outs, 'getApi complete'); });
		},
		inc(ctx) {
			ctx.commit('inc', 3);
		},
	},

	getters: {
		getCtr: (state) => state.ctr,
		getFoo: (state, getters) => state.ctr + getters.getCtr,
	},

	mutations: {
		inc(state, foo) { state.ctr += foo; },
	},

	state: {
		ctr: 0,
	},
});

console.log(store.state.ctr);
store.commit('inc', 2);
console.log(store.state.ctr);
console.log(store.getters.getFoo);
store.dispatch('inc');
console.log(store.state.ctr);
store.dispatch('getApi');
