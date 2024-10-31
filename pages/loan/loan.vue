<template>
	<view class="Inquire">
		<NavbarTitle>查询</NavbarTitle>
		
		<z-tabs :list="Inquire" inactive-color='#a8c3fb' active-color='#fff' bg-color="#4a79e0" unit='12rpx'></z-tabs>	
		
		<view class="Moeny">
			<p>贷款总余额(元)</p>
			<p style="font-size: 30px;">7,000,000.00</p>
		</view>
		
		<view class="LoanMoeny">
			<view class="LoanMoeny-title">
				<span>个人经营抵押快贷</span>
				<span style="color: #9c9c9c; font-size: 13px;" >（4400***9724）</span>
			</view>
			<view class="LoanMoeny-body">
				<view class="LoanMoeny-number">
					<p>贷款余额(元)</p>
					<p style="font-size: 19px; color: #5179ce;">7,000,000.00</p>
				</view>
				<view class="LoanMoeny-Day">
					<p>开户日 <span class="Day">2024/07/24</span></p>
					<p>到期日 <span class="Day">2029/07/24</span></p>
				</view>
			</view>
		</view>
		
		<view class="foot">
			已经全部加载全部
		</view>
	</view>
</template>

<script>
	import NavbarTitle from '../../components/NavbarTitle.vue';
	export default {
		data() {
			return {
				Inquire:['余额','我的申请','明细']
			};
		},
		components:{
			NavbarTitle
		}
	}
</script>

<style lang="scss" scoped>
	.Inquire{
		background-color: #f6f6f6;
		height: 100vh;
		.Moeny{
			width: 100%;
			height: 100px;
			background:#4a79e0;
			color: white;
			line-height: 40px;
			padding: 10px 0 0 40px;
		}
		.LoanMoeny{
			width: 95%;
			height: 120px;
			background: white;
			border-radius:10px;
			margin: 10px auto;
			.LoanMoeny-title{
				// width: 100%;
				height: 40%;
				// border: 1px solid;
				font-weight: bold;
				font-size: 17px;
				display: flex;
				align-items: center;
				padding-left: 30px;
			}
			.LoanMoeny-body{
				width: 100%;
				display: flex;
				.LoanMoeny-number{
					color: #a7a7a7;
					width:50%;
					padding-left: 30px;	
				}
				.LoanMoeny-Day{
					width: 50%;
					border-left: 1px solid #ccc;
					padding-left: 20px;
					color: #a8a8a8;
					font-size: 17px;
					.Day{
						color: black;
					}
				}
			}
		}
		.foot{
			width: 100%;
			display: flex;
			justify-content: center;
			color: #a8a8a9;
			font-size: 14px;
		}
	}
</style>
