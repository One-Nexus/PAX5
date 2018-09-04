import path from 'path';
import webpack from 'webpack';

export default function() {
    const entry = {
        'pax5': './src/pax5.js',
        'pax5.min': './src/pax5.js',
    };

    return {
        entry,

        output: {
            path: path.resolve(__dirname, 'dist/'),
            filename: '[name].js',
            publicPath: '/'
        },

        externals: {
            'react': 'react',
            'react-dom': 'react-dom',
            'prop-types': 'prop-types'
        },

        plugins: [
            new webpack.optimize.UglifyJsPlugin({
                include: /\.min\.js$/,
                minimize: true,
                output: {
                    comments: false
                }
            })
        ],

        node: { Buffer: false },

        module: {
            loaders: [{
                test: /\.(js|jsx|jss)$/,
                exclude: /node_modules/,
                loaders: ['babel-loader'],
            }]
        },

        stats: { colors: true },

        devtool: false
    }
};