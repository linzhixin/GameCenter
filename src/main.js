import Vue from 'vue'
import Vuex from 'vuex'
import App from './app.vue'
import Swiper from './Swiper.vue'
import store from './store'
Vue.use(Vuex)

new Vue({
	el:'#app',
	store,
	render:h=>h(App)
})
