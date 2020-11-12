<template>
	<view>
		<view class='home-info u-f-ac'>
			<image src="../../static/avatar.jpg" mode="widthFix" lazy-load></image>
				<view class="u-f1">
					<view>{{userInfo.username}}</view>
					<view>{{userInfo.rolename}}</view>
				</view>
				<view class="icon iconfont icon-jinru"></view>
		</view>
		
		<!-- 功能列表 -->
		<view class="home-list">
			<block v-for="(item,index) in list" :key="index">
				<view class="home-list-item u-f-ac u-f-jsb animated fadeIn fast" 
					hover-class="home-list-hover"
					>
						<view class="u-f-ac">
							<view v-if="item.icon"
							class="icon iconfont"
							:class="['icon-'+item.icon]"></view>
							{{item.name}}
						</view>
						<view class="icon iconfont" :class="{'icon-jinru':!item.data}">{{item.data || ''}}</view>
					</view>
			</block>
			<button type="default" @tap="logout()">退出登录</button>
		</view>
	</view>
	
</template>



<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'
	export default {
		data() {
			return {
				userInfo:{},
				list:[
						{ icon:"liulan",name:"我的日记",clicktype:"navigateTo",url:"/pages/pwd/pwd"},
						{ icon:"huiyuanvip",name:"修改密码",clicktype:"nothing",url:"../pwd/pwd" },
						{ icon:"keyboard",name:"我的消息",clicktype:"nothing",url:"../pwd/pwd" },
					]
			}
		},
		computed: {
			...mapState(['hasLogin', 'forcedLogin'])
		},
		
		onShow(){
			var loginres = this.checkLogin("../my/my",'2');
			this.userInfo = loginres
		},
		watch: {
				hasLogin: function (val) {
					if(!val){
						this.checkLogin("../my/my",'2')
					}
					
				}},
		
		methods: {
			...mapMutations(['logout']),		
						
		}
	}
</script>

<style>
	.home-info{
		padding: 20rpx;
	}
	.home-info>image{
		flex-shrink: 0;
		width: 100rpx;
		height: 100rpx;
		border-radius: 100%;
		margin-left: 15rpx;
	}
	.home-info>view:first-of-type>view:first-child{
	font-size: 32rpx;
	
	}
	.home-info>view:first-of-type>view:last-child{
	color:#bbbbbb
	
	}
	
   	.home-info>view:last-of-type{
		height: 100%;
		width: 70upx;
	}
	
.home-list-item{
	padding: 20upx;
	border-top: 1upx solid #F4F4F4;
	border-bottom: 1upx solid #F4F4F4;
}
.home-list-item>view:first-child{
	color: #333333;
}
.home-list-item>view:first-child>view{
	margin-right: 10upx;
}
.home-list-item>view:last-child{
	color: #CCCCCC;
}
.home-list-hover{
	background: #f4f4f4;
}
</style>
