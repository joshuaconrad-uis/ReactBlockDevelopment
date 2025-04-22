import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const wpConfig = require('@wordpress/scripts/config/webpack.config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//import path from 'path';

// Add SCSS processing rules
// const scssRule = {
//   test: /\.scss$/,
//   use: [
//     MiniCssExtractPlugin.loader,
//     'css-loader',
//     'sass-loader'
//   ],
// };

// // Find the existing rules array and add our SCSS rule
// const updatedRules = [...wpConfig.module.rules];
// updatedRules.push(scssRule);

export default {
  ...wpConfig,
  entry: {
    ...wpConfig.entry,
    blocks: './src/index.js',
    frontend: './src/frontend.js', 
    editor: './src/editor.js',
  },
  externals: {
    ...wpConfig.externals,
    drupal: 'Drupal',
  },
  output: {
    ...wpConfig.output,
    path: `${process.cwd()}/build`,
    filename: '[name].js',
  },
  module: {
    ...wpConfig.module,
    //rules: updatedRules,
  },
  plugins: [
    ...wpConfig.plugins,
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
};