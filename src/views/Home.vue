<template>
	<div class='center Home-content'>
		<header>
			<m-header :userinfo="userinfo"></m-header>
		</header>
		<section class="Home-section">
			<m-aside :menuList='menuList'></m-aside>
			<router-view></router-view>
		</section>
	</div>
</template>
<script lang="ts">
	import {
		Component,
		Vue,
	} from "vue-property-decorator";
	import {
		menuSelectList
	} from '@/api/home'
	@Component( {
		components: {
			'MHeader': ( ) => import( '@/components/MHeader.vue' ),
			'MAside': ( ) => import( '@/components/MAside.vue' ),
			'MArticle': ( ) => import( '@/components/MArticle.vue' )
		}
	} )
	export default class Home extends Vue {
		private username: string = '';
		private menuList:object[]=[];
		private userinfo:object={};
		beforeCreate( ): void {
			menuSelectList( ).then( ( res: any ) => {
				if(res.data.statue!==200)return this.$message.error(res.data.message)
				this.menuList=res.data.data||[];
				this.userinfo=res.data.user||{}
			} ).catch( ( err: any ) => {
				console.log( err )
			} )
		};
		mounted( ) {};
	}
</script>
<style lang="less" scoped="scoped">
	.Home-content {
		background-color: #F2F3F7;

		.Home-section {
			width: 100%;
			height: calc(100% - 50px);
			display: flex;
		}
	}
</style>
