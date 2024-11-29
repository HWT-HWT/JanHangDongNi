<template>
		<view class="image-container">
				<image src="@/static/myiocn/login_1.png" mode="" class="rotating-shaking-image"></image>
		</view>
</template>

<script>
	export default {
		name:"shake",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	 .image-container {
		overflow: hidden; 
		position: absolute;
		right: 10rpx;
		bottom: 53%;
		z-index: 998;
		.rotating-shaking-image{
			width: 130rpx;
			height: 130rpx;
			animation: rotateShake 0.5s infinite alternate;
		}
		@keyframes rotateShake {
			0%, 100% {
				transform: translateX(0) rotate(0deg);
			}
			25% {
				transform: translateX(-5px) rotate(-10deg);
			}
			50% {
				transform: translateX(5px) rotate(10deg);
			}
			75% {
				transform: translateX(-3px) rotate(-5deg);
			}
		}
	}      
</style>