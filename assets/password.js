// returns a randomly generated password based on a length and character set to choose from
function generateSecurePassword(length, charset) {
  var password = "";

  for (let i = 0; i < length; i++) {
    // charIndex is a random number
    var charIndex = Math.floor(Math.random() * charset.length);

    // append to the password, the single character at the random charIndex
    password += charset.charAt(charIndex);
  }

  // return value
  return password;
}

// find the button in the DOM, by the id of "generate"
var generateBtn = document.querySelector("#generate");

// Ask for a length
var length = prompt(
  "Enter a number of characters to provide between 8 and 128 characters."
);
// check for length and not a number
while (length < 8 || length > 128 || Number.isNaN(length)) {
  length = prompt(
    "Please enter a number of characters to provide between 8 and 128 characters only."
  );
}

//define our special case character sets
var upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
var numberChars = "0123456789";
var specialChars = "~!%^&*()+=@#$";

// final charset, being passed into the generateSecurePassword function
var charset = "";

// start asking for their charset
if (confirm("Do you want lowercase characters?")) {
  // append the charset
  charset += lowerCaseChars;
}
if (confirm("Do you want uppercase characters?")) {
  charset += upperCaseChars;
}
if (confirm("Do you want number characters?")) {
  charset += numberChars;
}
if (confirm("Do you want specialChars?")) {
  charset += specialChars;
}

// Write password to the #password input
function writePassword(charset) {
  var password = generateSecurePassword(length, charset);
  var passwordText = document.querySelector("#password");

  // set the textBox value to display our password
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword(charset));
