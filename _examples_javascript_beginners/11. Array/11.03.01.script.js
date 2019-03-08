// external js file
// Write all JavaScript code here

// create array with new keyword

// var myArray = new Array(); OR var myArray = Array();

var arrColors = new Array();

arrColors[0] = 'Red'
arrColors[1] = 'Green'
arrColors[2] = 'Blue'
arrColors[3] = 'Orange'
console.log(arrColors); // show all elements

// read/get array items/elements
for (let i = 0; i < arrColors.length; i++) {
  alert(arrColors[i]);
}

// ------------------------------

var arrCities = Array();
arrCities[0] = 'Delhi';
arrCities[1] = 'Mumbai';
arrCities[2] = 'DeKolkotalhi';
arrCities[3] = 'Bengaluru';
arrCities[4] = 'Chennai';
console.log(arrCities); // show all elements

// ------------------------------

var arrTechnologies = new Array();

// add new array items/elements
for (let i = 0; i <= 5; i++) {
  arrTechnologies[i] = 'JavaScript';
}

console.log(arrTechnologies); // show all elements
