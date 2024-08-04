const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { VueLoaderPlugin } = require('vue-loader')

module.exports = (env) => {
    return {
        mode: env.mode ?? 'development',
        entry: './src/index.js',
        output: {
            filename: 'main.js',
            filename: '[name].[contenthash].js',
            clean: true
        },
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    loader: 'vue-loader'
                },
                // this will apply to both plain `.js` files
                // AND `<script>` blocks in `.vue` files
                {
                    test: /\.js$/,
                    loader: 'babel-loader'
                },
                // this will apply to both plain `.css` files
                // AND `<style>` blocks in `.vue` files
                {
                    test: /\.css$/,
                    use: [
                    'vue-style-loader',
                    'css-loader'
                    ],
                    // exclude: /node_modules/,       
                }, 
                {
                    test: /\.(png|svg|jpg|jpeg|gif)$/i,
                    type: "asset/resource"
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/i,
                    type: 'asset/resource',
                },
            ]
        },
        devServer: {
            port: 3000,
            open: true,
            hot: true,
        },
        plugins: [
            new VueLoaderPlugin(),
            new HtmlWebpackPlugin({
                // title: "Project Title",
                template: "index.html",
                // favicon: "./src/favicon.ico"
            }),
            new MiniCssExtractPlugin({
                filename: 'css/[name].[contenthash:8].css'
            })
        ], 
    }
};

