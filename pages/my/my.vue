<template>
	<view class="SetMy">
		<view class="SetMyHead">
			<image src="../../static/myiocn/loginTopbg.png" v-if="!IsLogin" @click="Gologin" ></image>

			<image style="" src="../../static/myiocn/Topbg-1.png" v-else></image>
			
			<view class="SetMyHeadTitle">
				<view style="width: 100%; height: 40px;" >
					
				</view>
				
				<view class="HeadTitle">
					<view class="title">
						我的
					</view>
					<view class="iocn" @click="quit">
						<image  src="../../static/myiocn/ic_setting.png" mode="" ></image>
					</view>
				</view>
				
				
				
				<view class="Information" @click="Gologin" v-if="!IsLogin">
					<view class="Head">
						<image class="Head-image" src="../../static/myiocn/head_nor.png" mode=""></image>
					</view>
					<view class="name">
						<text>欢迎登录</text>
					</view>
				</view>
				
				<view class="Information"  v-else >
					<view class="Head">
						<image class="Head-image" src="../../static/myiocn/head_nor.png" mode=""></image>
					</view>
					<view class="name">
						<text>*岳鹏</text>
						<view class="provePhone">
							<view class="prove">
								<view class="ioc_">
									
								</view>
								<view class="text">
									认证用户
								</view>
							</view>
							<view class="Phone">
								135***4922
							</view>
						</view>
					</view>
				</view>
				
				
				
				
			</view>
		</view>
		<view class="SetMyBody">
			<view class="title">
				我的业务
			</view>
			
			<MyList :MyList="MyList" @open="open"></MyList>
		</view>
		
		<view class="img">
			<view class="">
				<image src="../../static/myiocn/home_icon_footer.png" mode=""></image>
			</view>
		</view>
		
		<uni-popup class="popup" ref="popup" type="bottom" 
		background-color="#fff"
		>
			<view class="popup-title">
				<view class="cloas" @click="close()">
					取消
				</view>
				<view class="popup-text">
					请选择关联企业
				</view>
				<view class="rigth" @click="account()">
					确定
				</view>
			</view>
			
			<view class="popup-conten">
				<view class="popup-name">
					广州市智成毅创商务有限公司
				</view>
				<view class="popup-ioc">
					<image class="popup-image" src="../../static/myiocn/direction_right_icon.png" mode="" ></image>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import NavbarTitle from '@/components/NavbarTitle.vue';
	import MyList from '@/components/My.vue'
	import {gologin} from '@/components/login.js'
	export default {
		data() {
			return {
				MyList:[
					{
						ioc:'../static/myiocn/ic_qy.png',
						name:'我的企业',
						NvaGo:1
					},
					{
						ioc:'../static/myiocn/ic_ce.png',
						
						name:'我的测额',
					},
					{
						ioc:'../static/myiocn/iocn_8.png',
						name:'我的账户',
						NvaGo:2
					},
					{
						ioc:'../static/myiocn/ic_home_ic_zncf.png',
						name:'我的贷款',
						NvaGo:3
					},
					{
						ioc:'../static/myiocn/ic_us.png',
						name:'关于我们',
					},
				],
				IsLogin:'',
			};
		},
		components:{
			MyList
		},
		onLoad() {
			this.IsLogin = uni.getStorageSync('account')
			console.log(this.IsLogin);
		},
		methods:{
			open(){
				console.log(this.$refs.popup.open('bottom'));
			},
			close(){
				this.$refs.popup.close()
			},
			
			account(){
				gologin('/pages/MyAccount/MyAccount')
			},
			Gologin(){
				uni.navigateTo({
					url:"/pages/login/login"
				})
			},
			quit(){
				console.log(123);
				uni.removeStorageSync('account')
				gologin('')
			}
		}
		
	}
</script>

<style lang="scss" scoped>
	.SetMy{
		width: 100%;
		overflow: hidden;
		background-color: #f7f9ff;
		height: 100vh;
		.SetMyHead{
			width: 100%;
			aspect-ratio: 2/1.4;
			image{
				width: 100%;
				height: 100%;
			}
			button{
				width: 200rpx;
				height: 100%;
				border:none;
				border-radius: 100rpx;
				height: 70rpx; 
				background: url('../../static/myiocn/btn_dlzc.png') no-repeat;
				box-shadow:0 8rpx 16rpx rgba(0, 0, 0, 0.3); ;
				background-size: 100%;
				font-size: 28rpx;
				margin-top: -150rpx;
				color: #6382c0;
				margin-left: 450rpx;
			}
			.SetMyHeadTitle{
				width: 100%;
				height: 100rpx;
				position:absolute;
				top: 0%;
				.HeadTitle{
					width: 100%;
					height: 100rpx;
					display: flex;
					.title{
						flex: 1;
						display: flex;
						align-items: center;
						color: white;
						font-size: 35rpx;
						justify-content: center;
						margin-left:50rpx;
					}
					.iocn{
						display: flex;
						justify-content: center;
						align-items: center;
						image{
							width: 45rpx;
							height: 40rpx;
							margin: 0 10rpx;
						}
					}
					
				}
				
			}
			.Information{
				width: 100%;
				display: flex;
				align-items: center;
				.Head{
					width: 150rpx;
					height: 150rpx;
					border-radius: 100%;
					margin-left: 40rpx;
					.Head-image{
						width: 150rpx;
						height: 150rpx;
					}
				}
				.name{
					flex: 1;
					margin-left: 40rpx;
					height: 100%;
					color: white;
					font-family: '黑体';
					font-size: 36rpx;
					// border: 1px solid;
					.provePhone{
						width: 100%;
						margin-top: 20rpx;
						height: 40rpx;
						display: flex;
						.prove{
							width: 30%;
							height: 100%;
							display: flex;
							.ioc_{
								align-self: center;
								width: 30rpx;
								height: 30rpx;
								background: url('../../static/myiocn/ic_rz.png') no-repeat;
								background-size: 30rpx;
							}
							.text{
								flex: 1;
								font-size: 24rpx;
								align-self: center;
								margin-left: 5rpx;
								color: #5fd26d;
								
							}
						}
						.Phone{
							flex: 1;
							align-self: center;
							font-size: 24rpx;
						}
					}
				}
			}
		}
		.SetMyBody{
			width: 100%;
			background: #f7f9ff;
			margin-top: 20px;
			.title{
				width: 90%;
				height: 50px;
				font-size: 18px;
				font-family:'黑体';
				line-height: 50px;
				margin: 0 auto;
			}
		}
		.img{
			width: 100%;
			height: 60px;
			// border: 1px solid;
			display: flex;
			justify-content: center;
			align-items: center;
			background-color: #f9faff;
			image{
				width: 350rpx;
				height: 20rpx;
			}
		}
		.popup-title{
			width: 100%;
			height: 40px;
			background-color: #eeeeee;
			display: flex;
			color: #6d6d6d;
			.cloas{
				width: 20%;
				height: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
			}
			.popup-text{
				width: 60%;
				height: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
			}
			.rigth{
				width: 20%;
				height: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
			}
		}
		.popup-conten{
			width: 100%;
			height: 40vh;
			display: flex;
			
			.popup-name{
				width: 80%;
				height: 40px;
				background-color: white;
				display: flex;
				justify-content: center;
				padding-left: 140rpx;
				align-items: center;
				// border: 1px solid;
				color: #a1a1a1;
				border-bottom: 1px solid #ccc;
				font-size: 14px;
			}
			.popup-ioc{
				// flex: ;
				width: 20%;
				height: 40px;
				display: flex;
				justify-content: center;
				align-items: center;
				// border: 1px solid;
				border-bottom: 1px solid #ccc;
				.popup-image{
					width: 30rpx;
					height: 20rpx;
				}
			}
		}
	}
</style>
