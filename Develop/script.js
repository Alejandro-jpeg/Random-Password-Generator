// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//Generating the password
//All wrapped in an if statement to generate passwords of appropiate lenght
function generatePassword(){
var passLenght = window.prompt("How long would you like your password to be (minum 8 charactes long and maximum 128)");
if (passLenght >=8 && passLenght <= 128){

  var charBank ={
      lowerCase: ['abcdefghijklmnopqrstuvwxyz'],
      upperCase: ['ABCDEFGHIJKLMNOPQRSTUVWXYZ'],
      numeric: ['0123456789'],
      specialChar: [" \"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"]
    }
    
    var password = '';
    var totalChars = "";
    
    var lower = window.confirm("Would you like your password to contain Lower Case letters?");
    var upper = window.confirm("Would you like your password to contain Upper Case letters?");
    var num = window.confirm("Would you like your password to contain Numeric characters?");
    var special = window.confirm("Would you like your password to contain Special characters?");
    
    //Choosing which characters to include in the 'Character Bank'
    if (lower){
      totalChars = totalChars.concat(charBank.lowerCase);
    }if (upper){
      totalChars = totalChars.concat(charBank.upperCase);
    }if (num){
      totalChars = totalChars.concat(charBank.numeric);
    }if (special){
      totalChars = totalChars.concat(charBank.specialChar);
    }
    if(totalChars == 0){
      window.alert("Please choose at least one option");
      generatePassword();
    }
    
    //Looping over the totalChars string and choosing a random index to add a character to the password variable
    for(var i = 1; i<=passLenght; i ++){
      var passChar = Math.floor(Math.random() * totalChars.length);
      password += totalChars.charAt(passChar);
    }
}
else if (passLenght > 128){
  window.alert("password is too long, please try again");
}else if (passLenght < 8){
  window.alert("password is too short, please try again");
}else{
  window.alert("That is not a valid value, please try again");
}

return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
