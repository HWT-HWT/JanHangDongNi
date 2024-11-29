export function gologin (url){
	const hasAccount = uni.getStorageSync('account');
	if(hasAccount){
		uni.navigateTo({
			url
		})
	}else{
		uni.navigateTo({
			url:'/pages/login/login'
		})
	}
	
}