<template>
	<div class="center error-content"></div>
</template>
<script lang="ts">
	import {
		Component,
		Vue,
	} from "vue-property-decorator";
	@Component( {
		components: {}
	} )
	export default class EPage extends Vue {}
</script>
<style lang="less" scoped="scoped">
	.error-content {
		background-image: url("../assets/img/404.jpg");
		//background-size: 100%;
		background-repeat: no-repeat;
		background-position: center;
	}
</style>
