// external js file
// Write all JavaScript code here

// global variable
var globalName = 'Global';

window.alert(globalName);

function showName() {
  // local variable
  var localName = 'Local';

  window.alert(localName);
  window.alert(globalName); // recall global variable
}

// invoke/call/run function
showName();

// error - as local variable not exist/available outside of block { }
window.alert(localName);
