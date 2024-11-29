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
						<input type="text" placeholder="请输入手机号" v-model="phone"  maxlength="11" />
					</view>
				</view>
				
				<view class="login-input">
					<view class="input-icon">
						<image src="@/static/banner/suo.svg" mode=""></image>
					</view>
					<view class="input-input">
						<input type="text" placeholder="请输入密码" password  maxlength="16" v-model="pasw"/>
					</view>
				</view>
				
			
				
				<view class="login-input">
					<view class="input-input">
						<input type="text" placeholder="请输入验证码"  maxlength="6" v-model="yzm" />
					</view>
					<view class="yzm">
						获取验证码
					</view>
				</view>
				
				<view class="checkbox">
					<label>
						<checkbox @click="checkboxBtn(Ischeckbox)" iconColor="#fff" activeBackgroundColor='#3475d3' :checked="Ischeckbox"/><text>我已认真阅读并同意《<text style="color: #3475d3;">“建行惠懂你”个人信息保护政策“建行惠懂你”用户服务协议</text>》和《<text style="color: #3475d3;">““建行惠懂你”用户服务协议</text>》，我行不会以任何形式向您收取担保、评估、过桥资金等附加费用!</text>
					</label>
				</view>
				
				<view class="btn" v-if="ActiveBtn">
					立即登录
				</view>
				
				<view class="btn" style="background-color: #3475d3;" v-else @click="login">
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
	import uinput from "@/components/poiuy-uinput/uinput.vue";
	export default {
		data() {
			return {
				phone:'',
				pasw:'',
				yzm:'',
				Ischeckbox:false,
				ActiveBtn:true,
			};
		},
		methods:{
			NavTo(){
				uni.reLaunch({
					url:'/pages/index/index'
				})
			},
			acBtn(){
				if(this.phone.length>=11 && this.pasw.length >=6 && this.Ischeckbox === true){
					this.ActiveBtn = 	false	
				}else{
					this.ActiveBtn = true
				}
			},
			login(){
				if(this.phone == "19867945909"  && this.pasw =="abc123456789"){
					if(this.yzm =="2510"){
						uni.setStorageSync('account', {phone:this.phone , pasw:this.pasw})
						uni.getStorageSync('account')
						uni.showToast({
							title:'登录成功',
							duration:3000,
							icon:'none'
						}),
						uni.reLaunch({
							url:'/pages/index/index'
						})
					}else{
						uni.showToast({
							title:'未填写验证码或验证码错误',
							duration:3000,
							icon:'error'
						})
					}
				}else{
					uni.showToast({
						title:'账户密码不正确',
						duration:3000,
						icon:'error'
					})
				}
			},
			checkboxBtn(Ischeckbox){
				this.Ischeckbox = !Ischeckbox
			}
		},
		watch:{
			phone(){
				this.acBtn()
			},
			pasw(){
				this.acBtn()
			},
			yzm(value){
				this.acBtn()
			},
			Ischeckbox(value){
				this.acBtn()
			}
		},
		components:{
			uinput
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
		padding:30rpx 20rpx;
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
				// height: 100%;
				input{
					width: 100%;
					height: 100%;
					font-size: 25rpx;
					padding-left: 20rpx;
				}
				.input-text{
					display: flex;
					align-items: center;
					justify-content: center;
					
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
			checkbox{
				transform: scale(0.8);
			}
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
