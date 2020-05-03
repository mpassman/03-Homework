//assignment code and event listener
document.querySelector("#generate").addEventListener("click", writePassword);

//main function and variables
    var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var symbols = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
 //String filled by for loop selecting random characters - letters, numbers, symbols from all four arrays
var randomPassword = "";
var passwordString = ""

// Variable Declaration 
var passwordLength = "";
var confirmupperCase;
var confirmlowerCase;
var confirmnumber;
var confirmsymbol;



//First prompt asks for number of characters
function generatePassword() {
    var passwordLength = (prompt("Pick how many characters you want the password to be. The length must be from 8 to 128 characters."));
    
    
    if(passwordLength <= 8 || passwordLength >= 128) {
        alert("Password length must be between 8 and 128 characters! Try again.");
        var passwordLength = (prompt("Pick how many characters you want the password to be. The length must be from 8 to 128 characters."));
        } 


//Password parameters determined by the user
var confirmupperCase = confirm("Do you want to include uppercase characters?");
//Uppercase loop if requirment not met
if(confirmupperCase === false) {
    var confirmupperCase = alert("You must choose an uppercase characcter in your password!");
    var confirmupperCase = confirm("Click OK to include an uppercase character");  
}

var confirmlowerCase = confirm("Do you want to include lowercase characters");
//Lowercase loop if requirement not met
if(confirmlowerCase === false) {
    var confirmlowerCase = alert("You must choose lowercase character!");
    var confirmlowerCase = confirm("Click OK to include an uppercase character");  
}

var confirmnumber = confirm("Do you want to include a number?");
//Number loop if requirement not met
if(confirmnumber === false) {
    var confirmnumber = alert("You must choose a number for your password!");
    var confirmnumber = confirm("Click OK to include a number in your password");  
}
var confirmsymbol = confirm("Do you want to include a sumbol?");
//Symbol loop if requirement not met
if(confirmsymbol === false) {
    var confirmsymbol = alert("You must choose las symbol in your password!");
    var confirmsymbol = confirm("Click OK to ichoose a symbol in your password");  

}

passwordString = upperCase.join("") +  lowerCase.join("") + numbers.join("") + symbols.join("");
  
for (var i = 0; i < passwordLength; i++) {
randomPassword += passwordString.charAt(Math.floor(Math.random() * passwordString.length));
     }
return randomPassword
    }

//Generate password posts in box
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  }
/*     for (var index = 0; index < length; index++) {
        var character = Math.floor(Math.random() * all.leng
        password += all.substring(character, character + 1); */
    

    // return password
/* }

    
        var generateButton = document.querySelector('#generate');{
        generateButton.addEventListener('click', function(){				
        document.querySelector('#password').value = generate();
    }); */

// Timer assignment extra code 

/* var poem = "Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.";
var words = poem.split(" ");

var mainEl = document.getElementById("main");
var readEl = document.getElementById("read");
var timerEl = document.getElementById("countdown");
var bodyEl = document.createElement("div");

var i = 0;

var millisecondsPerWord = prompt("How many milliseconds between words would you like?");

function prepareRead() {
  var timeLeft = 5;

  var timeInterval = setInterval(function() {
    timerEl.textContent = timeLeft + " seconds remaining";
    timeLeft--;

    if (timeLeft === 0) {
      timerEl.textContent = "";
      speedRead();
      clearInterval(timeInterval);
    }

  }, 1000);
}


function speedRead() {
  mainEl.append(bodyEl);

  var poemInterval = setInterval(function() {
    if (words[i] === undefined) {
      clearInterval(poemInterval);
    } else {
      mainEl.textContent = words[i];
      i++;
    }

  }, millisecondsPerWord);
}

prepareRead();
 */