<template>
	<view class="classification">
		
		<view class="classification-one" v-for="(item,index) in classificationOne" :key="index" @click="classificationBtn(item.id,item.name)" v-if="menu==1" >
			<view class="classificationList">
				{{item.name}}
			</view>
			<view class="icon" v-if="item.active">
				<uni-icons type="checkmarkempty" size="15" color='#4a79e0'></uni-icons>
			</view>
		</view>

		
		<view  v-if="menu==2">
			<view class="classification-one" v-for="item in classificationTow" :key="item.id" @click="classificationTowBtn(item.id,item.name)" >
				<view class="classificationList">
					{{item.name}}
				</view>
				<view class="icon" v-if="item.active">
					<uni-icons type="checkmarkempty" size="15" color='#4a79e0'></uni-icons>
				</view>
			</view>
		</view>
		
		<view v-if="menu==3">
			<view class="screen" v-for="item in classificationTherr" :key="item.id"    >
				<view class="screen-title">
					{{item.title}}
				</view>
				<view class="screen-box" v-for="sum in item.list" :key="sum.id" @click="classificationTherrBtn(item.id-1,sum.id,sum.name)">
					<view class="screen-box-text">
						{{sum.name}}
					</view>
					<view class="right" v-if="sum.active">
						<uni-icons type="checkmarkempty" size="15" color='#fff'></uni-icons>
					</view>
				</view>
				
			</view>
			<view class="screen-btn" @click="screenbtn">
				确认
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"classification",
		data() {
			return {
				classificationOne:[
					{id:1,name:'抵押快贷440 *** 0700',active:false},
				],
				classificationTow:[
					{id:1,name:'全部',active:false},
					{id:2,name:'支用',active:false},
					{id:3,name:'还款',active:false},
				],
				classificationTherr:[
					{
						id:1,
						title:'快速筛选',
						list:[
								{id:1,name:'本日',active:false},
								{id:2,name:'本周',active:false},
								{id:3,name:'本月',active:false},
								{id:4,name:'近3个月',active:false},
								{id:5,name:'近6个月',active:false},
							],
					},
					{
						id:2,
						title:'日前筛选',
						list:[
								{id:1,name:'开始时间',active:false},
								{id:2,name:'结束时间',active:false},
							],
					}
				]
			};
		},
		methods:{
			classificationBtn(id,name){
				this.classificationOne.map(item=>item.active=false)
				this.classificationOne.find(item=>item.id === id).active = !this.classificationOne.find(item=>item.id === id).active
				this.$emit('change',name)
			},
			classificationTowBtn(id,name){
				this.classificationTow.map(item=>item.active=false)
				this.classificationTow.find(item=>item.id === id).active = !this.classificationTow.find(item=>item.id === id).active
				this.$emit('change',name)
			},
			classificationTherrBtn(Fid,id,name){
				
				console.log(Fid);
				if(Fid===1){
					this.classificationTherr[Fid].list.map(item=>item.active = false)
					this.classificationTherr[Fid].list.find(item=>item.id===id).active = !this.classificationTherr[Fid].list.find(item=>item.id===id).active
					return
				}
				this.classificationTherr[Fid].list.map(item=>item.active = false)
				this.classificationTherr[Fid].list.find(item=>item.id===id).active = !this.classificationTherr[Fid].list.find(item=>item.id===id).active
				this.$emit('change',name)
			},
			screenbtn(){
				this.$emit('change','开始时间-结束时间')
			}
		},
		props:{
			menu:{
				type:[String,Number]
			}
		},
	}
</script>

<style lang="scss">
.classification{
	width: 100%;
	background-color: #fff;
	.classification-one{
		width: 95%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 25rpx;
		.classificationList{
			width: 90%;
			font-size: 25rpx;
		}
		.classificationList:hover{
			color: #4a79e0;
		}
		.icon{
			width: 10%;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
	.screen{
		width: 95%;
		// margin: 0 auto;
		display: flex;
		flex-wrap: wrap;
		.screen-title{
			width: 95%;
			margin: 20rpx auto;
			display: flex;
			align-items: center;
		}
		.screen-box{
			display: flex;
			align-items: center;
			flex-wrap: wrap;
			position: relative;
			margin-left: 5rpx;
			padding-bottom: 20rpx;
			.screen-box-text{
				border: 1px solid #c8c8c8;
				padding: 10rpx 50rpx;
				border-radius: 30rpx;
				color: #545454;
				margin: 10rpx 20rpx;
				font-size: 25rpx;
			}
			.screen-box-text:hover{
				border: 1px solid #4a79e0;
				padding: 10rpx 50rpx;
				border-radius: 30rpx;
				color: #4a79e0;
				margin: 10rpx 20rpx;
				font-size: 25rpx;
			}
			.right{
				position: absolute;
				top: 5rpx;
				right: 20rpx;
				// border: 1px solid;
				display: flex;
				align-items: center;	
				border-radius: 50rpx;
				background-color: #4a79e0;
			}
		}
	}
	.screen-btn{
		width: 100%;
		height: 85rpx;
		background-color: #4a79e0;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #fff;
		font-size: 30rpx;
	}
}
</style>