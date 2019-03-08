// external js file
// Write all JavaScript code here

// for...in loop

/*for(variable/key in array/object) {
    // Code to be executed
}*/

// An array with some elements
let arrColors = ["Red", "Green", "Blue", "Cyan", "Magenta", "Yellow", "Black"];

// Loop through all the elements in the array 
for (let color in arrColors) {
  alert('Color is: ' + arrColors[color]);
  document.write('<li>Color is: ' + arrColors[color] + '</li>');
  console.log('Color is: ' + arrColors[color]);
}