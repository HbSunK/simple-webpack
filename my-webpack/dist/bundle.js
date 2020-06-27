(function (modules) { // webpackBootstrap
    // The module cache
    var installedModules = {};

    // The require function
    function __webpack_require__(moduleId) {

        // Check if module is in cache
        if (installedModules[moduleId]) {
            return installedModules[moduleId].exports;
        }
        // Create a new module (and put it into the cache)
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: false,
            exports: {}
        };

        // Execute the module function
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

        // Flag the module as loaded
        module.l = true;

        // Return the exports of the module
        return module.exports;
    }

    // Load entry module and return exports
    return __webpack_require__(__webpack_require__.s = "./src/index.js");
})
    ({

        
            "./src/comm/index.js":
                (function (module, exports, __webpack_require__) {
                    eval(`module.exports = 100;`);
                }),
        
            "./src/c.js":
                (function (module, exports, __webpack_require__) {
                    eval(`const comm = __webpack_require__("./src/comm/index.js");

module.exports = comm;`);
                }),
        
            "./src/b.js":
                (function (module, exports, __webpack_require__) {
                    eval(`const c = __webpack_require__("./src/c.js");

module.exports = {
  b: c
};`);
                }),
        
            "./src/a.js":
                (function (module, exports, __webpack_require__) {
                    eval(`const b = __webpack_require__("./src/b.js");

const a = 1;
module.exports = {
  sum: a + b.b
};`);
                }),
        
            "./src/css/index.less":
                (function (module, exports, __webpack_require__) {
                    eval(`let style = document.createElement('style');
style.innerHTML = "* {\\n  margin: 0;\\n  padding: 0;\\n}\\nhtml,\\nbody {\\n  height: 100%;\\n}\\nbody {\\n  background: pink;\\n  font-size: 20px;\\n}\\n";
document.head.appendChild(style);`);
                }),
        
            "./src/index.js":
                (function (module, exports, __webpack_require__) {
                    eval(`const a = __webpack_require__("./src/a.js");

__webpack_require__("./src/css/index.less");

console.log(a);`);
                }),
        

    });