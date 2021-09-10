// const withPlugins = require('next-compose-plugins');
const withAntdLess = require('next-plugin-antd-less')

// TODO install `babel-plugin-import

const antdLess = withAntdLess({
    // optional
    modifyVars: { '@primary-color': '#20c997' },
    // // optional
    // lessVarsFilePath: './src/styles/variables.less',
    // // optional
    // lessVarsFilePathAppendToEndOfContent: false,
    // // optional https://github.com/webpack-contrib/css-loader#object
    // cssLoaderOptions: {},

    // Other Config Here...

    webpack(config) {
        return config
    },

    // ONLY for Next.js 10, if you use Next.js 11, delete this block
    future: {
        webpack5: true,
    },
})

module.exports = antdLess
// module.exports = withPlugins([[antdLess]]);
