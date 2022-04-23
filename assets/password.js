//find the button in the DOM, by the id of "generate"
var generateBtn = document.querySelector("#generate");

//this returns a randomly generated password based on a length and character set to choose from
function generateSecurePassword(length, charset) {
  var password = "";

  for (let i = 0; i < length; i++) {
    var charIndex = Math.floor(Math.random() * charset.length); // charIndex is a random number

    password += charset.charAt(charIndex); //append to the password, the single character at the random charIndex
  }

  return password; //return value
}

// Write password to the #password input
function writePassword(charset) {
  //Ask for a length
  var length = prompt(
    "Enter a number of characters to provide between 8 and 128 characters."
  );
  //check for length and not a number
  while (length < 8 || length > 128 || Number.isNaN(length)) {
    length = prompt(
      "Please enter a number of characters to provide between 8 and 128 characters only."
    );
  }

  //define our special case character sets
  //these are all strings
  var upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
  var numberChars = "0123456789";
  var specialChars = "~!%^&*()+=@#$";

  var charset = ""; //this is our final charset, being passed into the generateSecurePassword function

  //start asking for their charset
  if (confirm("Do you want lowercase characters?")) {
    charset += lowerCaseChars; //append the charset
  }
  if (confirm("Do you want uppercase characters?")) {
    charset += upperCaseChars; //append the charset
  }
  if (confirm("Do you want number characters?")) {
    charset += numberChars; //append the charset
  }
  if (confirm("Do you want specialChars?")) {
    charset += specialChars; //append the charset
  }

  var password = generateSecurePassword(length, charset); //this is what we defined, the value is a string
  var passwordText = document.querySelector("#password"); //get the textBox in the DOM, by id "password"

  passwordText.value = password; //set the textBox value to display our password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
