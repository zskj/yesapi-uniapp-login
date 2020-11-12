<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/* 头条小程序需要把 iconfont 样式放到组件外 */
	/* @import "colorui/main.css"; */
	/* @import "colorui/icon.css"; */
	/* @import "components/m-icon/m-icon.css"; */
	/* 引入自定义图标库 */
	@import "./static/icon.css";

/* flex布局 */
.u-f,.u-f-ac,.u-f-ajc{
	display: flex;
}
.u-f-ac,.u-f-ajc{
	align-items: center;
}
.u-f-ajc{
	justify-content: center;
}
.u-f-jsb{
	justify-content: space-between;
}
.u-f1{
	flex: 1;
}
.u-f-column{
	flex-direction: column;
}



</style>

