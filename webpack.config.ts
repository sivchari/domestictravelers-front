import * as path from 'path';
import { Configuration } from 'webpack';

const config: Configuration = {
    mode: "development",
    context: path.join(__dirname, 'src'),
    entry: './index.tsx',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/assets',
    },
    module: {
        rules: [
            {
                test: /\.js(x?)$/,
                loader:'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.ts(x?)$/,
                use: 'ts-loader',
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', 'jsx'],
    },
    devServer: {
        contentBase: path.join(__dirname, 'static'),
        port: 3000,
        hot:true,
        open:true
    },
};

export default config;