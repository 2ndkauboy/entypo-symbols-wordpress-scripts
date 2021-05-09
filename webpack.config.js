const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
const SVGSpritemapPlugin = require( 'svg-spritemap-webpack-plugin' );

/**
 * Webpack config (Development mode)
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-scripts/#provide-your-own-webpack-config
 */
module.exports = {
	...defaultConfig,
	module: {
		rules: [
			...defaultConfig.module.rules,
			{
				test: /\.svg$/,
				use: [ '@svgr/webpack', 'url-loader' ],
			},
		],
	},
	plugins: [
		...defaultConfig.plugins,

		/**
		 * Generate an SVG sprite.
		 *
		 * @see https://github.com/cascornelissen/svg-spritemap-webpack-plugin
		 */
		new SVGSpritemapPlugin(
			'src/icons/base-icons/*.svg',
			{
				output: {
					filename: 'symbols/entypo-base-icons.svg',
				},
				sprite: {
					prefix: 'entypo-icon-',
					generate: {
						title: false
					},
				},
			}
		),
		new SVGSpritemapPlugin(
			'src/icons/social-icons/*.svg',
			{
				output: {
					filename: 'symbols/entypo-social-icons.svg',
				},
				sprite: {
					prefix: 'entypo-icon-',
					generate: {
						title: false
					},
				},
			}
		),
	],
};
