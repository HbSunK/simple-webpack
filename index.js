let {SyncHook} = require('tapable')

// webpack的简易原理
// 基于事件流机制，类似于生命周期，在事件流中提供多个回调的hook，可以在不同的hook中注册不同的方法
class Lesson {
    constructor () {
        this.hooks = {
            list: new SyncHook(['name'])        // 此处的name参数，代表SyncHook需要接受几个参数，在此处住只有一个参数
        }
    }
    
    tap () {
        // 向webpack提供的钩子函数SyncHook中注册方法
        this.hooks.list.tap('node', name => {
            console.log('node', name)
        })

        this.hooks.list.tap('vue', name => {
            console.log('vue', name)
        })
    }

    start () {
        // 触发注册的所有方法
        this.hooks.list.call('sunkai')
    }
}

const l = new Lesson()
l.tap()
l.start()