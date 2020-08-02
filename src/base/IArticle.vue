<template>
	<article class="m-article">
		<div class='article-item'>
			<div class="item">
				<el-input v-model="blog.articleTitle" type="text" clearable @input="onInput()">
					<template slot="prepend">标题</template>
				</el-input>
			</div>
			<div class="item item-flex">
				<el-input v-model="blog.articleAuthor" type="text" clearable @input="onInput()">
					<template slot="prepend">作者</template>
				</el-input>
				<el-input v-model="blog.articleKeyword" type="text" clearable @input="onInput()">
					<template slot="prepend">关键字</template>
				</el-input>
			</div>
			<div class="item">
				<el-input placeholder="详细描述" v-model="blog.articleDescription" :autosize="{ minRows: 2, maxRows: 4}" maxlength="300"
				 show-word-limit clearable @input="onInput()" type="textarea"><template slot="prepend">描述</template>
				</el-input>
			</div>
			<div class="item item-flex">
				<el-select v-model="blog.articleLabel" placeholder="文章标签" @input="onInput()" clearable multiple>
					<el-option v-for="item in articleLabel" :key="item.value" :label="item.label" :value="item.value">
					</el-option>
				</el-select>
				<el-select v-model="blog.articleClassify" placeholder="分类专栏" @input="onInput()" clearable multiple>
					<el-option v-for="item in classify" :key="item.value" :label="item.label" :value="item.value">
					</el-option>
				</el-select>
				<el-select v-model="blog.articleTypel" placeholder="文章类型" @input="onInput()" clearable>
					<el-option v-for="item in articleTypel" :key="item.value" :label="item.label" :value="item.value">
					</el-option>
				</el-select>
				<el-select v-model="blog.articleRelease" placeholder="发布形式" @input="onInput()" clearable>
					<el-option v-for="item in release" :key="item.value" :label="item.label" :value="item.value">
					</el-option>
				</el-select>
			</div>
			<div class="item item-flex">
				<el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :before-upload="handleBeforeUpload"
				 :file-list="blog.articleImageUrl" list-type="picture" :on-success="handleSuccess" :auto-upload="false" :limit='1'>
					<el-button icon="el-icon-plus"></el-button>
				</el-upload>
			</div>
			<div class="item fieldTest" ref="fieldTest">
				<vue-simplemde v-model="blog.articleContent" :configs='configs' ref="markdownEditor" :sanitize="true" />
			</div>
			<div class="item">
				<el-button type="primary">发布博客</el-button>
				<el-button type="primary">保存草稿</el-button>
				<el-button>返回</el-button>
			</div>
		</div>
	</article>
</template>
<script lang="ts">
	import {
		Component,
		Vue
	} from "vue-property-decorator"
	import {
		Blog
	} from '@/types/index';
	/* import marked from 'marked' */
	@Component( {} )
	export default class IArticle extends Vue {
		private configs: object = {
			autofocus: true,
			status: false,
			spellChecker: false,
			placeholder: '记录每一天',
			renderingConfig: {
				codeSyntaxHighlighting: true,
				highlightingTheme: 'atom-one-light'
			},
			toolbar: [ 'bold', 'italic', 'strikethrough', 'heading', 'quote', 'unordered-list', 'ordered-list', 'table',
				'clean-block', 'link', 'image', 'horizontal-rule', 'code', 'preview', 'side-by-side', 'fullscreen'
			],
			//自定义html解析器
			/* previewRender: function ( plainText:string, preview:string ) { // 异步方法
				console.log(plainText,preview)
				setTimeout( function ( ) {
					preview.innerHTML = customMarkdownParser( plainText )
				}, 250 ) 
				return '加载中...'
			}, */
		};
		private blog: Blog = {
			articleTitle: '',
			articleAuthor: '',
			articleKeyword: '',
			articleDescription: '',
			articleRelease: '',
			articleTypel: '',
			articleLabel: '',
			articleClassify: '',
			articleImageUrl: [ ],
			articleContent: ''
		};
		private imageUrl: object[ ] = [ ];
		private classify: object[ ] = [ {
			value: '前端',
			label: '前端'
		}, {
			value: '后端',
			label: '后端'
		}, {
			value: '移动端',
			label: '移动端'
		}, {
			value: '大数据',
			label: '大数据'
		} ];
		private articleLabel: object[ ] = [ {
			value: '前端',
			label: '前端'
		}, {
			value: '后端',
			label: '后端'
		}, {
			value: '移动端',
			label: '移动端'
		}, {
			value: '大数据',
			label: '大数据'
		} ];
		private release: object[ ] = [ {
			value: '公开',
			label: '公开'
		}, {
			value: '私密',
			label: '私密'
		} ];
		private articleTypel: object[ ] = [ {
			value: '原创',
			label: '原创'
		}, {
			value: '连载',
			label: '连载'
		}, {
			value: '翻译',
			label: '翻译'
		} ];
		mounted( ) {};
		onInput( ): void {
			this.$forceUpdate( );
		};
		handleBeforeUpload( file: any ): boolean {
			return false;
		};
		handleSuccess( response: any, file: any, fileLis: any ): void {
			let articleImageUrl = URL.createObjectURL( file )
			this.blog.articleImageUrl = [ {
				name: file.name,
				url: articleImageUrl
			} ]
		};
		saveArticle( ) {
			console.log( this.blog )
		}
	}
</script>
<style lang="less" scoped="scoped">
	@import '~simplemde/dist/simplemde.min.css';

	.m-article {
		.article-item {
			padding: 10px 15px 0 15px;

			.item {
				margin-top: 15px;
			}

			.item-flex {
				display: flex;
				justify-content: space-between;
			}
		}

		::-webkit-scrollbar-track {
			/*滚动条里面轨道*/
			border-radius: 5px;
			background-color: #CCCCCC;
		}
	}
</style>
