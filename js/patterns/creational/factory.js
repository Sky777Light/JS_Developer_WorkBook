function Factory() {
  this.createEmployee = function (type) {
    var employee;

    if (type === "fulltime") {
      employee = new FullTime();
    } else if (type === "parttime") {
      employee = new PartTime();
    } else if (type === "temporary") {
      employee = new Temporary();
    } else if (type === "contractor") {
      employee = new Contractor();
    }

    employee.type = type;

    employee.say = function () {}

    return employee;
  }
}

var FullTime = function () {
  this.hourly = "$12";
};

var PartTime = function () {
  this.hourly = "$11";
};

var Temporary = function () {
  this.hourly = "$10";
};

var Contractor = function () {
  this.hourly = "$15";
};

var factory = new Factory();

factory.createEmployee("fulltime");
factory.createEmployee("parttime");
factory.createEmployee("temporary");
factory.createEmployee("contractor");