// external js file
// Write all JavaScript code here

// remove/delete array element from start and end

// myarray.pop(), myarray.shift()

var arrColors = new Array('Red', 'Green', 'Blue', 'Orange');
console.log(arrColors);
console.log('arrColors.length: ' + arrColors.length);

// remove an element from the end of the array
arrColors.pop();
console.log(arrColors);
console.log('arrColors.length: ' + arrColors.length);

// ------------------------------

// remove an element from the start of the array
let startElement = arrColors.shift();
console.log(startElement);
console.log(arrColors);
console.log('arrColors.length: ' + arrColors.length);