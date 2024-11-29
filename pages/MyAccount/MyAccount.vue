<template>
	<view class="account">
			<NavbarTitleVue style="background-color: #4a79e0;">我的账户</NavbarTitleVue>
			<view>
				<z-tabs :list="AccountList" inactive-color='#d6cccc' active-color='#fff' bg-color="#4b7ae6" unit='12rpx'></z-tabs>	
			</view>
			
			<view class="account-tittle">
				<view class="account-tittle-ioc">
					<image class="account-tittle-image" src="../../static/myiocn/ic_st.png" mode=""></image>
				</view>
				<view class="account-tittle-name">
					账户总览(1)
				</view>
			</view>
			
			<view class="account-Bank">
				<view class="account-Bank-image" >
					
					<image class="Bank-image" src="../../static/myiocn/Snipaste_2024-10-30_23-42-57.png" mode=""></image>
					
					<view class="account-Bank-text">
						
						<view class="Bank-text-title">
							建行账号(2333) <span class="text-title-span">查看账号</span>
						</view>
						
						<view class="text-title-money">
							<view class="balance">
								<view>余额（元）</view>
								<view>0.00</view>
							</view>
							<view class="balance">
								<view>可用余额（元）</view>
								<view>0.00</view>
							</view>
						</view>
						
						<view style="line-height: 40rpx; width: 100%;">
							<p class="" style="font-size: 25rpx; color: #b1b1b4;">
								开户网点
							</p>
							<p class="" style="font-size: 20rpx; color: #757578;">
								中国建设银行股份有限公司广州先烈东路支行
							</p>
						</view>
						
					</view>
					
					<view style="position:absolute;bottom: 5%; left: 40%; z-index: 999; font-size: 25rpx; display: flex; align-items: center;">
						收入分析 <image style="width: 15rpx; height: 20rpx; margin-left: 5rpx;" src="../../static/myiocn/icon_more_nebu_xyoersonal_rymain.png" mode=""></image>
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
				AccountList:['企业','个人']
			};
		},
		components:{
			NavbarTitleVue
		}
	}
</script>

<style lang="scss" scoped>
	.account{
		background-color: #f2f2f2;
		height: 100vh;
		.account-tittle{
			width: 100%;
			height: 60px;
			display: flex;
			.account-tittle-ioc{
				width: 2%;
				height: 100%;
				margin: 0 10px;
				display: flex;
				justify-content: center;
				align-items: center;
				.account-tittle-image{
					width:7px;
					height: 40%;
				}
			}
			.account-tittle-name{
				display: flex;
				justify-content: center;
				align-items: center;
				font-weight: 550;
				font-size: 18px;
			}
		}
		.account-Bank{
			width: 90%;
			height: 400rpx;
			// aspect-ratio: 2/1;
			// border: 1px solid;
			background-color: #ffffff;
			margin: 0 auto;
			display: flex;
			margin-bottom: 20px;
			.account-Bank-image{
				width: 100%;
				height: 100%;
				margin: 0 auto;
				overflow: hidden;
				display: flex;
				flex-wrap: wrap;
				position: relative;
				.Bank-image{
					width: 100%;
					height: 100%;
				}
				.account-Bank-text{
					width: 60%;
					// height: 70%;
					// border: 1px solid;
					position: absolute;
					padding: 45rpx 120rpx;
					.Bank-text-title{
						margin-bottom: 20px;
						font-size: 30rpx;
						// border: 1px solid;
						.text-title-span{
							color: #7082af;
							font-size: 25rpx;
						}
					}
					.text-title-money{
						width: 100%;
						font-size: 24rpx;
						display: flex;
						.balance{
							width: 50%;
							height: 100%;
							// border: 1px solid;
							align-items: center;
							// margin: 5px;
							line-height: 50rpx;
						}
						.AvailableBalance{
							width: 50%;
							height: 100%;
							border: 1px solid;
						}
					}
				}
			}
		}
	}
</style>
