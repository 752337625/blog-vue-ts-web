<template>
	<div class='center Home-content'>
		<header>
			<m-header></m-header>
		</header>
		<section class="Home-section">
			<m-aside></m-aside>
			<router-view></router-view> 
			<!-- <m-article></m-article> -->
		</section>
	</div>
</template>
<script lang="ts">
	import {
		Component,
		Vue,
	} from "vue-property-decorator";
	@Component( {
		components: {
			'MHeader': ( ) => import( '@/components/MHeader.vue' ),
			'MAside': ( ) => import( '@/components/MAside.vue' ),
			'MArticle': ( ) => import( '@/components/MArticle.vue' )
		}
	} )
	export default class Home extends Vue {
		
		
		
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
