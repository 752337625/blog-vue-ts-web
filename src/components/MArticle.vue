<template>
	<article class="m-article">
		<router-view></router-view>
	</article>
</template>
<script lang="ts">
	import {
		Component,
		Vue
	} from "vue-property-decorator";
	@Component( {} )
	export default class MArticle extends Vue {}
</script>
<style lang="less" scoped="scoped">
	.m-article {
		width: 100%;
		box-sizing: border-box;
		margin-top: 15px;
		margin-left: 15px;
		margin-right: 15px;
		margin-bottom: 10px;
		overflow-y: auto;
		overflow-x: hidden;
	}
</style>
