<template>
	<view class="list" v-for="(item,index) in MyList" :key="index"  @click="change(item.NvaGo)" >
		<view class="ioc">
			<image :src="item.ioc" mode=""></image>
		</view>
		<view class="text">
			{{item.name}}
		</view>
		<view class="point">
			<image src="../static/myiocn/icon_more_nebu_xyoersonal_rymain.png" mode=""></image>
		</view>
		
	</view>
</template>

<script>
	import {gologin} from '@/components/login.js'
	export default {
		name:"My",
		data() {
			return {
				
			};
		},
		props:{
			MyList:{
				type:[Array,Object]
			}
		},
		methods:{
			change(id){
					id === 1 ? gologin('/pages/Enterprise/Enterprise') :''
					if(uni.getStorageSync('account')){
						id === 2 ? this.$emit('open') : '';
					}
					id === 3 ? gologin('/pages/loan/loan') :''
			},
			
		},
	}
</script>

<style lang="scss" scoped>
	.list{
		width: 90%;
		height: 60px;
		// border: 1px solid;
		margin: 0 auto;
		margin-bottom: 20rpx;
		display: flex;
		background-color: #ffffff;
		border-radius: 10px;
		.ioc{
			width: 15%;
			// border: 1px solid;
			height: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			image{
				width: 30px;
				height: 30px;
			}
		}
		.text{
			// border: 1px solid;
			flex:1;
			display: flex;
			// justify-content: center;
			align-items: center;
			font-size: 15px;
		}
		.point{
			width: 10%;
			display: flex;
			align-items: center;
			justify-content: center;
			image{
				width: 5px;
				height: 10px;
			}
		}
	}
</style>