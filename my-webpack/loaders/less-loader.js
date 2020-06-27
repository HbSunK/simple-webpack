let lessLoader = require('less')

function lessFn (source) {
    let css

    lessLoader.render(source, (err, code) => {
        css = code.css.replace(/\n+/g, '\\n')
    })

    return css
}

module.exports = lessFn