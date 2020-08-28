// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Generate a password
function generatePassword() {
  var passLength = prompt("Choose a password length between 8 and 128 characters");
  var charTypeLowercase = confirm("Include lowercase?");
  var charTypeUppercase = confirm("Include uppercase?");
  var charTypeSpecialChar = confirm("Include special characters?");
  var charTypeNum = confirm("Include numbers?")
  
  var charUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var charLower = "abcdefghijklmnopqrstuvwxyz";
  var charSpecial = "!@#$%^&*(){}[]=<>/,.'";
  var charNum = "0123456789";

  var generatedPassword = "";
  var chosenChar = "";
  
  if (charTypeLowercase || charTypeUppercase || charTypeSpecialChar || charTypeNum === true) {
    if (charTypeUppercase) {
      chosenChar += charUpper;
    }
    if (charTypeLowercase) {
      chosenChar += charLower;
    }
    if (charTypeSpecialChar) {
      chosenChar += charSpecial;
    }
    if (charTypeNum) {
      chosenChar += charNum;
    }} else {
      alert("Please select a parameter!");
    }
   
  

  if (passLength >= 8 && passLength <= 128) {
    for(var i = 0; i < passLength; i++) {
      generatedPassword += chosenChar.charAt(Math.floor(Math.random() * chosenChar.length));
    }} else {
      alert("Please select a number between 8 and 128!");
  }
    
    
  return generatedPassword;
  
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());

