// Assignment code here
var charAlphaUpp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var charAlphaLow = "abcdefghijklmnopqrstuvwxyz"
var charNumeric = "1234567890"
var charSpecial = "!@#$%^&*()"
var shortPassword = ""

//Password user input questions
var generatePassword = function(){
  //Resets symbols not clearing
  shortPassword = "";
  
  var passLength = window.prompt('How long would you like your password?')
  passLength = parseInt(passLength);
 
  //I want the users password length stored in a variable, passLength
  //If passLength is less than 8
  //If passLength is greater than 128

  while (passLength < 8 || passLength > 128 || isNaN(passLength)){
    passLength = window.prompt('It is recommended to use a password that is more than 8 characters Please reenter a value between 8 - 128')
   
}
    var userYesNo = window.prompt("Would you like to numbers in your password? Type 1 for yes 0 for no");
    userYesNo = parseInt(userYesNo);
    var passRandom = ""

if (userYesNo == 1){
  passRandom += charNumeric
}

userYesNo = window.prompt("Do you want upper case letters? 1 for Yes 0 for No")

if (userYesNo == 1){
  passRandom += charAlphaUpp
}

userYesNo = window.prompt("Do you want lower case letters? 1 for Yes 0 for No")

if (userYesNo == 1){
  passRandom += charAlphaLow
}

userYesNo = window.prompt("Do you want special letters? 1 for Yes 0 for No")

//Added short password symbol exception

if (userYesNo == 1){
  shortPassword = charSpecial[Math.floor(Math.random()* charSpecial.length)] 
  passLength--;
  passRandom+=charSpecial;
}
  return (shortPassword + getRandomChars(passRandom,passLength));
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// generatePassword();

function getRandomChars(passRandom, passLength){
 var string1 = ""

  for(var i = 0; i < passLength; i++){
    string1 += passRandom[Math.floor(Math.random() * passRandom.length)]

  }

  passRandom = string1;
  
  return passRandom;
  
};

