const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const RemovePlugin = require('remove-files-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
	entry: './js/main.js',
	output: {
		path: resolve(__dirname, 'build'),
		filename: 'main.[contenthash].js'
	},
	module: {
		rules: [
			{
				test:/\.scss$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
			},
			{
				test: /\.mp3$/i,
				loader: 'file-loader',
				options: {
					name: 'media/[name].[ext]',
				},
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: resolve(__dirname, 'index.html')
		}),
		new MiniCssExtractPlugin({
			filename: '[name].[contenthash].css',
		}),
		new RemovePlugin({
			before: {
				include: [
					'./build'
				]
			},
		}),
		new BundleAnalyzerPlugin(),
	]
}