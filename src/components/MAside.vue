<template>
	<aside class='m-aside' :style="{backgroundColor:actiovColor}">
		<el-menu :collapse="isCollapse" :unique-opened="uniqueOpened" default-active="/Home/IArticle" class="el-menu-vertical-demo"
		 router>
			<el-submenu v-for="(item,key) in menuList" :index="item.menuUrl" :key="item.id">
				<template slot="title">
					<i :class="item.menuIcon"></i>
					<span slot="title">{{item.menuText}}</span>
				</template>
				<el-menu-item v-for="(children,key) in item.children" :index="children.menuUrl" :key="children.id">
					<i :class="children.menuIcon"></i>
					<span slot="title">{{children.menuText}}</span>
				</el-menu-item>
			</el-submenu>
		</el-menu>
	</aside>
</template>
<script lang="ts">
	import {
		Component,
		Vue,
		Prop
	} from 'vue-property-decorator'
	import {
		State
	} from 'vuex-class'
	@Component( {} )
	export default class MAside extends Vue {
		@Prop( {type: Array,default: function ( ): object[ ] {return [ ]}} ) menuList!: object[ ];
		@State( 'isCollapse' ) isCollapse: boolean;
		private actiovColor: string = "#FFFFFF";
		private uniqueOpened: boolean = true;
	}
</script>
<style lang="less" scoped="scoped">
	.m-aside {
		.el-menu-vertical-demo:not(.el-menu--collapse) {
			width: 200px;
			height: 100%;
		}
	}
</style>
