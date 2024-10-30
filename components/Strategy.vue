<template>
	<view class="Strategy">
		<view style="width: 100%; display: flex;">
			
			<view class="Strategy-content" v-for="item in 2" :key="item">
					<view class="images">
						<image src="../static/banner/Strategy.png" mode=""></image>
					</view>
					<view class="text">
						<text>警惕不法贷款中介，这些说法不要听！不要信</text>、
						
						<view  style="text-align: right; color: #ccc; font-family: 黑体; font-size: 12px;">
							122752人学过
						</view>
					</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"Strategy",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
	.Strategy{
		width: 100%;
		aspect-ratio: 2/1;
		margin-top: 20px;
		margin: 0 auto;
		display: flex;
		.Strategy-content{
			width: 50%;
			height: 100%;
			// aspect-ratio: 1/0.8;
			// border: 1px solid;
			
			border-radius: 10px;
			padding: 5px;
			.images{
				width: 100%;
				height: 60%;
				// border: 1px solid;
				border-radius: 10px 10px 0 0;
				overflow: hidden;
				box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
				image{
					border-radius: 10px 10px 0 0 ;
					width: 100%;
					height: 100%;
				}
			}
			.text{
				// margin-top: 5px;
				// margin-left: 5px;
				box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
				font-size: 14px;
				font-family: '黑体';
				font-weight: 500;
				padding: 5px;
				border-radius: 0 0 10px 10px;
			}
		}
	}
</style>