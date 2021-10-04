// Assignment code here
var charAlpha = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz']
var charNumeric = ['1234567890']
var charSpecial = ['!@#$%^&*()_+']

var passRandom = charAlpha + charNumeric + charSpecial


//Password user input questions
var passGen = function(){
  
  var userInput = window.prompt('How long would you like your passowrd.');
  

  userInput = parseInt(userInput);
 

  //If User input is less than or equal to 0
  //If user input is less than or = to 7

  while (userInput <= 0 || userInput <= 7){
    window.alert('It is recommended to use a password that is more than 8 characters')
    
    passGen();
}

  
  //If User input is greater than or equal to 8
  //If user input is less than or 16 
  if (userInput >= 8 || userInput <= 16){
  
    var userYesNo = window.prompt("Would you like to numbers in your password? Type 1 for yes 0 for no");
    userYesNo = parseInt(userYesNo);

    if (userYesNo == 1)
    
    // console.log(userYesNo);
    

    console.log(passRandom + " Here you go");
  }

  if (userYesNo == 0){
    console.log(passRandom + " You can take the numbers out yourself")
  }

  else{
    // console.log('Yo ish is broken Jose');
    passGen();
  } 
  
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

passGen();
