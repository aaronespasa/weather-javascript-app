const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/app/index.js', // Get the configuration
    output: {
        path: path.join(__dirname, 'docs'), // Create 'dist' folder next to 'src' folder
        filename: 'bundle.js' // The file composed of all the files from 'app' folder
    },
    devServer: {
        port: 3000 // Configurate in which port I want to have the developer server
    },
    module: {
        rules: [ // Tell webpack what it's going to do
            {
                test: /\.css$/, // Test all the files that end with .css
                use: ['style-loader', 'css-loader'] // Modules to call css inside js
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {}
                }
                ],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ // Copy one html file from one directory to another
            template: './src/index.html'
        }) 
    ]
};