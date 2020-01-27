import Vue from 'vue';
//import App from './App.vue';
import ComSingleFile from './components/ComSingleFile/ComSingleFile';

Vue.config.productionTip = false;

//const app = App;
const app = ComSingleFile;

new Vue({
  render: h => h(app),
}).$mount('#app');
