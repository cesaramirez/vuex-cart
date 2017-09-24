import './bootstrap';
import Vue from 'vue';
import Vuex from 'vuex';
import store from './store';
import App from './App';

window.Vue = Vue;
window.Vuex = Vuex;

Vue.config.productionTip = false;

new Vue({
    el: '#app',
    store,
    template: '<App/>',
    components: { App }
});
