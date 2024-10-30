<template>
	<view class="enterprise">
		<NavTab>我的企业</NavTab>
		
		<view class="list">
			<view class="name">
				<view class="text">
					广州友福贸易有限公司
				</view>
				<view class="ioc">
					<image src="../../static/my_iocn/icon_more_nebu_xyoersonal_rymain.png" mode=""></image>
				</view>
			</view>
			<view class="btn">
				<view class="btn-content">
					<button class="mini-btn" type="default" size="mini" style="background: #4a79e0; color: white;">授权</button>
					<button class="mini-btn" type="default" size="mini">一键更新</button>
					<button class="mini-btn" type="default" size="mini">企业维护</button>
				</view>
			</view>
		</view>
		
		<view style="height: 200px;">
			
		</view>
		
		<view class="btn">
			<button class="add" type="primary">+ 创建企业</button>
		</view>
		
		<view class="bg-ioc">
			<image src="../../static/my_iocn/ic_preferred_services.png" mode=""></image>
		</view>
		
		<view class="serve">
			 <view class="serveList">
			 	<view class="text">
			 		<view class="title">
			 			<image src="../../static/ioc/bar/iocn_2.png" mode=""></image>
						<text>精准测额</text>
			 		</view>
					<view class="miniTitle">
						&nbsp; &nbsp; 多为数据 | 企业主 | 企业信息
					</view>
			 	</view>
			 	<view class="ioc">
			 		
			 	</view>
			 </view>
		</view>
	</view>
</template>

<script>
	import NavTab from '@/components/NavbarTitle'

	export default {
		data() {
			return {
				
			};
		},
		components:{
			NavTab
		},
		
	}
</script>

<style lang="scss">
	.enterprise{
		width: 100%;
		background-color: #f7f7f7;
		.list{
			width: 100%;
			height: 100px;
			margin-top: 20px;
			background-color: #fff;
			.name{
				width: 100%;
				height: 50%;
				border-bottom: 1px solid #f8f8f8;
				display: flex;
				.text{
					width: 85%;
					height: 100%;
					// border: 1px solid;
					font-size: 15px;
					display: flex;
					align-items: center;
					padding-left: 10px;
					font-weight: '粗体';
				}
				.ioc{
					flex: 1;
					height: 100%;
					// border: 1px solid;
					display: flex;
					justify-content: center;
					align-items: center;
					image{
						width: 6px;
						height: 12px;
					}
				}
			}
			.btn{
				width: 100%;
				height: 50%;
				display: flex;
				// border: 1px solid red;
				.btn-content{
					width: 100%;
					padding-top: 10px;
					// border: 1px solid red;
					button{
						margin-right: 5px;
						float: right;
						color: #6a87c5;
						background: #fff;
						border-color:#6a87c5;
					}
				}
			}
		}
		.btn{
			.add{
				width: 90%;
				background: #4a79e0;
				border-radius:30px;
			}
		}
		.bg-ioc{
			margin-top: 30px;
			width: 100%;
			height: 25px;
			// border: 1px solid;
			display: flex;
			justify-content: center;
			align-items: center;
			image{
				width: 65%;
				height: 65%;
			}
		}
		.serve{
			width: 100%;
			height: 200px;
			// border: 1px solid;
			margin-top: 20px;
			.serveList{
				width: 90%;
				height: 100px;
				border: 1px solid;
				border-radius:5px;
				margin: 0 auto;
				display: flex;
				.text{
					width: 70%;
					height: 100%;
					border: 1px solid;
					.title{
						width: 100%;
						height: 50%;
						border: 1px solid;
						display: flex;
						align-items: center;
						image{
							width: 25px;
							height: 25px;
							margin: 0 5px 0 10px;
						}
					}
					.miniTitle{
						width: 100%;
						// margin-left:5px;
						// padding-left: 20px;
						border: 1px solid;
						font-size: 12px;
						color: #c6c6c6;
					}
				}
				.ioc{
					flex: 1;
					height: 100%;
					border: 1px solid;
				}
			}
		}
	}
</style>
