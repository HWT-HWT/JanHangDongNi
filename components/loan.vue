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
					<view class="num">{{list.money}}</view>
					<view class="str">额度单户最高(元)</view>
				</view>
				<view class="percentage">
					<view class="num">{{list.percentage}}<text style="color: #ccc; font-size: 12px;">起</text> </view>
					<view class="str">年化利率</view>
				</view>
				<view class="btn">
					<view class="bon">
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
		beforeMount() {
			console.log(this.$props.list);
		}
	}
</script>

<style lang="scss" scoped>
	.loan{
		width: 100%;
		// height: 200px;
		// border:1px solid;
		margin-top:2% ;
		.loan-money{
			width: 95%;
			height: 125px;
			// border:1px solid;
			margin: 0 auto;
			background: #f9fafc;
			border-radius: 10px;
			.loan-title{
				width: 100%;
				height: 40%;
				// border:1px solid;
				font-weight: 700;
				display: flex;
				align-items: center;
				// margin-left: 20%;
				.title{
					margin-left: 20px;
				}
				.min-title{
					width: 100px;
					height: 20px;
					border: 1px solid;
					text-align: center;
					margin-left: 5px;
					font-size: 12px;
					// justify-content: center;
					align-items: center;
					border-radius:0 100px 100px 100px ;
					border-color: #ebba9a;
					color: #dc8856;
				}
			}
			.loan-content{
				width: 100%;
				height: 60%;
				border-radius:20px;
				display: flex;
				.money{
					width: 35%;
					height: 100%;
					view{
						margin-left: 20px;
						
					}
					.num{
						margin-top: 20px;
						flex: 1;
						color: #384e99;
						font-weight: 500;
					}
					.str{
						flex: 1;
						font-size: 11px;
						color: #ccc;
					}
				}
				.percentage{
					width: 30%;
					height: 100%;
					// border: 1px solid;
					view{
						margin-left: 20px;
						
					}
					.num{
						margin-top: 20px;
						flex: 1;
						color: #384e99;
						font-weight: 500;
					}
					.str{
						flex: 1;
						font-size: 11px;
						color: #ccc;
					}
				}
				.btn{
					flex: 1;
					height: 100%;
					// border: 1px solid;
					display: flex;
					justify-content: center;
					align-items: center;
					.bon{
						width:70%;
						height: 50%;
						border: 1px solid;
						border-radius: 20px;
						background-color: #4876de;
						text-align: center;
						line-height: 35px;
						color: white;
						// font-weight: 500;
						font-weight: '黑体';
					}
				}
			}
		}
	}
</style>