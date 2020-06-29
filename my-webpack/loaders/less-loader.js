let lessLoader = require('less')
let loaderUtils = require('loader-utils')   // 获取当前loader中的配置

function lessFn (source) {
    let css

    // console.log(this)
    // console.log(loaderUtils.getOptions(this))

    lessLoader.render(source, (err, code) => {
        css = code.css.replace(/\n+/g, '\\n')
    })

    return css
}

module.exports = lessFn