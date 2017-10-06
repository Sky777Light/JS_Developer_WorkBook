var mySingleton = (function () {

    // Instance stores a reference to the Singleton
    var instance;
    function createInstance() {
        // Private methods and variables
        function privateMethod(){
            console.log( "I am private" );
        }
        var privateVariable = "Im also private";
        var privateRandomNumber = Math.random();

        return {
            // Public methods and variables
            publicMethod: function () {
                console.log( "The public can see me!" );
            },
            publicProperty: "I am also public",
            getRandomNumber: function() {
                return privateRandomNumber;
            },
            changeRandomNumber: function() {
                privateRandomNumber = Math.random();
                return privateRandomNumber;
            }
        };
    }

    return {
        // Get the Singleton instance if one exists or create one if it doesn't
        getInstance: function () {
            if ( !instance ) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();



// Usage:

var singleA = mySingleton.getInstance();
var singleB = mySingleton.getInstance();
console.log( singleA.getRandomNumber() === singleB.getRandomNumber() ); // true


//-----------------------------------es6-------------------------
let instance = null;

class mySingleton{
    constructor() {
        if(!instance){
            instance = this;
        }

        // to test whether we have singleton or not
        this.time = new Date()

        return instance;
    }
}


//-----------------or--------------------------

export default class Singleton {

    static instance;

    constructor(){
        if(instance){
            return instance;
        }

        this.state = "duke";
        this.instance = this;
    }

}

