const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {    
        module: {
            rules: [
                {
                    test: /.js$/,
                    use: ['babel-loader']
                },
                {
                    test: /.css$/,
                    use: ['style-loader', 'css-loader']
                }
            ]
        },
        output: {
            path: path.resolve(__dirname, 'review_build')            
          },
        plugins: [            
            new HtmlWebpackPlugin({
                template: './src/index.html'
            })
        ],
         mode: 'production'
        
};