const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const RemovePlugin = require('remove-files-webpack-plugin');

module.exports = {
	entry: resolve(__dirname, 'js', 'index.js'),
	output: {
		path: resolve(__dirname, 'build'),
		filename: '[name].[contenthash].js'
	},
	module: {
		rules: [
			{
				test:/\.scss$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
			},
			{
				test: /\.(mp3|mp4)$/i,
				loader: 'file-loader',
				options: {
					name: 'media/[name].[ext]',
				},

			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
					{
						loader: `img-optimize-loader`,
						options: {
							name: 'media/[name].[ext]',
							compress: {
								mode: "high",
								webp: false,
								gifsicle: true,
								disableOnDevelopment: false,
							},
						},
					}
				]
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
	]
}