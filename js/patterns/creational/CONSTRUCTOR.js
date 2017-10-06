// constructor pattern

function ConstructorName( param1, param2) {
    this.param1 = param1;
    this.param2 = param2;

    /** will be created instance for each new object */
    this.someMethod = function () {
       return this.param1 + this.param2;
    };
}

/** will be used only one instance for all created objects */
ConstructorName.someMethod = function () {
    return this.param1 + this.param2;
};

var object = new ObjectName( "param1", "param2" );



/***********************************************************/

// for node js

module.exports = ConstructorName;

//in another files

var ConstructorName = require("path_to_file_with_module");



// ----------------------------es6----------------------------------------------
class ConstructorName{
    constructor(param1, param2){
        this.param1 = param1;
        this.param2 = param2;
        /** will be created instance for each new object */
        this.someMethod = function () {
            return this.param1 + this.param2;
        };
    }

    /** will be used only one instance for all created objects */
    someMethod () {
        return this.param1 + this.param2;
    };
}
