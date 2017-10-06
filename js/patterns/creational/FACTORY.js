////////////////////define our constructor models  ( can be in different files )
var FullTime = function (options) {
    this.hourly = options.rate;
};
module.exports = FullTime;



var PartTime = function (options) {
    this.hourly = options.rate;
};
module.exports = PartTime;



var Temporary = function (options) {
    this.hourly = options.rate;
};
module.exports = Temporary;



var Contractor = function (options) {
    this.hourly = options.rate;
};
module.exports = Contractor;



/////////////////////////////////////////////////////////////
//// HOW TO CREATE FACTORY

var FullTime = require("path_to_fulltime_module");
var PartTime = require("path_to_fulltime_module");
var Temporary = require("path_to_fulltime_module");
var Contractor = require("path_to_fulltime_module");

function FactoryName() {}

// Our default employeeType is FullTime
FactoryName.prototype.employeeType = FullTime;

// Our Factory method for creating new Employee instances
FactoryName.prototype.createEmployee = function (options) {

    switch(options.type){
        case "fulltime":
            this.employeeType = FullTime;
            break;
        case "parttime":
            this.employeeType = PartTime;
            break;
        case "temporary":
            this.employeeType = Temporary;
            break;
        case "contractor":
            this.employeeType = Contractor;
            break;
        //defaults to FactoryName.prototype.employeeType (FullTime)
    }

    var employee = new this.employeeType( options );

    //add for each employee custom data/methods
    employee.type = type;

    employee.say = function () {
        log.add(this.type + ": rate " + this.hourly + "/hour");
    };

    return employee;
};
/////////////////////////////////////////////////////////////////////





//////////////////////////HOW TO USE FACTORY
var FactoryName = require("path_to_factory");

var employees = [];
var factory = new FactoryName();

//-----------------create employees using factory  ( we set only type and factory create this type of employee + add new functional )-----------
employees.push(factory.createEmployee({
    type: "fulltime",
    rate: "12$"
}));
employees.push(factory.createEmployee({
    type: "parttime",
    rate: "8$"
}));
employees.push(factory.createEmployee({
    type: "temporary",
    rate: "17$"
}));
employees.push(factory.createEmployee({
    type: "contractor",
    rate: "20$"
}));



for (var i = 0, len = employees.length; i < len; i++) {
    employees[i].say();
}