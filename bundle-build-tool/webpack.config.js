const path = require("path");
const BundleAnalyzerPlugin =
    require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
module.exports = {
    entry: "./src/index.js", // entry point to the app
    output: {
        filename: "main.js", // by default it's main.js
        path: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: true, // <- this enables css-modules for all imports
                        },
                    },
                    "sass-loader",
                ],
            },
        ],
    },
    // plugins: [new BundleAnalyzerPlugin()],
    // devServer: {
    //     static: {
    //         directory: path.join(__dirname, "public"),
    //     },
    //     port: 9000,
    // },
};