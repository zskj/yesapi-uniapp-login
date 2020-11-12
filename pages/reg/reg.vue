<template>
	<view class="content">
		<view class="u-f-ac">
			<image  class='logo' src="../../static/logo.png"></image>
		</view>
    
		<view class="input-group">
			<view class="input-row border">
				<text class="title">账号：</text>
				<m-input type="text" focus clearable v-model="account" placeholder="请输入账号"></m-input>
			</view>
			<view class="input-row border">
				<text class="title">邮箱：</text>
				<m-input type="text" clearable v-model="email" placeholder="请输入邮箱"></m-input>
			</view>
			<view class="input-row border">
				<text class="title">密码：</text>
				<m-input type="password" displayable v-model="password" placeholder="请输入密码"></m-input>
			</view>
			
		</view>
		<view class="btn-row">
			<button class="regbtn" @tap="register">注册</button>
		</view>
	</view>
</template>

<script>
	
	import mInput from '../../components/m-input.vue';

	export default {
		components: {
			mInput
		},
		data() {
			return {
				account: '',
				password: '',
				email: ''
			}
		},
		methods: {
			async register() {
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
				if (this.email.length < 3 || !~this.email.indexOf('@')) {
					uni.showToast({
						icon: 'none',
						title: '邮箱地址不合法'
					});
					return;
				}

				const data = {
					account: this.account,
					password: this.password,
					email: this.email
				}
			//注册代码
			var options = {
					data:{
						s:"App.User.RegisterExt",
						password:this.password,
						username:this.account,
						ext_info:"{\"yesapi_email\":\"" + this.email + "\"}"
					},
					method:"POST"
				}
			const res = await this.$myRuquest(options)
				console.log(res.data.data);
			//	const validUser ={}
				if (res.data.data.err_code == 0) {
					uni.showToast({
						title: '注册成功，请登录'
					});
					
					uni.navigateBack({
						delta: 1
					});
				} else {
					uni.showToast({
						icon: 'none',
						title: "注册失败："+ res.data.data.err_msg,
					});
				}
			
			
			
			
			
			
			
			
			
			}
		}
	}
</script>

<style>
  .title {
    width: 90px;
  }
  .banner {
    margin: 0 auto;;
    width: 600upx;
    height: 350upx;
  }
	.input-group{
		padding: 0rpx 50rpx;
	}
	.input-row{
		display: flex;
		align-items: center;
		border: 1rpx;
		color: #000;
		height:100rpx;
		line-height: 100rpx;
		border-bottom: #333333 1rpx solid;
		margin: 20rpx;
	}
	.logo {
	  width: 250rpx;
	  height: 250rpx;
	  border-radius: 50%;
	  margin: 50px auto 20px auto;
	}
	.regbtn{
		  background-color: green;
		  margin: 50upx 50upx 50upx 50upx;
		  color: #fff;
	}
</style>
