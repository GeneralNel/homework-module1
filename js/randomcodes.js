
// RANDOM CODES

var getCode = '';   // to store entered code 
var btnValue;     // for button boolean value
var code = '';   // to store generated codes and initialize to empty value
//create variable to hold the type of characters we want to show as codes
var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$';

// Function to generate combination of characters
function generateCode() {
    // Create variables to store generated codes and the type of characters we want to show as codes

    // Generate character multiple times using a loop
    for (i = 1; i <= 8; i++) {
        var char = Math.random() * str.length; // randomly generate a number based on the length of the string
        code += str.charAt(char); // acculumate the generated char into a string of 8 characters
    }
    return code; // return the final accumulated generated code
}

// Get the html element to display
document.getElementById("codes").innerHTML = generateCode();

// disable button
function disableButton() {
    document.getElementById("submitBtn").disabled = true;
}

