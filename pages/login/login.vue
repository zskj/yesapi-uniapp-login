<template>
	<view class="content">
		<view class="u-f-ac"><image class="logo" src="../../static/logo.png"></image></view>
    
		<view class="input-group">
			<view class="input-row border u-f-ac">
				<text class="title">账号：</text>
				<m-input class="m-input" type="text" clearable focus v-model="account" placeholder="请输入账号"></m-input>
			</view>
			<view class="input-row  u-f-ac">
				<text class="title">密码：</text>
				<m-input type="password" displayable v-model="password" placeholder="请输入密码"></m-input>
			</view>
		</view>
		<view class="btn-row">
			<button class="loginbtn" @tap="bindLogin">登录</button>
		</view>
		<view class="action-row">
			<navigator url="../reg/reg">注册账号</navigator>
			<text>|</text>
			<navigator @tap="backindex()">返回首页</navigator>
		</view>
	</view>
</template>

<script>
	import {
		mapMutations
	} from 'vuex'
	import mInput from '../../components/m-input.vue'

	export default {
		components: {
			mInput
		},
	
		data() {
			return {
				providerList: [],
				hasProvider: false,
				account: '',
				password: '',
				positionTop: 0,
				isDevtools: false,
				backpage:'',
				backtype:'',
			}
		},
	onLoad(options){
		this.backpage = options.backpage
		this.backtype = options.backtype
		console.log(options)
	},
		methods: {
			...mapMutations(['login']),
			backindex(){
				uni.switchTab({
					url:"../index/index"
				})
			},
			initPosition() {
				/**
				 * 使用 absolute 定位，并且设置 bottom 值进行定位。软键盘弹出时，底部会因为窗口变化而被顶上来。
				 * 反向使用 top 进行定位，可以避免此问题。
				 */
				this.positionTop = uni.getSystemInfoSync().windowHeight - 100;
			},
			async bindLogin() {
				/**
				 * 客户端对账号信息进行一些必要的校验。
				 * 实际开发中，根据业务需要进行处理，这里仅做示例。
				 */
				if (this.account.length < 3) {
					uni.showToast({
						icon: 'none',
						title: '账号最短为 3 个字符'
					});
					return;
				}
				if (this.password.length < 6) {
					uni.showToast({
						icon: 'none',
						title: '密码最短为 6 个字符'
					});
					return;
				}
				/**
				 * 下面简单模拟下服务端的处理
				 * 检测用户账号密码是否在已注册的用户列表中
				 * 实际开发中，使用 uni.request 将账号信息发送至服务端，客户端在回调函数中获取结果信息。
				 */
				// const data = {
				// 	account: ,
				// 	password: 
				// };
				// const validUser = service.getUsers().some(function(user) {
				// 	return data.account === user.account && data.password === user.password;
				// });
				
				var options = {
					data:{
						s:"App.User.LoginExt",
						password:this.password,
						username:this.account
					},
					method:"POST"
				}
			const res = await this.$myRuquest(options)
			//	console.log(res.data.data);
			//	const validUser ={}
				if (res.data.data.err_code == 0) {
					var infoOptions = {
					data:{
						s:"App.User.Profile",
						uuid:res.data.data.uuid,
						token:res.data.data.token
					},
					method:"POST"
				}
				const infoRes = await this.$myRuquest(infoOptions)
				if(infoRes.data.data.err_code == 0){
					
					
				}else{
					uni.showToast({
						icon: 'none',
						title: infoRes.data.data.err_msg,
					});
				}
				//这里注册
				console.log(infoRes.data.data.info)
				this.login(infoRes.data.data.info)
				
				// 跳转
				if(this.backtype == 1){
					uni.redirectTo({url:this.backpage});
				}else{
					uni.switchTab({url:this.backpage});
				}		
					
				} else {
					uni.showToast({
						icon: 'none',
						title: res.data.data.err_msg,
					});
				}
			},
			
		},
		onReady() {
			this.initPosition();
    }
	}
</script>

<style>
	.input-group{
		padding: 0rpx 50rpx;
	}
	.input-row{
		border: 1rpx;
		color: #000;
		height:100rpx;
		line-height: 100rpx;
		border-bottom: #333333 1rpx solid;
		margin: 20rpx;
	}

	.action-row {
		display: flex;
		flex-direction: row;
		justify-content: center;
    color: #39B54A;
	}

	.action-row navigator {
    color: #39B54A;
		padding: 0 10px;
	}

  .logo {
    width: 250rpx;
    height: 250rpx;
    border-radius: 50%;
    margin: 50px auto 20px auto;
  }
  .loginbtn{
	  background-color: green;
	  margin: 50upx 50upx 50upx 50upx;
	  color: #fff;
  }
</style>
