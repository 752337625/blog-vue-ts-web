const mutations={
	 SWITHC_ICON (state:any,isCollapse:boolean):void {
		 state.isCollapse=!isCollapse
	 },
	 SET_USER_IMG(state:any):void{
		 state.imgUrl=sessionStorage.getItem(`imgURL`);
		 state.username=sessionStorage.getItem(`userName`)
	 }
}

 export default mutations