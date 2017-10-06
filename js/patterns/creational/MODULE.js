//module pattern return collection of methods and properties


///////////////////////////////////////////////////////////////////////////////////
var Module = (function () {

    var closureVar = "i'm in closure"; //private

    var _privateMethod = function () {
        // private
    };

    var someMethod = function () {
        // public
    };

    var anotherMethod = function () {
        // public
    };

    return {
        someMethod: someMethod,
        anotherMethod: anotherMethod,
        someProp: "" //public variable
    };

})();


module.exports = Module;



///////////////////////////////////////////////////////////////////////////////////ad something to Module
var Module = require("path_to_MODULE");

var ModuleTWO = (function (Module) {

    // access to `Module`

    Module.extension = function () {
        // another method!
    };

    return Module;

})(Module || {});