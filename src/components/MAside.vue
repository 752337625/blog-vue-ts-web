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
		/* private menuList: object[ ] = [ {
			id: '1',
			index: "1",
			text: "系統首頁",
			icon: "el-icon-odometer",
			children: [ ]
		}, {
			id: '2',
			index: "2",
			text: "栏目管理",
			icon: "el-icon-location",
			children: [ ]
		}, {
			id: '3',
			index: "3",
			text: "文章管理",
			icon: "el-icon-document",
			children: [ ]
		}, {
			id: '4',
			index: "4",
			text: "文章列表",
			icon: "el-icon-setting",
			children: [ {
				id: '4-1',
				index: "/Home/IArticle",
				text: "添加文章",
				icon: "el-icon-edit"
			}, {
				id: '4-2',
				index: "/Home/DArticle",
				text: "删除文章",
				icon: "el-icon-delete"
			} ]
		}, {
			id: '5',
			index: "5",
			text: "网站管理",
			icon: "el-icon-setting",
			children: [ ]
		} ]; */
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
