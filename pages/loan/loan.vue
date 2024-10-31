<template>
	<view class="Inquire">
		<NavbarTitle>查询</NavbarTitle>
		
		<z-tabs :list="Inquire" inactive-color='#a8c3fb' active-color='#fff' bg-color="#4a79e0" unit='12rpx' @change="secondClick" ></z-tabs>	

		<view v-if="index">
			
		<view class="Moeny" >
			<p>贷款总余额(元)</p>
			<p style="font-size: 30px;">700,000.00</p>
		</view>
		
			<view class="LoanMoeny">
				<view class="LoanMoeny-title">
					<span>个人经营抵押快贷</span>
					<span style="color: #9c9c9c; font-size: 13px;" >（4400***9724）</span>
				</view>
				<view class="LoanMoeny-body">
					<view class="LoanMoeny-number">
						<p>贷款余额(元)</p>
						<p style="font-size: 19px; color: #5179ce;">700,000.00</p>
					</view>
					<view class="LoanMoeny-Day">
						<p>开户日 <span class="Day">2024/07/24</span></p>
						<p>到期日 <span class="Day">2029/07/24</span></p>
					</view>
				</view>
			</view>
		</view>
		
		
		<view v-else> 
			<view class="Details">
				<view class="name">
					个人经营抵押快贷(44...
				</view>
				
				<view class="Repayment">
					还款
				</view>
				
				<view class="Day">
					近6个月
				</view>
			</view>
			
			<view class="DetailsDay" v-for="item in DetailsDay " :key="item">
				<view class="ioc">
					<image class="ioc-image" style="width: 7px; height: 7px;" src="../../static/myiocn/ic_circle_msg.png" mode=""></image>
				</view>
				<view class="DayHk">
					<view class="DayHk-day">
						{{item.data}}
					</view>
					<view class="DayHk-text">
						还款
					</view>
				</view>
				<view class="money">
					<view class="money-text">
						金额
					</view>
					<view class="money-num">
						{{item.money}}
					</view>
				</view>
				<view class="ioc">
					<image class="ioc-image" src="../../static/myiocn/icon_more_nebu_xyoersonal_rymain.png" mode=""></image>
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
				Inquire:['余额','我的申请','明细'],
				index:true,
				DetailsDay:[
					{data:'2024/08/21 星期三',money:'2,030.00'},
					{data:'2024/09/21 星期六',money:'2,030.00'},
					{data:'2024/10/21 星期一',money:'2,030.00'},
				]
			};
		},
		components:{
			NavbarTitle
		},
		methods:{
			secondClick(index){
				index === 2 ? this.index = false : this.index = true
			}
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
		.Details{
			margin: 10px auto;
			width: 100%;
			height: 30px;
			// border: 1px solid;
			font-size: 12px;
			// background-color: #f6f6f6;
			display: flex;
			.name{
				margin-left:20px;
				width: 40%;
				height: 100%;
				border-radius: 20px;
				background-color: white;
				display: flex;
				justify-content: center;
				align-items: center;
			}
			.Repayment{
				width: 20%;
				height: 100%;
				// border: 1px solid;
				border-radius: 20px;
				background-color: white;
				display: flex;
				justify-content: center;
				align-items: center;
				margin-left:10px;
			}
			.Day{
				width: 25%;
				height: 100%;
				// border: 1px solid;
				border-radius: 20px;
				background-color: white;
				display: flex;
				justify-content: center;
				align-items: center;
				margin-left:10px;
			}
		}
		.DetailsDay{
			width: 100%;
			height: 60px;
			background-color: white;
			display: flex;
			font-size: 12px;
			line-height: 20px;
			margin-bottom: 2px;
			.ioc{
				width: 10%;
				height: 100%;
				// border: 1px solid;
				display: flex;
				justify-content: center;
				align-items: center;
				.ioc-image{
					width: 10rpx;
					height: 14rpx;
				}
			}
			.DayHk{
				// height: 100%;
				// border: 1px solid;
				flex: 1;
				padding-top: 10px;
			}
			.money{
				// height: 100%;
				// border: 1px solid;
				padding-top: 10px;
				flex: 1;
				// display: flex;
				text-align: right;
			}
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
			margin-top: 350px;
			display: flex;
			justify-content: center;
			color: #a8a8a9;
			font-size: 14px;
		}
	}
</style>
