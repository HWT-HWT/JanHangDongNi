<template>
	<view class="Disbursement">
		<NavbarTitleVue>贷款详情</NavbarTitleVue>
			<view class="Disbursement-title" >
				<view class="title">
					可支用额度
				</view>
				<view class="text">
					￥0.00
				</view>
				<view class="load" v-if="!DetailsDay.istrue">
					<view class="load-content" >
						<view class="load-title">
							年化利率
						</view>
						<view class="load-money">
							3.4%
						</view>
					</view>
					<view class="load-content" >
						<view class="load-title">
							已用额度(元)
						</view>
						<view class="load-money">
							1,600,000.00
						</view>
					</view>
					<view class="load-content" >
						<view class="load-title">
							贷款额度(元)
						</view>
						<view class="load-money">
							0.00
						</view>
					</view>
				</view>
			</view>
			
			<view class="Expenditure-details">
				<view class="footList">
					<view class="footList-li" style="border-bottom: 1rpx solid #ccc;">
						<view class="footList-li-left" style="border-left: 6rpx solid #4d7bd9; ">
							基本信息
						</view>
					</view>
				</view>
				<view class="Expenditure-details-list" v-for="(index,vlaue) in list"  :key="vlaue">
					<view class="name">
						{{vlaue}}
					</view>
					<view class="content">
						{{index}}
					</view>
				</view>
			</view>
			
			<view class="footList">
				<view class="footList-li">
					<view class="footList-li-left">
						支用明细
					</view>
					<view class="footList-li-rigth">
						<image src="../../static/myiocn/icon_more_nebu_xyoersonal_rymain.png" mode=""></image>
					</view>
				</view>
			</view>
			
			<view class="footList">
				<view class="footList-li">
					<view class="footList-li-left">
						还款明细
					</view>
					<view class="footList-li-rigth">
						<image src="../../static/myiocn/icon_more_nebu_xyoersonal_rymain.png" mode=""></image>
					</view>
				</view>
			</view>
	</view>
</template>

<script>
import NavbarTitleVue from '../../components/NavbarTitle.vue';
	export default {
		data() {
			return {
				DetailsDay:'',
				list:{
					"借款期限":'36个月',
					'到期日':'2027-06-21',
					'借款人':'广州市智成毅创商务有限公司',
					'贷款账号':'4400 *** 0700',
					"还款方式":'随借随还',
					'贷款状态':'正常',
				},
			};
		},
		components:{
			NavbarTitleVue
		},
	}
</script>

<style lang="scss">
.Disbursement{
	width: 100%;
	height: 100vh;
	background-color: #f6f6f6;
	.Disbursement-title{
		width: 100%;
		// height: 175px;
		background: white;
		display: flex;
		flex-wrap: wrap;
		padding: 20px 0;
		// border: 1px solid;
		.title{
			// margin-top: 20px;
			width: 100%;
			text-align: center;
			color: #4a79e0;
			font-size: 14px;
		}
		.text{
			height: 50%;
			width: 100%;
			margin: 20px 0;
			display: flex;
			align-items: center;
			justify-content: center;
			color: #4a79e0;
			font-size: 26px;
		}
		.load{
			width: 100%;
			height: 75px;
			padding: 0 20px;
			display: flex;
			justify-content:space-between;
			.load-content{
				// width: 33%;
				height: 100%;
				// border: 1px solid red;
				margin-left: 10px;;
				
				.load-title{
					height: 100%;
					height: 50%;
					// border: 1px solid red;
					display: flex;
					// justify-content: center;
					color: #a2a2a2;
					align-items: center;
				}
				.load-money{
					height: 100%;
					height: 50%;
					// border: 1px solid red;
					display: flex;
					align-items: center;
					font-weight: bold;
				}
			}
		}
	}
	.Expenditure-details{
		width: 100%;
		// height: 150px;
		background-color: white;
		margin-top: 5px;
		margin-bottom: 10px;
		.Expenditure-details-list{
			width: 100%;
			// height: 22%;
			// border: 1px solid;
			display: flex;
			padding:10px;
			align-items: center;
			.name{
				width: 40%;
				height: 100%;
				// border: 1px solid;
				font-size: 28rpx;
				display: flex;
				align-items: center;
				color: #a2a2a2;
			}
			.content{
				width: 50%;
				height: 100%;
				// border: 1px solid;
				font-size: 26rpx;
				display: flex;
				align-items: center;
			}
		}
	}
	.footList{
		width: 100%;
		height: 75rpx;
		// border: 1px solid;
		margin-bottom: 20rpx;
		background-color: #fff;
		.footList-li{
			width: 92%;
			height: 75rpx;
			// border: 1px solid;
			margin: 0 auto;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.footList-li-left{
				font-size: 28rpx;
				font-weight: bold;
				border-left: 6rpx solid #597cc0;
				padding-left: 10rpx;
			}
			.footList-li-rigth{
				image{
					width: 15rpx;
					height: 25rpx;
				}
			}
		}
	}
}
</style>
