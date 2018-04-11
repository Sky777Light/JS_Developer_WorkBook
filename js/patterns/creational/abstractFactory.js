function Employee(name) {
  this.name = name;

  this.say = function () {};
}

function EmployeeFactory() {
  this.create = function(name) {
    return new Employee(name);
  };
}

function Vendor(name) {
  this.name = name;

  this.say = function () {};
}

function VendorFactory() {
  this.create = function(name) {
    return new Vendor(name);
  };
}
