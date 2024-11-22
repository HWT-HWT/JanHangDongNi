<template>
	<view class="login">
		
		<view class="iocBack" @click="NavTo">
			<image src="../../static/ioc/title/back_icon.png" mode=""></image>
		</view>
		
		<view style="display: flex; justify-content: center; align-items:center; width: 100%; height: 100vh;">
			<view class="login-box">
				
				<view class="login-input">
					<view class="input-icon">
						<image src="@/static/banner/shouji.svg" mode=""></image>
					</view>
					<view class="input-input">
						<input type="text" placeholder="请输入手机号" />
					</view>
				</view>
				
				<view class="login-input">
					<view class="input-icon">
						<image src="@/static/banner/suo.svg" mode=""></image>
					</view>
					<view class="input-input">
						<input type="text" placeholder="请输入密码" password />
					</view>
				</view>
				
				<view class="login-input">
					<view class="input-icon">
						<image src="@/static/banner/suo.svg" mode=""></image>
					</view>
					<view class="input-input">
						<input type="text" placeholder="请输入验证码" />
					</view>
					<view class="yzm">
						获取验证码
					</view>
				</view>
				
				<view class="checkbox">
					<wu-checkbox style="align-items: baseline; color: #707072;">我已认真阅读并同意《“建行惠懂你”个人信息保护政策》和《“建行惠懂你”用户服务协议》，我行不会以任何形式向您收取担保、评估、过桥资金等附加费用!</wu-checkbox>
				</view>
				
				<view class="btn">
					立即登录
				</view>
				
				<view class="footView">
					<view class="footViewleft">
						手机注册
					</view>
					<view class="footViewrigth">
						忘记密码
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			NavTo(){
				uni.reLaunch({
					url:'/pages/index/index'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.login{
	width: 100%;
	height: 100vh;
	background: url('@/static/banner/login_bg.png')no-repeat;
	background-size: 100%;
	.iocBack{
		// width: 100%;
		height: 100rpx;
		// border: 1px solid;
		position: fixed;
		flex: none;
		margin-top: 70rpx;
		display: flex;
		align-items: center;
		padding: 30rpx;
		image{
			width: 20rpx;
			height: 35rpx;
		}
	}
	.login-box{
		width: 80%;
		// height: 700rpx;
		background-color: #fff;
		border-radius: 10rpx;
		box-shadow: 1px 5px 10px rgba(0, 0, 0, 0.2);
		padding: 30rpx 20rpx;
		.login-input{
			width: 100%;
			margin: 0 auto;
			height: 80rpx;
			border: 1px solid #ccc;
			display: flex;
			margin-bottom: 20rpx;
			border-radius: 5rpx;
			.input-icon{
				width: 10%;
				height: 100%;
				// border: 1px solid;

				display: flex;
				align-items: center;
				justify-content: center;
				image{
					width: 35rpx;
					height: 35rpx;
				}
			}
			.input-input{
				flex: 1;
				height: 100%;
				input{
					width: 100%;
					height: 100%;
					font-size: 25rpx;
				}
			}
			.yzm{
				// width: 40%
				padding: 0 20rpx;
				height: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
				color: #6175b3;
				font-size: 25rpx;
			}
		}
		.checkbox{
			width: 100%;
			margin-top: 20rpx;
			font-size: 25rpx;
		}
		.btn{
			width: 100%;
			height: 80rpx;
			border-radius: 40rpx;
			background-color: #ccc;
			display: flex;
			justify-content: center;
			align-items: center;
			color: #fff;
			margin-top: 100rpx;
			font-size: 30rpx;
			letter-spacing: 2px;
		}
		.footView{
			width: 90%;
			margin: 0 auto;
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-top: 20rpx;
			font-size: 28rpx;
			color: #9c9c9c;
		}
	}
}
</style>
