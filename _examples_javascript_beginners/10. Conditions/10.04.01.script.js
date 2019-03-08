// external js file
// Write all JavaScript code here

// switch...case conditional statement

/* switch(variable/expression){
  case value1:
    // Code to be executed if variable/expression === value1
    break;
  case value2:
    // Code to be executed if variable/expression === value2
    break;
  default:
    // Code to be executed if variable/expression is different from all values
} */

let grade = 'B'; // A.B,C, or something

switch (grade) {
  case 'A':
    console.log('Great Job! - A Grade');
    break;
  case 'B':
    console.log('Good! - B Grade');
    break;
  case 'C':
    console.log('Congratulations! - Passed');
    break;
  default:
    console.log('Sorry! - Failed...Keep trying!');
    break;
}

// ------------------------------

let sweets = ''; //cake, chocolates, biscuits

switch (sweets) {
  case 'chocolates':
    console.log('Chubby Chocolates!');
    break;
  case 'cake':
    console.log('Happy BirthDay Cake!');
    break;
  case 'biscuits':
    console.log('Enjoy Biscuits!');
    break;
  default:
    console.log('No Sweets! Try some other sweets!');
    break;
}