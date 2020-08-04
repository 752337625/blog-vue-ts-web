<template>
	<div class="center login-content">
		<div>
			<a href="https://github.com/752337625" class="github-corner" target="_blank" title="Follow me on GitHub" aria-label="Follow me on GitHub">
				<svg width="70" height="70" viewBox="0 0 250 250" style="fill:#008000; color:#fff; position: absolute; top: 0; border: 0; right: 0;"
				 aria-hidden="true">
					<path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
					<path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
					 fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path>
					<path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
					 fill="currentColor" class="octo-body"></path>
				</svg>
			</a>
		</div>
		<div class="login-item">
			<el-form :model="userInfo" :rules="rules" ref="ruleForm" size="mini">
				<el-form-item prop="userName">
					<el-input v-model="userInfo.userName" prefix-icon="iconfont iconuser_login" placeholder="用户名" autocomplete="on"
					 clearable></el-input>
				</el-form-item>
				<el-form-item prop="password">
					<el-input v-model="userInfo.password" prefix-icon="iconfont iconpass" show-password placeholder="密码" autocomplete="on"
					 clearable></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="submitForm('ruleForm')" size="medium" :loading="loading" :style="{width:'110px'}">登录</el-button>
					<el-checkbox v-model="rememberMe" style="float: right;line-height: 35.6px;">记住密码</el-checkbox>
				</el-form-item>
				<el-form-item style="text-align: center;">
					<div class="third-login">
						<span class="third-login-item">———— </span>
						<span class="third-login-item">第三方登陆</span>
						<span class="third-login-item">————</span>
					</div>
					<div class="third-login-icon">
						<a class="qzone"></a>
						<a class="wechat"></a>
						<a class="weibo"></a>
					</div>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>
<script lang="ts">
	import {
		Component,
		Vue,
	} from "vue-property-decorator";
	import {
		userInfo
	} from "@/types/index";
	import {
		loginMethod
	} from "@/api/login";
	@Component( {
		components: {}
	} )
	export default class Login extends Vue {
		private rememberMe: boolean = true;
		private loading: boolean = false;
		private userInfo: userInfo = {
			userName: ( < any > window ).BLOGUSERNAME,
			password: ( < any > window ).BLOGPASSWORD,
		};
		rules: object = {
			userName: [ {
				required: true,
				min: 3,
				max: 5,
				message: "长度在 3 到 5 个字符",
				trigger: "blur"
			} ],
			password: [ {
				required: true,
				min: 6,
				max: 16,
				message: "长度在 6到 16个字符",
				trigger: "blur"
			} ]
		};
		beforeCreate( ): void {
			document.cookie.split( ';' ).forEach( function ( item ) {
				if ( item.trim( ).indexOf( "BLOGUSERNAME" ) > -1 ) {
					( < any > window ).BLOGUSERNAME = item.trim( ).substring( 13 )
				} else if ( item.trim( ).indexOf( "BLOGPASSWORD" ) > -1 ) {
					( < any > window ).BLOGPASSWORD = item.trim( ).substring( 13 )
				}
			} )
		};
		mounted( ) {};
		submitForm( formName: string ): void {
			( this.$refs[ formName ] as any ).validate( ( valid: boolean ) => {
				if ( !valid ) return false;
				loginMethod( this.userInfo, this.rememberMe ).then( ( res: any ) => {
					if ( res.data.statue != 200 ) return this.$message.error( res.data.message );
					if ( this.rememberMe ) {
						this.RememberMe( );
					}
					window.sessionStorage.setItem( 'userName', res.data.data.userName );
					window.sessionStorage.setItem( 'imgURL', res.data.data.imgURL );
					window.localStorage.setItem( 'token', res.data.token )
					this.$router.push( {
						name: 'Home'
					} );
				} ).catch( ( err: any ) => {
					this.$router.push( "/EPage" );
					console.log( err )
				} )
			} )
		};
		RememberMe( ) {
			let date = new Date( new Date( ).getTime( ) + 1000 * 60 * 60 * 24 * 7 )
			document.cookie = 'BLOGUSERNAME=' + this.userInfo.userName + ";expires=" + date[ 'toUTCString' ]( ) + ";path=";
			document.cookie = 'BLOGPASSWORD=' + this.userInfo.password + ";expires=" + date[ 'toUTCString' ]( ) + ";path=";
		};
	}
</script>
<style lang="less" scoped="scoped">
	@import '../assets/css/variable';

	.login-content {
		height: 100%;
		width: 100%;
		background-image: url('../assets/img/bg.jpg');
		background-position: center;
		background-repeat: no-repeat;
		background-size: 100% 100%;

		.login-item {
			box-sizing: border-box;
			width: 300px;
			height: 300px;
			padding: 18px 18px;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-150px, -150px);
			background-color: #fff;
			opacity: 0.8;

			.el-form-item {
				//background-color: #222222;
			}

			.el-form-item--mini.el-form-item,
			.el-form-item--small.el-form-item {
				margin-bottom: 30px;
			}

			.third-login {
				display: flex;
				justify-content: center;

				.third-login-item {
					&:nth-child(2) {
						letter-spacing: 4px;
					}
				}
			}

			.third-login-icon {
				display: flex;
				justify-content: space-around;

				a {
					width: 48px;
					height: 48px;
					display: inline-block;
					background-repeat: no-repeat;
					background-size: 100%;
				}

				.weibo {
					background-image: url('../assets/img/weibo@2x.png');
				}

				.qzone {
					background-image: url('../assets/img/qq@2x.png');
				}

				.wechat {
					background-image: url('../assets/img/weixin@2x.png');
				}
			}
		}
	}
</style>
