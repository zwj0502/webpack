//配置打包css文件
//安装loder
//1.安装 yarn add style-loader css-loader -D

//2.配置loder 

//配置打包less文件
//安装loder
//1.安装 yarn add less-loader  less
//less-loader(识别less文件)，less的作用将less文件转成css文件
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports={
  plugins: [new MiniCssExtractPlugin()],
    mode:'production',
    entry:'./src/main.js',
output:{
    path:path.join(__dirname,'bundle'),
    filename:'bundle.js',
    clean:true
},
module:{
rules:[
  //test:正则，匹配的文件

  {
    test:/\.css$/,
    use: [ "style-loader", "css-loader"]
  },
  {
    test: /\.less$/,
    // 使用less-loader, 让webpack处理less文件, 内置还会用less翻译less代码成css内容
    use: [ "style-loader", "css-loader", 'less-loader']
},
{
  test: /\.vue$/,
  loader: 'vue-loader'
},
{
  test: /\.css$/i,
  use: [MiniCssExtractPlugin.loader, "css-loader"],
},
]
},
plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new VueLoaderPlugin()
  ],
  devServer:{
    open:true,
    port:30000
  }
}
