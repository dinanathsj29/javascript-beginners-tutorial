// external js file
// Write all JavaScript code here

// add/edit array element

// myarray[indexNumber]='value', myarray[2]='value', myarray.push('value'), myarray.unshift('value')

var arrColors = new Array('Red', 'Green', 'Blue', 'Orange');
console.log(arrColors);
console.log('arrColors.length: ' + arrColors.length);

// add an element at the end of the array
arrColors.push('Cyan');
console.log(arrColors);
console.log('arrColors.length: ' + arrColors.length);

// add multiple elements at the end of the array
arrColors.push('Magenta','Yellow');
console.log(arrColors);
console.log('arrColors.length: ' + arrColors.length);

// ------------------------------

// add multiple elements at the start of the array
arrColors.unshift('Black','White');
console.log(arrColors);
console.log('arrColors.length: ' + arrColors.length);

// ------------------------------

// edit 1st index ie. 'white' to 'pink'
arrColors[1] = 'pink';
console.log(arrColors);
console.log('arrColors.length: ' + arrColors.length);