/** @format */

import path from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const outputDir = path.resolve(process.cwd(), 'dist');

export default env => {
  const isProduction = env.production === "true";
  return {
    mode: isProduction ? 'production' : 'development',
    devtool: isProduction ? false : 'eval',
    entry: {
      main: ['./src/js/index.js', './src/css/index.less'],
      // TODO: add html entries
      // TODO: add copy assets entries
      // TODO: add TS entries
      // ...getGlobalAssetsEntry(),
    },
    output: {
      path: outputDir,
      clean: true,
    },
    plugins: [new MiniCssExtractPlugin()],
    ...(isProduction && {
      optimization: {
        minimize: false,
      },
    }),
    module: {
      rules: [
        {
          test: /\.less$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'],
        },
        {
          test: /\.scss$/i,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            { loader: 'sass-loader', options: { sassOptions: { outputStyle: 'expanded' } } },
          ],
        },
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
        {
          test: /\.(png|jpe?g|gif|svg|woff2?|ttf|eot)$/,
          type: 'asset/resource',
          generator: {
            filename: 'assets/[name][ext]',
          },
        },
      ],
    },
  };
};
