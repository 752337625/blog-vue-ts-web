<template>
	<header class='m-header' :style="{ backgroundColor:activeColor,fontSize: fontSize + 'px' }">
		<div class="m-header-left">
			<router-link to="/Home">博客后台管理系统</router-link>
		</div>
		<div class="m-header-left" :style="{textAlign: 'left',fontSize: '35px',color: '#fff'}" @click="switchIcon">
			<i :class="[isCollapse?'el-icon-s-unfold':'el-icon-s-fold']" :style="{cursor:'pointer'}"></i>
		</div>
		<div class="m-header-right">
			<div class="right-img">
				<el-image :style="{boxSizing: 'border-box',width:'39px',height: '39px',borderRadius: '50%', marginTop: '5px',border:'2px solid #E6A23C',}"
				 :src="userinfo.imgURL" :preview-src-list="srcList" lazy fit="cover">
				</el-image>
			</div>
			<div class="right-fun">
				<el-dropdown trigger="click" placement="bottom-start" @command="handleCommand">
					<span class="el-dropdown-link">{{userinfo.userName}}<i class="el-icon-arrow-down el-icon--right"></i>
					</span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item command="1">设置设置设置设置设置设置设置</el-dropdown-item>
						<el-dropdown-item command="2">主题设置设置设置设置设置设置设置设置</el-dropdown-item>
						<el-dropdown-item command="3">退出</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</div>
		</div>
	</header>
</template>
<script lang="ts">
	import {
		Component,
		Vue,
		Prop
	} from "vue-property-decorator";
	import {
		loginOutMethod
	} from "@/api/login"
	import {
		State,
		Mutation
	} from 'vuex-class'
	@Component( {} )
	export default class MHeader extends Vue {
		@Prop({type:Object}) userinfo:object;
		@State( 'isCollapse' ) isCollapse: boolean;
		//private username: string = window.sessionStorage.getItem( `userName` ) || '';
		//private imgUrl: string = window.sessionStorage.getItem( `imgURL` ) || '';
		private activeColor: string = '#5654F3';
		private fontSize: number = 16;
		private srcList: string[ ] = [ window.sessionStorage.getItem( `imgURL` ) || '' ];
		@Mutation( 'SWITHC_ICON' ) SWITHC_ICON: any;
		switchIcon( ) {
			this.SWITHC_ICON( this.isCollapse )
		};
		handleCommand( command: string | number ): void {
			switch ( command ) {
				case '1':
					this.$message( 'click on item ' + command );
					break;
				case '2':
					this.$message( 'click on item ' + command );
					break;
				case '3':
					this.loginOut( );
					break;
				default:
					this.$message( 'click on item wo' );
					break;
			}
		};
		loginOut( ) {
			loginOutMethod( ).then( ( res: any ) => {
				if ( res.data.statue != 200 ) return this.$message.error( res.data.message );
				this.$router.replace( "/Login" );
			} )
		};
	}
</script>
<style lang="less" scoped="scoped">
	.m-header-item() {
		display: inline-block;
		height: 52px;
		line-height: 52px;
	}

	.m-header {
		height: 50px;
		border-bottom: 2px solid #1AE8EE;
		box-sizing: content-box;

		.m-header-left {
			float: left;
			width: 200px;
			text-align: center;
			.m-header-item();

			.router-link-active {
				color: #FFFFFF;
			}
		}

		.m-header-right {
			float: right;
			.m-header-item();

			.right-img {
				width: 80px;
				height: 100%;
				float: left;
				text-align: center;
			}

			.right-fun {
				float: right;
				text-align: center;
				margin-right: 17px;
			}
		}
	}

	.el-dropdown-link {
		cursor: pointer;
		color: #FFFFFF;
	}

	.el-icon-arrow-down {
		font-size: 12px;
	}
</style>
