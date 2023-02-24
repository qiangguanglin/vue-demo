const path = require('path')
const resolve = dir => path.join(__dirname, dir)

function addStyleResource (rule) {
    rule.use('style-resource')
        .loader('style-resources-loader')
        .options({
        patterns: [
            path.resolve(__dirname, './src/styles/imports.styl'),
        ],
        })
}
module.exports = {
    chainWebpack: config => {
        config.resolve.alias.set('@', resolve('src'))
        const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
        types.forEach(type => addStyleResource(config.module.rule('stylus').oneOf(type)))
    },
}