// external js file
// Write all JavaScript code here

// access/loop thourgh array element

// myarray[indexNumber], myarray[0]

var arrColors = new Array('Red', 'Green', 'Blue', 'Orange');
console.log(arrColors[0]); // Red
console.log(arrColors[2]); // Blue

// ------------------------------

var arrCities = new Array('Delhi', 'Mumbai', 'Kolkota', 'Bengaluru', 'Chennai');
console.log(arrCities[1]); // Mumbai
console.log(arrCities[4]); // Chennai

// ------------------------------

var arrJsFrameworks = new Array('jQuery', 'Angular', 'React', 'Node', 'Vue', 'Express', 'D3');
console.log(arrJsFrameworks[3]); // Node
console.log(arrJsFrameworks[5]); // Express

// Loop through an Array Elements
for (let i = 0; i < arrJsFrameworks.length; i++) {
  document.write('<li>'+arrJsFrameworks[i] + '</li>');
}