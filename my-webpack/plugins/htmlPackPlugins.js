const path = require('path')
const fs = require('fs')

class htmlPackPlugins {
    constructor (config) {
        this.config = config
        this.bodyReg = /<\/body>/
    }

    apply (compile) {
        compile.hooks.done.tap('injectHtml', () => {  
            const templatePath = path.join(process.cwd(), this.config.template)
            const entryOutputPath = compile.config.output.path
            const htmlOutputPath = path.join(entryOutputPath, this.config.filename)
            let htmlCode = fs.readFileSync(templatePath, 'utf8')

            // html中添加js标签，在此处理的路径其实是有问题的，如果filename为多级目录会报错，需要创建多级文件夹，此处仅为示意
            htmlCode = htmlCode.replace(this.bodyReg, `<script src="${
                path.relative(
                    entryOutputPath, 
                    path.join(entryOutputPath, compile.config.output.filename)
                )
            }"></script>\n</body>`)

            // console.log(htmlCode)

            fs.writeFileSync(htmlOutputPath, htmlCode)
        })
    }
}

module.exports = htmlPackPlugins