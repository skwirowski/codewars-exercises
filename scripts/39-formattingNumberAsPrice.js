//* Helper functions

/**
 * Checks if given parameter is type of number otherwise returns false
 * @param { any } param
 * @returns { boolean }
 */
const isParameterValidNumber = (param) => typeof param === "number";

/**
 * Returns true if given number is negative otherwise returns false
 * @param { number } number
 * @returns { boolean }
 */
const isNumberNegative = (number) => number < 0;

/**
 * Removes first character from given string which should be minus sign
 * @param { string } string
 * @returns { string } - string without first character
 */
const removeMinusSign = (string) => string.slice(1);

/**
 * Changes given number to type of string
 * @param { number } number
 * @returns { string }
 */
const changeNumberToString = (number) => number.toString();

/**
 * Checks if given string includes dot symbol to determine if number is float point
 * @param { string } string - represents number as string type
 * @returns { boolean } - true if finds dot symbol, otherwise false
 */
const isFloatPoint = (string) => string.includes(".");

/**
 * Returns dot symbol and at most two first fraction digits from given string
 * @param { string } string - represents number as string type
 * @returns { string } - one or two first fraction digits
 */
const getFirstTwoFractionDigits = (string) => {
  const dotIndex = string.indexOf(".");

  return string.substr(dotIndex, 3);
};

/**
 * Checks if given fraction string is complete meaning it's length equals 3
 * @param { string } fraction - dot symbol and at most two first fraction digits
 * @returns { boolean } - true if string length equals 3, otherwise false
 */
const isFractionPartComplete = (fraction) => fraction.length === 3;

/**
 * Returns all whole part digits from given string
 * @param { string } string - represents number as string type
 * @returns { string } - whole part digits
 */
const getWholePartDigits = (string) => {
  const dotIndex = string.indexOf(".");

  return string.slice(0, dotIndex);
};

/**
 * Divides given string into three part pieces array and remaining part piece
 * @param { strign } whole - whole part digits
 * @returns { Array }
 */
const divideStringIntoPartsArray = (whole) => {
  const iterations = whole.length;
  let temporaryString = "";
  const dividedStringArray = [];

  for (let i = 1; i <= iterations; i += 1) {
    const singleCharacter = whole.substr(iterations - i, 1); // gets single string character starting from the end
    temporaryString = singleCharacter + temporaryString;

    if (temporaryString.length === 3) {
      dividedStringArray.unshift(temporaryString); // add three characters to the beginning of an array
      temporaryString = ""; // reset temporaryString value
    }

    if (i === iterations && temporaryString.length > 0) {
      dividedStringArray.unshift(temporaryString); // add remaining characters to the beginning of an array
    }
  }

  return dividedStringArray;
};

// * Main functions

/**
 * Returns fraction part of price string consisting of two digits and dot symbol
 * @param { string } string - represents number as string type
 * @returns { string } - dot symbol and two digits
 */
const createFractionPart = (string) => {
  if (isFloatPoint(string)) {
    const fractionDigits = getFirstTwoFractionDigits(string);
    return isFractionPartComplete(fractionDigits) ? fractionDigits : `${fractionDigits}0`;
  }
  return ".00";
};

/**
 * return whole part of price string consisting of digits and comma symbol every three digits
 * @param { string } string - represents number as string type
 * @returns { string } - whole digits divided by comma symbol every three digits
 */
const createWholePart = (string) => {
  const wholeDigits = isFloatPoint(string) ? getWholePartDigits(string) : string;

  if (wholeDigits.length <= 3) {
    return wholeDigits;
  }

  return divideStringIntoPartsArray(wholeDigits).join(",");
};

/**
 * Formats given number to a price format
 *  - numbers use standard comma for every 3 numbers
 *  - numbers use dot to separate the cents
 *  - cents are truncated to 2 decimals
 *  - decimal part of the number always have 2 decimal characters
 *  - evaluates also negative numbers
 *  - returns 'NaN' string if given parameter is not a valid number
 * @param { number } number
 */
const numberToPrice = (number) => {
  if (!isParameterValidNumber(number)) {
    return "NaN";
  }

  let numberRepresentationString = changeNumberToString(number);
  let prefix = "";

  if (isNumberNegative(number)) {
    numberRepresentationString = removeMinusSign(numberRepresentationString);
    prefix = "-";
  }

  const fraction = createFractionPart(numberRepresentationString);
  const whole = createWholePart(numberRepresentationString);

  return prefix + whole + fraction;
};

export default {
  isParameterValidNumber,
  isNumberNegative,
  removeMinusSign,
  changeNumberToString,
  isFloatPoint,
  getFirstTwoFractionDigits,
  isFractionPartComplete,
  getWholePartDigits,
  divideStringIntoPartsArray,
  createFractionPart,
  createWholePart,
  numberToPrice,
};
