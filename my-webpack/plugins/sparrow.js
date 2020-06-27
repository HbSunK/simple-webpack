class Sparrow {
    constructor () {

    }

    apply (compiler) {
        compiler.hooks.run.tap('onCompile', name => {
            console.log(name)
        })
    }
}

module.exports = Sparrow