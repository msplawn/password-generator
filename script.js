// Assignment Code
var generateBtn = document.querySelector("#generate");
// Arrays
var typesOfCharacters = {
  specialChar: "!#$%&'()*+,-./:;<=>?@[]^_`{|}~",
  alphaLower: "abcdefghijklmnopqrstuvwxyz",
  alphaUpper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
}
//variables
var confirmUpper;
var confirmLower;
var confirmNum;
var confirmSpecial;


// Write password to the #password input
function generatePassword() {
    var value = prompt("How many characters in your password? Choose a value from 8 to 128");
    var length = parseInt(value);

    if (length < 8 || length > 128) {
      alert ("Please choose a value between 8 and 128");
      return "Please Try Again";
      
    }

    if (!length)  {
      alert("You must choose a value between 8 and 128");
      return "Please Try Again";
    }
  
  confirmUpper = confirm("Do you want uppercase characters?");
  confirmLower = confirm("Do you want lowercase characters?");
  confirmNum = confirm("Do you want numbers?");
  confirmSpecial = confirm("Do you want special characters? i.e. question marks, exclamations, hashtags");

  var possibleCharacters = [];

  // If no criteria is chosen by user
  if (!confirmUpper && !confirmLower && !confirmNum && !confirmSpecial) {
    alert("You must choose at least one of the following: Uppercase Letters, Lowercase Letters, Numbers, or Special Characters");
    return "Please Try Again";
  }

  // Determines character set based on user criteria
  if (confirmUpper) {
    possibleCharacters = possibleCharacters.concat(typesOfCharacters.alphaUpper.split(""));
  }

  if (confirmLower) {
    possibleCharacters = possibleCharacters.concat(typesOfCharacters.alphaLower.split(""));
  }

  if (confirmSpecial) {
    possibleCharacters = possibleCharacters.concat(typesOfCharacters.specialChar.split(""));
  }

  if (confirmNum) {
    for (var i = 0; i < 10; i++) {
      possibleCharacters.push(i);
    }
  }

  var password = "";
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * possibleCharacters.length);
    password = password + possibleCharacters[randomIndex];
  }

  return password;
  
}

function writePassword()  {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);

var copy = document.querySelector("#copy");
copy.addEventListener("click", function () {
    copyPassword();
});

function copyPassword() {
    document.getElementById("password").select();
    document.execCommand("Copy");
    alert("Password copied to clipboard!");
}