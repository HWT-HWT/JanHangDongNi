<template>
	<view class="Disbursement">
		<NavbarTitleVue>支出明细</NavbarTitleVue>
			<view class="Disbursement-title" >
				<view class="title">
					{{DetailsDay.name}}金额
				</view>
				<view class="text">
					￥{{DetailsDay.money}}
				</view>
				<view class="load" v-if="!DetailsDay.istrue">
					<view class="load-content" >
						<view class="load-title">
							本金(元)
						</view>
						<view class="load-money">
							0.00
						</view>
					</view>
					<view class="load-content" >
						<view class="load-title">
							利息(元)
						</view>
						<view class="load-money">
							{{DetailsDay.money}}
						</view>
					</view>
					<view class="load-content" >
						<view class="load-title">
							罚金(元)
						</view>
						<view class="load-money">
							0.00
						</view>
					</view>
				</view>
			</view>
			
			<view class="Expenditure-details">
				<view class="Expenditure-details-list" v-for="(index,vlaue) in DetailsDay.list"  :key="vlaue">
					<view class="name">
						{{vlaue}}
					</view>
					<view class="content">
						{{index}}
					</view>
				</view>
			</view>
			
			<text style="margin-left: 20px;">温馨提示</text>
			<br />
			<text style="font-size: 12px; margin-left: 20px;">此凭证仅供参考</text>
	</view>
</template>

<script>
import NavbarTitleVue from '../../components/NavbarTitle.vue';
	export default {
		data() {
			return {
				DetailsDay:''
			};
		},
		components:{
			NavbarTitleVue
		},
		created() {
			// this.DetailsDay = JSON.parse(localStorage.getItem('DetailsDay'))
			this.DetailsDay = uni.getStorageSync('DetailsDay')
		}
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
}
</style>
