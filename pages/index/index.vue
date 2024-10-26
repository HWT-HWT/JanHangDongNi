<template>
	<view class="Home">
		<view class="navbar-title">
			<view class="occupy">
				
			</view>
			<view class="navigationBar">
				<view class="navigationBar-positioning">
					<view class="images">
						<image src="../../static/SVG/positioning.svg"></image>
					</view>
					<view class="text">
						<text>--</text>
					</view>
				</view>
				<view class="navigationBar-search">
					<uni-search-bar radius="5" placeholder="代发工资" clearButton="always" cancelButton="none" bgColor="#000" @confirm="search" @cancel="cancel" />
				</view>
				<view class="navigationBar-ioc">
					<view class="ioc_" v-for="item in 3" :key="item">
						
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import NavbarTitle from '@/components/NavbarTitle.vue';
	export default {
		data() {
			return {
				cancel:'123'
			};
		},
		 components: {  
		    NavbarTitle// 注册组件  
		},
		methods:{
			search(){
				console.log(123);
			}
		}
	}
	
</script>

<style lang="scss">
	.Home{
		width: 100%;
		.navbar-title{
			width: 100%;
			height: 100px;
			background-color: #1296db;
			.occupy{
				width: 100%;
				height: 55%;
			}
			.navigationBar{
				width: 100%;
				height: 40%;
				display: flex;
				align-items: center;
				font-size: 12px;
				// border: 1px solid black;
				.navigationBar-positioning{
					width: 15%;
					height: 100%;
					display: flex;
					margin: 0 2%;
					.images{
						flex: 1;
						height: 100%;
						text-align: center;
						line-height: 45px;
						image{
							width: 90%;
							height: 80%;
							color: white;
						}
					}
					.text{	
						width: 50%;
						height: 100%;
						text-align: left;
						line-height:30px;
						color: white;
					}
				}
				.navigationBar-search{
					flex: 1;
					opacity: 0.3;					
					justify-items: center;
					align-items: center;
					// border: 1px solid black;
				}
				.navigationBar-ioc{
					display: flex;
					// border: 1px solid black;
					.ioc_{
						width: 30px;
						height: 30px;
						border: 1px solid black;
						margin: 0 1px;
					}
				}
			}
		}
	}
</style>
