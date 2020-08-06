const mutations={
	 SWITHC_ICON (state:any,isCollapse:boolean):void {
		 state.isCollapse=!isCollapse
	 },
	 SET_USER_IMG(state:any):void{
		 state.imgUrl=sessionStorage.getItem(`imgURL`);
		 state.username=sessionStorage.getItem(`userName`)
	 },
	 SET_USER_ID(state:any,id:number){
		 state.id=id;
	 }
}

 export default mutations