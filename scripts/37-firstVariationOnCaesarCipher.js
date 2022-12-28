//* Helper data

/**
 * English alphabet letters for ciphering use
 */
const alphabetChars = "abcdefghijklmnopqrstuvwxyz";

//* Helper functions

/**
 * Transforms whole string to uppercase
 * @param { string } lowerCaseString
 * @returns { string }
 */
const transformStringToUpperCase = (lowerCaseString) =>
  lowerCaseString
    .split("")
    .map((char) => char.toUpperCase())
    .join("");

/**
 * Slices specified number of characters from the beginning of the given string and places them at the end
 * @param { string } string
 * @param { number } shift - number of letters to shift
 * @returns { string }
 */
const shiftCharacters = (string, shift) => {
  const fixedStringSlice = string.slice(shift);
  const shiftedStringSlice = string.slice(0, shift);

  return fixedStringSlice + shiftedStringSlice;
};

/**
 * Slices specified number of characters from the end of the given string and places them at the beginning
 * @param { string } string
 * @param { number } shift - number of letters to shift
 * @returns { string }
 */
const unshiftCharacters = (string, shift) => {
  const fixedStringSlice = string.slice(0, -shift);
  const unshiftedStringSlice = string.slice(-shift);

  return unshiftedStringSlice + fixedStringSlice;
};

/**
 * Finds index of first occurrence of a specified character in given string
 * @param { string } char - character searched in string
 * @param { string } string - searched string
 * @returns { number } - index
 */
const findCharacterIndex = (char, string) => string.indexOf(char);

/**
 * Finds rounded up quotient of divising given string by specified divisor
 * @param { string } string - string to divide
 * @param { number } divisor - number to divide given string by
 * @returns { number } - rounded up quotient
 */
const findDivision = (string, divisor) => Math.ceil(string.length / divisor);

//* Main functions

/**
 * Performs ciphering given string by shifting each character by shift value increasing by 1 each iteration
 * @param { string } inputString - string to cipher
 * @param { string } baseString - letters sequence for ciphering use eg. english alphabet
 * @param { number } shift - initial characters shift size
 * @param { function } shiftCallback - callback function; one of base string modification functions: shiftCharacters or unshiftCharacters
 * @returns { string } - ciphered string
 */
const switchCharacters = (inputString, baseString, shift, shiftCallback) => {
  const upperCaseBaseString = transformStringToUpperCase(baseString);
  const iterations = inputString.length;
  const maxShift = baseString.length - 1;
  let switchedString = "";
  let shiftIncrement = shift;

  for (let i = 0; i < iterations; i += 1) {
    const modifier = shiftCallback(baseString, shiftIncrement);
    const lowerCaseCheck = findCharacterIndex(inputString[i], baseString);
    const upperCaseCheck = findCharacterIndex(inputString[i], upperCaseBaseString);

    if (lowerCaseCheck !== -1) {
      switchedString += modifier[lowerCaseCheck];
    } else if (upperCaseCheck !== -1) {
      switchedString += transformStringToUpperCase(modifier)[upperCaseCheck];
    } else {
      switchedString += inputString[i];
    }

    shiftIncrement >= maxShift ? (shiftIncrement = 0) : (shiftIncrement += 1);
  }

  return switchedString;
};

/**
 * Divides given string into specified number of parts that has subsequently non-increasing lengths
 * @param { string } string - string to divide
 * @param { number } parts - number of parts to divide string to
 * @returns { Array } - array of string parts
 */
const divideString = (string, parts) => {
  const divisor = findDivision(string, parts);
  const stringPartsArray = [];
  let repeats = parts;

  for (let i = 0; repeats > 0; i += divisor) {
    const part = string.substr(i, divisor) || "";
    stringPartsArray.push(part);
    repeats -= 1;
  }

  return stringPartsArray;
};

/**
 * Executes ciphering and division of given string using specified initial shift value
 * @param { string } s - string to perform ciphering and division on
 * @param { number } shift - initial characters shift size
 * @returns { Array } - array of divided string parts
 */
const movingShift = (s, shift) => {
  const cipheredString = switchCharacters(s, alphabetChars, shift, shiftCharacters);
  return divideString(cipheredString, 5);
};

/**
 * Executes deciphering and joining of given array using specified initial shift value
 * @param { Array } arr - array to perform deciphering and division on
 * @param { number } shift - initial characters shift size
 * @returns { string } - complete string including deciphered message
 */
const demovingShift = (arr, shift) => {
  const inputStringFromArray = arr.join("");
  return switchCharacters(inputStringFromArray, alphabetChars, shift, unshiftCharacters);
};

export default {
  alphabetChars,
  transformStringToUpperCase,
  shiftCharacters,
  unshiftCharacters,
  findCharacterIndex,
  switchCharacters,
  findDivision,
  divideString,
  movingShift,
  demovingShift,
};
