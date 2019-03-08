// external js file
// Write all JavaScript code here

// global variable
var globalName = 'Global';

window.alert(globalName);

function showName() {
  // local variable
  var globalName = 'Local';

  window.alert(globalName);

  // define global variable with window
  window.globalVersion = 29;
  window.alert('global variable from inside function: ' + window.globalVersion);
}

// invoke/call/run function
showName();

// access global variable defined inside function
window.alert('global variable from outside function: ' + window.globalVersion);
