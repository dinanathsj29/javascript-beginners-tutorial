// external js file
// Write all JavaScript code here

// create object with new keyword

// var MyObject = new Object(); OR var MyObject = Object();

// object with properties
var TechnologyObj = new Object();

TechnologyObj.name = 'JavaScript';
TechnologyObj.version = 6;
TechnologyObj.type = 'script';
TechnologyObj.isStable = true

console.log(TechnologyObj.name);
console.log(TechnologyObj['type']);

console.log('// ------------------------------');

// object properly alignment/arranged for redability - with quotes
var VehicleObj1 = new Object({
  'type': 'LWM',
  'brand': 'Maruti',
  'model': 'Alto-100',
  'color': 'White',
  'isHighEndModel': true,
  'price': 400000,
  keyStart: function () {
    console.log(this.model + ' started!');
  }
})

console.log(VehicleObj1.brand);
console.log(VehicleObj1['color']);
VehicleObj1.keyStart();

console.log('// ------------------------------');

// object properly alignment/arranged for redability - without quotes
var VehicleObj2 = Object({
  type: 'LWM',
  brand: 'Maruti',
  model: 'Alto-100',
  color: 'White',
  isHighEndModel: true,
  price: 400000,
  keyStart: function () {
    alert(this.model + 'started!');
  }
})

console.log(VehicleObj1.brand);
console.log(VehicleObj1['color']);
VehicleObj1.keyStart(); 

console.log('// ------------------------------');
