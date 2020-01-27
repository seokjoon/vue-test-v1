import Vue from 'vue';
import Vuex from 'vuex';
import VuexModBar from './VuexModBar';

Vue.use(Vuex);

const store = new Vuex.Store({

	getters: {
		getTitle: state => state.title,
	},

	modules: {
		VuexModBar: VuexModBar,
	},

	state: {
		title: 'title VuexMod',
	},
});

console.log(store.state.title);
console.log(store.state.VuexModBar.title);
console.log(store.getters.getTitle);
console.log(store.getters['VuexModBar/getTitle']);
