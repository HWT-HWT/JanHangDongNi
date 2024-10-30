<template>
	<view>
		<view class="navbar-title">
			<view class="occupy">
				
			</view>
			<view class="title">
				
				<view class="iocBack"  @click="chang()">
					<image src="../static/ioc/title/back_icon.png" mode=""></image>
				</view>
				
				<view class="text">
					<view>
						<text class="text-title"><slot></slot></text>
					</view>
				</view>
				
				<view class="ioc">
					
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		
		data() {
			return {
				
			};
		},
		methods:{
			chang(){
				// console.log(123);
				uni.navigateBack()
			}
		}
	}
</script>

<style lang="scss" scoped>
	.navbar-title{
		width: 100%;
		height: 100px;
		background-color: #1296db;
		.occupy{
			width: 100%;
			height: 60%;
		}
		.title{
			width: 100%;
			height: 40%;
			// border: 1px solid;
			display: flex;
			.iocBack{
				width: 10%;
				height: 100%;
				// border: 1px solid;
				display: flex;
				justify-content: center;
				align-items: center;
				image{
					width: 8px;
					height: 16px;
				}
			}
			.text{
				flex: 1;
				height: 100%;
				// border: 1px solid;
				display: flex;
				text-align: center;
				align-items: center;
			
				view{
					margin: 0 auto;
					color: white;
					font-size: 17px;
				}
			}
			.ioc{
				width: 10%;
				height: 100%;
				// border: 1px solid;
			}
		}
		
	}
	
	// .text-title{
	// 	width: 100%;
	// 	height: 40%;
	// 	font-size: 16px;
	// 	color: white;
	// 	display: inline-block;
	// 	text-align: center;
	// }
</style>