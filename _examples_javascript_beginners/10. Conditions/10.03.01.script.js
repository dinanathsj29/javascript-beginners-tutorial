// external js file
// Write all JavaScript code here

// If...else if...else conditional statement

/*if(condition/expression 1) {
    // Code to be executed if condition1 is true statements_1
} else if(condition/expression 2) {
    // Code to be executed if the condition1 is false and condition2 is true statements_2
} else {
    // Code to be executed if both condition1 and condition2 are false statements_3
}*/

let num1 = 200;
let num2 = 100;

if (num1 == num2) {
  console.log('Both numbers are equal');
} else if (num1 < num2 ) {
  console.log('Number2 is greater!');
} else {
  console.log('Number1 is greater!');
}

// ------------------------------

let age = 15; 

if (age >= 60) {
  console.log('SINIOR CIRIZEN!');
} else if (age < 18) {
  console.log('MINOR!');
} else {
  console.log('MAJOR - Middle Age!');
}