import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		/**
		 * 是否需要强制登录
		 */
		forcedLogin: true,
		hasLogin: false,
		userInfo: {},
	},
	mutations: {
		login(state, provider) {
			//console.log(provider)
			state.userInfo = provider;
			state.hasLogin = true;
			uni.setStorageSync('userInfo',provider)
		},
		logout(state) {
			console.log("111")
			state.hasLogin = false;
			state.userInfo = {};
			uni.removeStorageSync('userInfo');
			uni.redirectTo({
				url:"/pages/index/index"
			});
		}
	}
})

export default store
