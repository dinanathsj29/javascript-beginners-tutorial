// external js file
// Write all JavaScript code here

// Parameterized function with default parameters

//1. define / declare / create function
function sayHello (name = 'User') {
  //Body of function 
  //code to be executed
  console.log('Hello ' + name);
  alert('Hello ' + name);    
}

//2. invoke / call the function
sayHello();

sayHello('Amber');

// ------------------------------

var total;

function calculateSum (num1=1, num2=2) {
  total = num1 + num2;
  console.log(total);
}

calculateSum();
calculateSum(100, 200);