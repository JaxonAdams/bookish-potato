// Assignment code here
const generatePassword = () => {
  return 'password'
};

const promptLowercase = () => {
  let value = parseInt(prompt('Would you like to use lowercase letters in your password? Enter 1 for yes, or 2 for no.', '1'));
  if (value === 1 || value === 2) {
    return value;
  }
  alert('Please enter a valid value.');
  return false;
};

const promptUppercase = () => {
  let value = parseInt(prompt('Would you like to use uppercase letters in your password? Enter 1 for yes, or 2 for no.', '1'));
  if (value === 1 || value === 2) {
    return value;
  }
  alert('Please enter a valid value.');
  return false;
};

const promptNum = () => {
  let value = parseInt(prompt('Would you like to use numbers in your password? Enter 1 for yes, or 2 for no.', '1'));
  if (value === 1 || value === 2) {
    return value;
  }
  alert('Please enter a valid value.');
  return false;
};

const promptSpec = () => {
  let value = parseInt(prompt('Would you like to use special characters in your password? Enter 1 for yes, or 2 for no.', '1'));
  if (value === 1 || value === 2) {
    return value;
  }
  alert('Please enter a valid value.');
  return false;
};

const promptLength = () => {
  let value = parseInt(prompt('Last question -- how many characters should your password have? Please enter a number between 8 and 128.', '8'));
  if (value <= 128 && value >= 8) {
    return value;
  }
  alert('Please enter a valid value.');
  return false;
};

const promptUser = () => {
  // define starting arrays of characters
  const lowercaseArr = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const uppercaseArr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const numArr = '1234567890'.split('');
  const specArr = '!"$#%&()*+,-./:;<=>?@[/]^_{|}~'.split('');
  let selectedCharArr = [];

  // prompt the user (and validate) and store data
  let lowercaseConfirm = promptLowercase();
  if (!lowercaseConfirm) {
    lowercaseConfirm = promptLowercase();
  }
  let uppercaseConfirm = promptUppercase();
  if (!uppercaseConfirm) {
    uppercaseConfirm = promptUppercase();
  };
  let numConfirm = promptNum();
  if (!numConfirm) {
    numConfirm = promptNum();
  };
  let specConfirm = promptSpec();
  if (!specConfirm) {
    specConfirm = promptSpec();
  };
  let lengthConfirm = promptLength();
  if (!lengthConfirm) {
    lengthConfirm = promptLength();
  };

  console.log(lowercaseConfirm, uppercaseConfirm, numConfirm, specConfirm, lengthConfirm);

  return generatePassword();
};


// Get references to the #generate element
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  const password = promptUser();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log(password);

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
