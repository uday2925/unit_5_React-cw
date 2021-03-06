const path=require("path");

module.exports={
    entry:"./src/index.js",
    output:{
        path:path.resolve(".","build"),
        filename:"bundler.js"
    },
    mode:"development",
    module: {
        rules: [
          { test: /\.css$/, use: ["style-loader",'css-loader'] },
          { test: /\.js$/, use: ["babel-loader"] } //helps to read both js and xml/html in js        
        ],
      },
};