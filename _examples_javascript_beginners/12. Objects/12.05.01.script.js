// external js file
// Write all JavaScript code here

// create object with new keyword - Object constructor with function

function Technology(name, version, type) {
  this.name = name;
  this.version = version;
  this.type = type;
  console.log(this.name);
  console.log(this.type);
}

let JavaScript = new Technology('JavaScript', 6, 'Script Language');
console.log(JavaScript.version);

console.log('// ------------------------------');

function Vehicle(brand,model,color,price) {
  this.brand = brand;
  this.model = model;
  this.color = color;
  this.price = price;
  this.keyStart = function () {
    console.log(this.model + ' started!');
  }
}

var Maruti = new Vehicle('Maruti','Alto-100','White',400000);
Maruti.keyStart();

console.log('// ------------------------------');
