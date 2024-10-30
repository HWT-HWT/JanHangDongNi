<template>
	<view class="SetMy">
		<view class="SetMyHead">
			<image src="../../static/my_iocn/top_bg.png" mode="" ></image>
			<view class="SetMyHeadTitle">
				<view style="width: 100%; height: 50px;">
					
				</view>
				<view class="HeadTitle">
					<view class="title">
						<view style="margin: 0 0 0 350rpx ;">
							我的
						</view>
					</view>
					<view class="iocn">
						<image src="../../static/my_iocn/ic_setting.png" mode="" ></image>
					</view>
				</view>
				<view class="Information">
					<view class="Head">
						
					</view>
					<view class="name">
						<text>*华平</text>
						<view class="provePhone">
							<view class="prove">
								<view class="ioc_">
									
								</view>
								<view class="text">
									认证用户
								</view>
							</view>
							<view class="Phone">
								152***0646
							</view>
						</view>
					</view>
				</view>
				
				<view class="loin">
					<view class="BgBox">
						<image src="../../static/my_iocn/pic_ptbg.png" mode=""></image>
						
						<view class="iocn">
							<image src="../../static/my_iocn/hz_pt.png" mode=""></image>
						</view>
						
						<view class="textButton">
							<view class="text">
								
							</view>
							
							<view class="buttom">
								
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
			
			<MyList :MyList="MyList"></MyList>
		</view>
		
		<view class="img">
			<image src="../../static/my_iocn/home_icon_footer.png" mode=""></image>
		</view>
	</view>
</template>

<script>
	import NavbarTitle from '@/components/NavbarTitle.vue';
	import MyList from '@/components/My.vue'
	export default {
		data() {
			return {
				MyList:[
					{
						ioc:'../static/my_iocn/ic_qy.png',
						name:'我的企业',
						NvaGo:1
					},
					{
						ioc:'../static/my_iocn/ic_ce.png',
						name:'我的测额',
					},
					{
						ioc:'../static/my_iocn/iocn_8.png',
						name:'我的账户',
						NvaGo:2
					},
					{
						ioc:'../static/my_iocn/ic_home_ic_zncf.png',
						name:'我的贷款',
						NvaGo:3
					},
					{
						ioc:'../static/my_iocn/ic_us.png',
						name:'关于我们',
					},
					]
			};
		},
		components:{
			MyList
		}
		
	}
</script>

<style lang="scss" scoped>
	.SetMy{
		width: 100%;
		overflow: hidden;
		.SetMyHead{
			width: 100%;
			aspect-ratio: 1/0.66;
			position:relative;
			image{
				width: 100%;
				height: 100%;
				
			}
			.SetMyHeadTitle{
				width: 100%;
				height: 50px;
				position:absolute;
				top: 0%;
				.HeadTitle{
					width: 100%;
					// border:1px solid;
					height: 50px;
					display: flex;
					.title{
						flex: 1;
						display: flex;
						align-items: center;
						color: white;
						font-size: 28rpx;
						
					}
					.iocn{
						width: 25px;
						height: 20px;
						margin-right: 20px;
						margin-top: 15px;
					}
					
				}
			}
			.Information{
				width: 100%;
				// border:1px solid;
				// height: 75px;
				display: flex;
				.Head{
					width: 18%;
					aspect-ratio: 1/1;
					background: url('../../static/my_iocn/head_nor.png') no-repeat;
					background-size: 100%;
					border: 2px solid #b2e6fe;
					border-radius: 100%;
					margin-left: 40rpx;
				}
				.name{
					flex: 1;
					margin-left: 10px;
					margin-top: 40rpx;
					height: 100%;
					color: white;
					font-family: '黑体';
					font-size: 18px;
					// border:1px solid;
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
								// border:1px solid;
								height: 30rpx;
								background: url('../../static/my_iocn/ic_rz.png') no-repeat;
								background-size: 30rpx;
							}
							.text{
								flex: 1;
								font-size: 12px;
								align-self: center;
								margin-left: 5rpx;
								color: #5fd26d;
								
							}
						}
						.Phone{
							flex: 1;
							// border:1px solid;
							align-self: center;
							font-size: 12px;
							// margin-top: 5rpx;
							// margin-left: 5rpx;
						}
					}
				}
			}
			.loin{
				margin-top: 20px;
				width: 100%;
				height: 9vh;
				border: 1px solid red;
				position: relative;
				top: 0.2rem;
				.BgBox{
					width: 90%;
					height: 100%;
					background: #f9faff;
					margin: 0 auto;
					border-radius: 10px;
					position: relative;
					display: flex;
					bottom:0;
					image{
						width: 100%;
						height: 100%;
						border-radius: 10px;
					}
					.iocn{
						width:30px ;
						height: 40px;
						// border: 1px solid;
						position: absolute;
						top: 0%;
						left: 5%;
					}
					.textButton{
						width: 80%;
						height: 100%;
						border: 1px solid;
						position: absolute;
						display: flex;
						left:15%;
						.text{
							width: 70%;
							height: 100%;
							border: 1px solid;
						}
						.buttom{
							width: 30%;
							height: 100%;
							border: 1px solid;
						}
					}
				}
			}
		}
		.SetMyBody{
			width: 100%;
			height:500px;
			// border: 1px solid;
			background: #f9faff;
			.title{
				width: 90%;
				height: 50px;
				// border: 1px solid;
				font-size: 18px;
				font-family:'黑体';
				line-height: 50px;
				margin: 0 auto;
				// margin-left: 20px;
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
	}
</style>
