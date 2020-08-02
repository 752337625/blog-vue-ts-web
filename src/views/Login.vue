<template>
	<div class="center login-content">
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
					<el-button type="primary" @click="submitForm('ruleForm')" size="medium" :loading="loading">登录</el-button>
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
			IP: '172.16.10.11',
			address: '朝阳区东方国信'
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
		mounted( ) {
			if ( this.userInfo.userName && this.userInfo.password ) {
				// this.submitForm('ruleForm')
			}
		};
		submitForm( formName: string ): void {
			( this.$refs[ formName ] as any ).validate( ( valid: boolean ) => {
				if ( !valid ) return false;
				loginMethod( this.userInfo, this.rememberMe ).then( ( res: any ) => {
					if ( res.data.statue != 200 ) return this.$message.error( res.data.message );
					if ( this.rememberMe ) {
						this.RememberMe( );
					}
					window.localStorage.setItem( 'token', res.data.token )
					this.$router.push( "/Home" );
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
