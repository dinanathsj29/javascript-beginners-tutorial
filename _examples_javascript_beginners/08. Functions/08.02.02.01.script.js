// external js file
// Write all JavaScript code here

// Parameterized function

//1. define / declare / create function
function sayHello (name) {
  //Body of function 
  //code to be executed
  console.log('Hello ' + name);
  alert('Hello ' + name);    
}

//2. invoke / call the function
sayHello('Dinanath');

sayHello('Dino');

// ------------------------------

var total;

function calculateSum (num1, num2) {
  total = num1 + num2;
  console.log(total);
}

calculateSum(10, 20);
calculateSum(100, 200);