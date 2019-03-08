// external js file
// Write all JavaScript code here

// DOM element properties

// method - 1
messageButton1.onclick = function () {
  console.log('Welcome to event handler!');
  alert('Welcome to event handler!');
}

// method - 2
document.getElementById("messageButton2").onclick = fnShowMessage;

function fnShowMessage() {
  alert('Hello World! Welcome to JavaScript events');
}
