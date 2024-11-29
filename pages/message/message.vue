<template>
	<view class="message">
		<NavTab>企业基本信息</NavTab>
		
		<view class="text" style="margin-top: 10px;">
			<view class="name">
				<text>统一社会信用代码</text>
			</view>
			<view class="num">
				<text>91440101MA59PJFB89</text>
			</view>
		</view>
		<view class="text">
			<view class="name">
				<text>企业法定代表人</text>
			</view>
			<view class="num">
				<text>朱岳鹏</text>
			</view>
		</view>
		<view class="text">
			<view class="name">
				<text>法定代表人身份证</text>
			</view>
			<view class="num">
				<text>4401***0613</text>
			</view>
		</view>
		
		<button type="default" style="">删除企业</button>
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
		}
	}
</script>

<style lang="scss" scoped>
	.message{
		width: 100%;
		height: 100vh;
		background: #f7f7f7;
		.text{
			width: 95%;
			height: 50px;
			background-color: white;
			// border: 1px solid;
			margin:  auto;
			// margin-top:20px;
			margin-bottom: 2px;
			border-radius:5px;
			display: flex;
			.name{
				display: flex;
				// justify-content: center;
				align-items: center;
				width: 40%;
				height: 100%;
				margin-left: 10px;
			}
			.num{
				display: flex;
				// justify-content: center;
				margin-left: 10px;
				font-size: 14px;
				align-items: center;
				flex: 1;
				height: 100%;
				color: #707070;
			}
		}
		button{
			border-radius:20px; 
			height: 75rpx;
			width:90%;
			background: #4a79e0;
			color: white;
			position: relative;
			top: 800rpx;
			display: flex; 
			align-items: center;
			justify-content: center;
			font-size:35rpx;
		}
	}
</style>
