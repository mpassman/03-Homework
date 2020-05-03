//Static variables
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var symbols = "~!@#$%^&*()-_+=";

var combined = upperCase + lowerCase + numbers + symbols

var password = "";

//initial command
function generate() {
  if (plength < 8 || plength > 128) {
    alert("Password length must be between 8 to 128 characters in length");
    lowerCase = confirm("Would you like to use lowercase letters?");
 
    upperCase = confirm("Would you like to use upper case letters in your password?");

    numbers = confirm("Would you like to use numbers?");

    symbols = confirm("Would you like to use symbols?");

  }
/* 
for (var index = 0; index <length; index++){
  var character = Math.floor(Math.random() * all.length);
  password += all.substring(character, character + 1);
}
var generateButton = document.querySelector('#generate');
			generateButton.addEventListener('click', function(){				
				document.querySelector('#password').value = generate();
			});
	
return password; */
}




//variable lengths
  // var upperCaseLength = 26;
  // var lowerCaseLength = 26;
  // var numberLength = 10;
  // var symbolLength = 15;

// //password input
// function generate() {
//   var password = generate();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }
 //intro
//Dynamic variables

// prompts caused by clicking the generate pasword button
  //  function generate() {
 /* if (plength <8 || plength >128) {
  alert("Password length must be between 8 to 128 characters in length");
  }

    lowerCase = confirm("Would you like to use lowercase letters?");

    upperCase = confirm("Would you like to use upper case letters in your password?");

    numbers = confirm("Would you like to use numbers?");

    symbols = confirm("Would you like to use symbols?");
}
/* //Do not modify 10-38


  // minimum requirements
  var minimumCount = 0;


  // Empty minimum requirements

  var minimumlowerCase = "";
  var minimumupperCase = "";
  var minimumnumbers = "";
  var minimumsymbols = "";
 */


//generate functions
 /*  function random_password(){

    passwordLength = document.getElementById("plength").value;
var upperCaseAmount = document.getElementById("upperCase").value;
var lowerCase
    var numberAmount = document.getElementById("numbers").value;
    var symbolAmount = document.getElementById("symbols").value;

    // get lowerCase: function() {
    //   return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
    // },

    // getupperCase: function() {
    //   return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
    // }, */

/*     // getNumbers: function() {
    //   return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
    // },

    // getsymbols: function() {
    //   return symbols[Math.floor(Math.random() * symbols.length)]
    // }
    // };

// Checks to see if user selected minimum requirements for letter type, number, and symbols

if (lowerCase === true) {
  minimumlowerCase = functionArray.getlowerCase();
  minimumCount++;
}

if (upperCase === true) {
  minimumupperCase = functionArray.getupperCase();
  minimumCount++;

}

// if (numbers === true) {
//   minimumnumbers = functionArray.getnumbers();
//   minimumCount++;

// }

if (symbols === true) {
  minimumsymbols = functionArray.getsymbols();
  minimumCount++;

}

// empty string variable for the for loop below
var randomPassword = "";

// loop getting random characters
for (let i = 0; i < (parseInt(plength) - minimumCount); i++) {
  var randomNumber = Math.floor(Math.random() * 4);

  let randomPassword = "randomNumber";

  //automatically adds pasword requirements
    // to make sure characters are added to the password
    randomPassword += minimumlowerCase;
    randomPassword += minimumupperCase;
    randomPassword += minimumnumbers;
    randomPassword += minimumsymbols; */

// } */