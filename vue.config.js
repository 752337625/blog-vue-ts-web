const path = require( "path" );
const sourceMap = [ 'production', 'test' ].includes( process.env.NODE_ENV )
module.exports = {
	 css: {
		 //是否使用css分离插件 ExtractTextPlugin
		extract: sourceMap,
		//开启 CSS source maps?
		sourceMap: false,
		//此项设置为false会影响element-ui引入时样式失效
		requireModuleExtension: true,
		//css预设器配置项
		 /* loaderOptions: {
			css: {
				// 这里的选项会传递给 css-loader
				importLoaders: 1,
			},
			less: {
				// 这里的选项会传递给 postcss-loader
				importLoaders: 1,
			}
		} */ 
	}, 
	 chainWebpack: config => {
		config.resolve.symlinks( true )
	},
	configureWebpack: config => {},
	productionSourceMap: false,
	//PWA 插件相关配置s
	pwa: {},
	// 第三方插件配置
	pluginOptions: {} 
};
