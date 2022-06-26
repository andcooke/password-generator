// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var password = generatePassword();


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
  let finalPassword = [];

  let initialCheck = window.prompt("\nConfirm your desired password length below:\n\n(Must be between 8-128.)\n");
  
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
  

//push upper case string into passwordOptions 
  function getUpperCase() {
    let incUppers = window.confirm("\nConfirm if you would like to include upper-case characters in your password.");
    if (!incUppers) {
      return getLowerCase ();
    } else {
      passwordOptions.push(upperAlpha);
      return getLowerCase ();
    }
  };

//push lower case string into passwordOptions 
  function getLowerCase() {
    let incLowers = window.confirm("\nConfirm if you would like to include lower-case characters in your password.");
    if (!incLowers) {
      return getNumbers ();
    } else {
      passwordOptions.push(lowerAlpha);
      return getNumbers ();
    }
  }

//push number into passwordOptions 
  function getNumbers () {
    let incNumbers = window.confirm("\nConfirm if you would like to include numbers in your password.")
    if (!incNumbers) {
      return getSpecials ();
    } else {
      passwordOptions.push(numbers);
      return getSpecials ();
    }
  }

  //push special characters into passwordOptions
  function getSpecials () {
    let incSpecials = window.confirm("\nConfirm if you would like to include special characters in your password.")
    if (!incSpecials) {
      return makePassword ()
    } else {
      passwordOptions.push(specChar);
      //console.log(passwordOptions);
      return makePassword ()
    }
  }





  function makePassword () {
//join array elements so that there are no commas
    let charString = passwordOptions.join("");
//split each individual array element so there are commas between every index
    let charArray = charString.split("");
//push a random character from the split characters array into the finalPassword array passwordLength times with a for-loop
    for (let i = 0; i < passwordLength; i++) {
      finalPassword.push(charArray[(parseInt(Math.random()*charArray.length))]);
    }
//return  the finalPassword array after having getting rid of the commas.
    return finalPassword.join("");
  }
};




//confirm if you want upper case letters

//confirm if you want lower case letters

//confirm if you want numbers

//confirm if you want special characters

//produce password


  
  
