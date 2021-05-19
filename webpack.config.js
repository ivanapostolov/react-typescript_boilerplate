const path = require('path');

module.exports = {
   mode: 'development',
   entry: './src/index.tsx',
   
   output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, 'build'),
      publicPath: '/dev-build',
   },

   resolve: {
      extensions: [".js", ".json", ".ts", ".tsx"],
   },

   module: {
      rules: [
         { test: /\.css$/, use: ['style-loader', 'css-loader'] },
         { test: /\.tsx$/, use: 'ts-loader' }
      ]
   },

   devServer: {
      contentBase: path.join(__dirname, 'public'),
      port: 8000,
   }
}