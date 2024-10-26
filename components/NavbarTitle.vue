<template>
	<view>
		<view class="navbar-title">
			<view class="occupy">
				
			</view>
			<text class="text-title"><slot></slot></text>
		</view>
	</view>
</template>

<script>
	export default {
		
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	.navbar-title{
		width: 100%;
		height: 100px;
		background-color: #1296db;
		.occupy{
			width: 100%;
			height: 60%;
		}
		.text-title{
			width: 100%;
			height: 40%;
			font-size: 16px;
			color: white;
			display: inline-block;
			text-align: center;
		}
	}
</style>