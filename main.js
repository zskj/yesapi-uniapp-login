import Vue from 'vue'
import App from './App'
import store from './store/index.js'
Vue.config.productionTip = false

import { myRequest } from './utils/api.js'

 // 加载封装的request接口
Vue.prototype.$myRuquest = myRequest

//判断是否登录
Vue.prototype.checkLogin  = function(backpage, backtype){
	var userInfo  = uni.getStorageSync('userInfo');
	if(userInfo == ''){
		uni.redirectTo({
			url:"../login/login?backpage="+backpage+"&backtype="+backtype
		});
		return false;
	}
	return userInfo;
}

Vue.prototype.$store = store
App.mpType = 'app'

const app = new Vue({
	store,
	...App
})
app.$mount()
