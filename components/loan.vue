<template>
	<view class="loan">
		<view class="loan-money">
			
			<view class="loan-title">
				<text class="title">
					{{list.name}}
				</text>
				<view class="min-title">
					{{list.title}}
				</view>
			</view>
			
			
			<view class="loan-content">
				<view class="money">
					<view class="num">
						{{list.money}}
					</view>
					<view class="str">
						额度单户最高(元)
					</view>
				</view>
				<view class="percentage">
					<view class="num">
						{{list.percentage}}<text style="color: #ccc; font-size: 12px;">起</text>
					</view>
					<view class="str">
						年化利率
					</view>
				</view>
				<view class="btn">
					<view class="botton">
						立即申请
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"loan",
		data() {
			return {
				
			};
		},
		props:{
			list:[Array,Object]
		},

	}
</script>

<style lang="scss" scoped>
	.loan{
		width: 100%;
		margin-top:2% ;
		.loan-money{
			width: 95%;
			height: 125px;
			margin: 0 auto;
			background: #f9fafc;
			border-radius: 10px;
			padding: 10rpx 0;
			.loan-title{
				width: 100%;
				height: 40%;
				display: flex;
				align-items: center;
				.title{
					margin-left: 20px;
					font-size: 35rpx;
					font-weight: bold;
					letter-spacing: 1rpx;
				}
				.min-title{
					padding: 10rpx;
					text-align: center;
					margin-left: 5px;
					font-size: 25rpx;
					align-items: center;
					border-radius:0 100px 100px 100px ;
					border-color: #ebba9a;
					color: #dc8856;
					border: 1px solid;
				}
			}
			.loan-content{
				width: 100%;
				display: flex;
				.money{
					width: 40%;
					display: flex;
					flex-wrap: wrap;
					align-items: center;
					.num{
						width: 80%;
						margin: 0 auto;
						font-size: 40rpx;
						padding: 20rpx 0;
						color: #2f59b9;
					}
					.str{
						width: 80%;
						font-size: 25rpx;
						margin: 0 auto;
						font-size: 25rpx;
						color: #b8b9bb;
					}
				}
				
				.percentage{
					width: 22%;
					display: flex;
					flex-wrap: wrap;
					align-items: center;
					margin: 0 20rpx;
					.num{
						width: 80%;
						margin: 0 auto;
						font-size: 35rpx;
						padding: 20rpx 0;
						color: #2f59b9;
					}
					.str{
						width: 80%;
						font-size: 25rpx;
						margin: 0 auto;
						font-size: 25rpx;
						color: #b8b9bb;
					}
				}
				
				.btn{
					flex: 1;
					display: flex;
					align-items: center;
					justify-content: center;
					.botton{
						width: 180rpx;
						height: 80rpx;
						display: flex;
						align-items: center;
						justify-content: center;
						background: #4c79de;
						border-radius: 40rpx;
						color: #f9fafc;
						font-size: 28rpx;
					}
				}
			}
			
		}
	}
</style>