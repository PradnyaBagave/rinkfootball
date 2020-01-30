// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VeeValidate from "vee-validate"
Vue.use(VeeValidate, {
	inject: true,
	fieldsBagName: "veeFields",
	errorBagName: "veeErrors"
  }) 
Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(Vuex)

let store = new Vuex.Store({
	state: {
		user: {},
		noimage:false,
	},
	actions:{
		setNoImage({commit}, data){
			commit("SET_NOIMAGE",data)
		  }
	},
	mutations: {
		SET_NOIMAGE(state,data){
		  state.noimage = data;
		}
	  },
	getters: {
		user: state => {
			return state.user
		},
		getPlayer(state) {
			return state.player;
		  },
		  getNoImage(state){ 
			return state.noimage;
		  }
	}
})

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	template: '<App/>',
	components: {
		App
	},
})
