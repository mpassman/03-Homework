// Assignment Code
var generateBtn = document.querySelector("#generate");
// Numeric characters
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Alphabetical characters
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var specialCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

get.addEventListener("click", function () {
  ps = generatePassword();
  document.getElementById("password").placeholder = ps;
});

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Start function to generate password
function generatePassword(){

// A prompt to enter how many characters the user wants // From 8-128 characters
// Store as a variable
enter = passwordLength = prompt ("Choose a password between 8 and 28 characters");
if (passwordLength = >=8 || passwordLength <=128)
{alert("Your choice is within required parameters");
}



// Prompt for lowercase password
// Store as a variable
var lowerCase = confirm("Press OK for lowercase or CANCEL for none.");
console.log(passwordLength);
if (lowerCase == true)
  passwordArray = passwordArray.concat/lowerCaseLetters);}
