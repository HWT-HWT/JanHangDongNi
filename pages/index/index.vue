<template>
	<view class="Home">
		
		<view style="width: 100%; height: 100px;">
			
		</view>
		<view class="navbar-title">
			<view class="occupy">
				
			</view>
			<view class="navigationBar">
				<view class="navigationBar-positioning">
					<view class="images">
						<image src="../../static/SVG/positioning.svg"></image>
					</view>
					<view class="text">
						<text>广州</text>
					</view>
				</view>
				<view class="navigationBar-search">
					<uni-search-bar radius="5" placeholder="代发工资"  clearButton="none" cancelButton="none" bgColor="#000"  />
				</view>
				
				<view class="navigationBar-ioc">
					<view class="ioc_" v-for="(item,index) in 4" :key="index">
							<image :src='`../../static/ioc/title/title_${index+1}.png`' mode=""></image>
					</view>
				</view>
			</view>
		</view>
		
		<view class="Maxbanner">
			<image src="../../static/banner/img_plate.gif" mode="widthFix"></image>
			<view class="btnBanner">
				<text>测测贷款额度</text>
			</view>
		</view>
		
		<view class="operation">
			<view class="operation_box" v-for="(item,index) in 10" :key="item">
				<image :src='`../../static/ioc/bar/iocn_${index+1}.png`' mode=""></image>
				<text>{{operationBar[index]}}</text>
			</view>
		</view>
		
		<view class="broadcast">
			<view class="iocn">
				<image src="../../static/ioc/broadcast/ic_horn_pushmessage.png" mode=""></image>
			</view>
			<view class="Text">
				<view class="text">
					关于贷款资金用途的提示
				</view>
				<view class="Text_iocn">
				</view>
			</view>
		</view>
		
		<view class="min_banner">
			<swiper :indicator-dots="true" :autoplay="true" circular="true" :interval="3000" :duration="2000" indicator-active-color='#fff' indicator-color='#ccc' >
				<swiper-item v-for="item in 6" :key="item">
					<image src="../../static/Background/xiaoweibanner.png" mode=""></image>
				</swiper-item>
			</swiper>
		</view>
		
		
		<view>  
			<z-tabs :list="list" inactive-color='#6f6f6f' active-color='#000' unit='12rpx'></z-tabs>	
	   </view>  
	   
		<loan :list='item' v-for="(item,index) in loanList" :key="index"></loan>
		
		<view style="width: 300rpx;">
			<z-tabs :list="Strategy" inactive-color='#6f6f6f' active-color='#000' unit='12rpx'></z-tabs>	
		</view> 
		
		<Strategy></Strategy>
	</view>
</template>

<script>
	import NavbarTitle from '@/components/NavbarTitle.vue';
	import navTab from '@/components/navTab.vue'
	import loan from '@/components/loan.vue'
	import Strategy from '@/components/Strategy.vue'
	export default {
		data() {
			return {
				operationBar:['我要贷款','我要测额','我要支用','我要还款','我要提额','我要续费','贷款查询','我的账户','我要开户','更多'],
				list:['我是小微企业','我是个人企业','我是科创企业','我是农户','我是村集体','我是进出口企业','全部产品'],
				loanList:[
					{name:'信用快贷',title:'纯信用 无抵押', money:'3,000,000' ,percentage:'3.6%'},
					{name:'抵押快贷',title:'便捷快速', money:'3,000,000' ,percentage:'3.0%'},
					{name:'质押快贷',title:'全流程线上办理', money:'3,000,000' ,percentage:'3.10%'},
					{name:'平台快贷',title:'数据增信', money:'3,000,000' ,percentage:'3.85%'}
				],
				Strategy:['看视频','读攻略']
			};
		},
		 components: {  
		    NavbarTitle,
			navTab,
			loan,
			Strategy
		},
		onLoad() {
			
		}
	}
	
</script>

<style lang="scss" scoped>
	.Home{
		width: 100%;
		overflow: hidden;
		.navbar-title{
			width: 100%;
			height: 100px;
			background: linear-gradient(to right, #4d82db, #3273d1); /* 从左到右的渐变 */ 
			position: fixed;
			top: 0;
			z-index: 999;
			.occupy{
				width: 100%;
				height: 55%;
			}
			.navigationBar{
				width: 100%;
				height: 40%;
				display: flex;
				align-items: center;
				.navigationBar-positioning{
					width: 20%;
					display: flex;
					align-items: center;
					.images{
						align-items: center;
						image{
							width: 65rpx;
							height: 55rpx;
						}
					}
					.text{	
						flex: 1;
						height: 100%;
						color: white;
					}
				}
				.navigationBar-search{
					flex: 1;
					opacity: 0.2;					
					justify-items: center;
					align-self: center;
					uni-search-bar{
						display: flex;
						align-items: center;
					}
				}
				.navigationBar-ioc{
					display: flex;
					.ioc_{
						display: flex;
						align-items: center;
						width: 25px;
						height: 25px;
						image{
							width: 85%;
							height: 85%;
						}
					}
				}
			}
		}
		.Maxbanner{
			width: 100%;
			// height: 300rpx;
			aspect-ratio: 2/1.1;
			z-index: 998;
			position: relative;
			image{
				width: 100%;
				height: 100%;
			}
			.btnBanner{
				width: 65%;
				aspect-ratio: 4/1;
				background: url('../../static/banner/ic_home_oranges_anniu_bg.png') no-repeat ;
				background-size: 100%;
				position: absolute;
				top: 90%;
				left: 17.9%;
				margin: 0 auto;
				text-align: center;
				display: flex;
				justify-content: center;
				align-items: center;
				font-weight: 600;
				color: #d67c3b;
				font-size: 28rpx;
				
			}
		}
		.operation{
			width: 100%;
			display: grid;
			grid-template-columns: repeat(5,1fr);
			max-width: 100%;
			gap: 10px;
			padding: 0 15px;
			margin: 0 auto;
			text-align: center;
			font-size: 20rpx;
			font-family:'粗体' ;
			margin-top: 15%;
			.operation_box{
				// border: 1px solid;
				width: 65%;
				aspect-ratio: 1/1;
				margin-top: 15%;		
				image{
					// padding: 20px;
					width: 82%;
					height: 82%;
				}
			}
		}
		.broadcast{
			width: 95%;
			height: 40px;
			background-color: #e2edf9;
			margin: 0 auto;
			margin-top: 5%;
			position: relative;
			border-radius: 10rpx;
			overflow: hidden;
			.iocn{
				aspect-ratio: 1/1;
				height: 100%;
				background-color: #e2edf9;
				border-radius: 0 0 12px 0;
				justify-content: center;
				image{
					width: 100%;
					height: 100%;
					border-radius: 0 0 12px 0;
				}
			}
			.Text{
				width: 90%;
				height: 100%;
				background-color: #f3f8fd;
				display: flex;
				position:absolute;
				z-index: 998;
				top: 0;
				right: 0;
				border-radius: 20rpx 0 0 0 ;
				.text{
					width: 85%;
					height: 100%;
					font-size: 25rpx;
					margin-left: 5%;
					line-height: 2.5rem;
				}
				.Text_iocn{
					flex: 1;
					border-color: #ccc;
					aspect-ratio: 1/1;
					background: url('../../static/ioc/broadcast/icon_next_messagenew.png') no-repeat;
					background-position: center;
					background-size: 30rpx;
				}
			}
		}
		.min_banner{
			width: 100%;
			margin: 0 auto;
			margin-top: 5%;
			image{
				width: 95%;
				margin: 0 20rpx;
				height: 100%;
				border-radius: 20rpx;
				aspect-ratio: 1/3;
			}
		}
	}
</style>
