<template>
	<view class="Inquire">
		<NavbarTitle>查询</NavbarTitle>
		
		<z-tabs :list="Inquire" inactive-color='#a8c3fb' active-color='#fff' bg-color="#4a79e0" unit='12rpx' @change="secondClick" ></z-tabs>	

		<view v-if="index == 0">
			<view class="Moeny" >
				<p>贷款总余额(元)</p>
				<p style="font-size: 30px;">1,600,000.00</p>
			</view>
			<view class="LoanMoeny">
				<view class="LoanMoeny-title">
					<span>抵押快贷</span>
					<span style="color: #9c9c9c; font-size: 25rpx;" >（4400***0700）</span>
				</view>
				<view class="LoanMoeny-body">
					<view class="LoanMoeny-number">
						<p>贷款余额(元)</p>
						<p style="font-size: 45rpx; color: #5179ce;margin-top: 5rpx;">1,600,000.00</p>
					</view>
					<view class="LoanMoeny-Day">
						<p>开户日 <span class="Day">2024/07/24</span></p>
						<p>到期日 <span class="Day">2029/07/24</span></p>
					</view>
				</view>
			</view>
		</view>
		
		
		<view class="Tow" v-if="index == 1">
			<view class="Details" >
				<view class="name" v-for="(item,index) in TowIndex" :key="index" @click="applyIned(index)">
					<view class="text" style="font-size: 30rpx;padding: 20rpx;">
						{{item}}
					</view>
				</view>
			</view>
			
			<view class="apply" v-if="apply === 0">
				
				<view class="apply-title">
					<view class="apply-title-left">
						抵押快贷
					</view>
					<view class="apply-title-rigth">
						查看详情
					</view>
				</view>
				
				<view style="width: 95%; margin: 20rpx auto;">	
					<span style="color:#a8a8a8;font-size: 25rpx; padding: 20rpx; 0">申请日期</span> <span style="font-size: 28rpx;">2024/05/20</span>
				</view>
				
				<uni-section title="基本用法" type="line" padding >
					<uni-steps :options="list1" :active="active" />
				</uni-section>
			</view>
			
			<view class="LoanMoeny" v-else @click="DisbursementGo">
				<view class="LoanMoeny-title" >
					<span>抵押快贷<span style="color: #9c9c9c; font-size: 25rpx; font-weight: normal;" >（4400***0700）</span> </span>
				
					<span style="color: #5179ce; font-size: 25rpx; margin-right: 30rpx; font-weight: normal;" >已生效 ></span>
				</view>
				<view class="LoanMoeny-body">
					<view class="LoanMoeny-number">
						<p>贷款余额(元)</p>
						<p style="font-size: 45rpx; color: #5179ce;margin-top: 5rpx;">1,600,000.00</p>
					</view>
					<view class="LoanMoeny-Day">
						<span class="Day" style="color:#a8a8a8">申请日期</span>
						<span class="Day">2024/06/21</span>
					</view>
				</view>
			</view>
		</view>
		
		
		<view v-if="index == 2">
			<view class="Details">
				<view class="name" v-for="(item,index) in titleDetails" :key="index" @click="DetailsIndex(index)">
					<view class="text">
						{{item}}
					</view>
					<view class="ioc">
						<image class="ioc-image" src="@/static/myiocn/sanjiaoxing.png" mode=""></image>
					</view>
				</view>
			</view>
			
			<classification :menu="menu" v-if="menu" @change='changeMenu'></classification>
			
			<view class="DetailsDay" v-for="item in DetailsDay " :key="item" @click="Disbursement(item)" v-else>
				<view class="ioc">
					<image class="ioc-image" style="width: 18px; height: 18px;" src="../../static/myiocn/green.png" mode=""></image>
				</view>
				<view class="DayHk">
					<view class="DayHk-day">
						{{item.data}}{{item.week}}
					</view>
					<view class="DayHk-text">
						{{item.name}}
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
				<view class="ioc" >
					<image class="ioc-image" src="@/static/myiocn/icon_more_nebu_xyoersonal_rymain.png" mode=""></image>
				</view>
			</view>
			
		</view>
		
		<view class="foot">
			已经全部加载全部
		</view>
		
	</view>
</template>

<script>
	import NavbarTitle from '@/components/NavbarTitle.vue'
	import classification from "@/components/classification.vue"
	export default {
		data() {
			return {
				Inquire:['余额','我的申请','明细'],
				index:0,
				TowIndex:['申请中','申请成功'],
				titleDetails:['个人经营抵押快贷(44...' ,'还款','近6个月'],
				DetailsDay:[	
					{
						data:'2024/06/21 ',
						money:'1,600,000.00',
						name:'支用',
						week: '星期五',
						list:{
							"支用时间":'2024/06/21 11:19:15',
							'贷款种类':'抵押快贷',
							'凭证号':'102008P061718939954045563',
							'贷款账号':'4400 *** 0700'
						},
						istrue:true
					},
					{
						data:'2024/07/21',
						money:'4532.80',
						name:'还款',
						week: '星期日',
						list:{
							"还款时间":'2024/07/21 02:35:24',
							'贷款种类':'抵押快贷',
							'凭证号':'1082019781721416439791836',
							'贷款账号':'4400 *** 0700',
							'还款账号':'44050149020900002333'
						},
					},
					{
						data:'2024/08/21 ',
						money:'4684.10',
						name:'还款',
						week: '星期三',
						list:{
							"还款时间":'2024/08/21 01:55:14',
							'贷款种类':'抵押快贷',
							'凭证号':'1082013891724091236446786',
							'贷款账号':'4400 *** 0700',
							'还款账号':'44050149020900002333'
						},
					},
					{
						data:'2024/09/21',
						money:'4684.10',
						name:'还款',
						week: '星期六',
						list:{
							"还款时间":'2024/09/21 01:25:18',
							'贷款种类':'抵押快贷',
							'凭证号':'1082018971726771233504158',
							'贷款账号':'4400 *** 0700',
							'还款账号':'44050149020900002333'
						},
					},
					{
						data:'2024/10/21',
						money:'4532.80',
						name:'还款',
						week: '星期一',
						list:{
							"还款时间":'2024/10/21 01:54:29',
							'贷款种类':'抵押快贷',
							'凭证号':'1082016241729368995972612',
							'贷款账号':'4400 *** 0700',
							'还款账号':'44050149020900002333'
						},
					},
					{
						data:'2024/11/21',
						money:'4532.80',
						name:'还款',
						week: '星期四',
						list:{
							"还款时间":'2024/11/26 13:28:59',
							'贷款种类':'抵押快贷',
							'凭证号':'1081970011732594258586503',
							'贷款账号':'4400 *** 0700',
							'还款账号':'44050149020900002333'
						},
					},
				],
				menu:'',
				list1: [
						{
							title: '申请提交'
						}, {
							title: '申请受理'
						}, {
							title: '贷款审批'
						}, {
							title: '业务签约'
						},{
							title: '抵押登记'
						}, {
							title: '发放贷款'
						}
					],
				active: 0,
				apply:0
			};
		},
		components:{
			NavbarTitle,
			classification,
		},
		methods:{
			secondClick(index){
				this.index = index
			},
			Disbursement(item){
					
				uni.clearStorageSync();
			
				uni.setStorageSync('DetailsDay',item)
				
				uni.navigateTo({
					url:'/pages/Disbursement/Disbursement'
				})
			},
			DetailsIndex(index){
				this.menu = index+1
			},
			changeMenu(data){
				this.titleDetails[this.menu-1] = data
				setTimeout(()=>{
					this.menu = ''
				},200)
			},
			applyIned(index){
				console.log(index);
				this.apply = index
			},
			DisbursementGo(){
				uni.navigateTo({
					url:'/pages/DisbursementDatali/DisbursementDatali'
				})
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
			width: 95%;
			height: 30px;
			font-size: 25rpx;
			display: flex;
			.name{
				margin:0 20rpx;
				padding: 0 20rpx;
				height: 100%;
				border-radius: 20px;
				background-color: white;
				display: flex;
				justify-content: center;
				align-items: center;
				.ioc{
					width: 10px;
					height: 28%;
					display: flex;
					align-items: center;
					margin: 0 1px;
					.ioc-image{
						width: 100%;
						height: 100%;
						transform: scale(-1,-1);
					}
				}
			}
			.name:hover{
				color: #4a79e0;
				.ioc-image{
					width: 100%;
					height: 100%;
					transform: scale(1,1);
				}
			}
		}
		.DetailsDay{
			width: 100%;
			height: 60px;
			background-color: white;
			display: flex;
			font-size: 28rpx;
			line-height: 20px;
			margin-bottom: 2px;
			.ioc{
				width: 10%;
				height: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
				.ioc-image{
					width: 10rpx;
					height: 14rpx;
				}
			}
			.DayHk{
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
			height: 150px;
			background: white;
			border-radius:10px;
			margin: 10px auto;
			.LoanMoeny-title{
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
					display: flex;
					flex-wrap: wrap;
					align-items: center;
					font-size: 28rpx;
				}
				.LoanMoeny-Day{
					width: 50%;
					border-left: 1px solid #ccc;
					padding-left: 20px;
					color: #a8a8a8;
					font-size: 30rpx;
					display: flex;
					flex-wrap: wrap;
					align-items: center;
					justify-content: center;
					.Day{
						color: black;
					}
				}
			}
		}
		.Tow{
			width: 100%;
			.apply{
				width: 95%;
				// height: 251rpx;
				padding: 20rpx 0;
				margin: 0 auto;
				border-radius: 20rpx;
				background-color: #fff;
				.apply-title{
					width: 90%;
					height: 50%;
					// border: 1px solid;
					margin: 0 auto;
					display: flex;
					align-items: center;
					justify-content: space-between;
					.apply-title-left{
						// padding: 20rpx;
						display: flex;
						justify-content: center;
						align-items: center;
						font-size: 35rpx;
						font-weight: bold;
						// letter-spacing: 1rpx;
					}
					.apply-title-rigth{
						width: 140rpx;
						height: 20rpx;
						padding: 20rpx;
						background-color: #4a79e0;
						display: flex;
						justify-content: center;
						align-items: center;
						border-radius: 70rpx;
						color: #fff;
						font-size: 23rpx;
					}
				}
			}
			.LoanMoeny{
				width: 95%;
				background: #fff;
				border-radius:10px;
				.LoanMoeny-title{
					height: 40%;
					font-weight: bold;
					font-size: 33rpx;
					display: flex;
					align-items: center;
					justify-content: space-between;
					padding-left: 30px;
				}
				.LoanMoeny-body{
					width: 100%;
					display: flex;
					.LoanMoeny-number{
						color: #a7a7a7;
						width:50%;
						padding-left: 30px;	
						display: flex;
						flex-wrap: wrap;
						align-items: center;
						font-size: 28rpx;
					}
					.LoanMoeny-Day{
						width: 50%;
						border-left: 1px solid #ccc;
						padding-left: 20px;
						color: #a8a8a8;
						font-size: 30rpx;
						display: flex;
						flex-wrap: wrap;
						align-items: center;
						justify-content: center;
						.Day{
							width: 100%;
							color: black;
						}
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
