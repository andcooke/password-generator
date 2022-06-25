// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  // *** CHANGE BACK TO generatePassword();
  // *** CHANGE BACK TO generatePassword();
  // *** CHANGE BACK TO generatePassword();
  var password = generatePassword();
  // *** CHANGE BACK TO generatePassword();
  // *** CHANGE BACK TO generatePassword();
  // *** CHANGE BACK TO generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

const upperAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerAlpha = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const specChar = "`~!@#$%^&*()-_+={[}]|\\:;\"\'<,>.?/";



//need 8-128 characters

function generatePassword() {

  let passwordOptions = [];
  let finalPassword = "";

  let initialCheck = window.prompt("\nConfirm your desired password length below:\n\n(Must be between 8-128 characters.)\n");
  
  //turn input into a number
  let passwordLength = Number(initialCheck);

  //check if input is an integer
  if (isNaN(passwordLength) || !Number.isInteger(passwordLength)) {
    window.alert("\nYour password must be an integer between 8 - 128 characters"); 
    return null;


  //check if input is between 8 and 128
  } else if (passwordLength < 8 || passwordLength > 128) {
    window.alert("\nYour password must be between 8 - 128 characters");
    return null;

  //passed those requirements, on to the character selections
  } else {
    return getUpperCase();
  }
  

//push upper case string into passwordOptions array
  function getUpperCase() {
    let incUppers = window.confirm("\nConfirm if you would like to include upper-case characters in your password.");
    if (!incUppers) {
      return null;
    } else {
      passwordOptions.push(upperAlpha);
      return getLowerCase ();
    }
  };

  function getLowerCase() {
    let incLowers = window.confirm("\nConfirm if you would like to include lower-case characters in your password.");
    if (!incLowers) {
      return null;
    } else {
      passwordOptions.push(lowerAlpha);
      return getNumbers ();
    }
  }

  function getNumbers () {
    let incNumbers = window.confirm("\nConfirm if you would like to include numbers in your password.")
    if (!incNumbers) {
      return null;
    } else {
      passwordOptions.push(numbers);
      return getSpecials ();
    }
  }

  function getSpecials () {
    let incSpecials = window.confirm("\nConfirm if you would like to include special characters in your password.")
    if (!incSpecials) {
      return null;
    } else {
      passwordOptions.push(specChar);
      return makePassword ()
    }
  }

  function makePassword () {
    let charString = passwordOptions.join("");
    
    for (let i = 0; i <= passwordLength; i++) {
      finalPassword.push(charString[Math.random]
    }
  }
  

}




//confirm if you want upper case letters

//confirm if you want lower case letters

//confirm if you want numbers

//confirm if you want special characters

//produce password


  
  
