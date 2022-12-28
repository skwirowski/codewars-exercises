// Mongodb ObjectID Exercise
/**
 ** To do's:
 *
 *? Verify if given string is valid MongoDB ID
 *  - check if it's type of string
 *  - check if is 24 characters long
 *  - check if includes invalid characters:
 *    + out of a-f range
 *    + not numbers
 *    + upper case characters
 *    + not letters (special characters)
 *  - return true of false
 *? Find timestamp from the valid MongoDB ID
 *  - get first 8 characters from id string
 *  - parse hexadecimal number to decimal number
 *  - return date
 */

/**
 ** Notes:
 *
 ** MongoDB ObjectId is hexadecimal 12-byte string value that consists of:
 *  - 4-byte timestamp value measured in seconds since the Unix epoch
 *  - 5-byte random value
 *  - 3-byte incrementing counter, initialized to a random value
 ** Hexadecimal system uses:
 *  - '0-9' symbols to represent values zero to nine
 *  - 'a-f' symbols to represent values ten to fifteen
 *  - each hexadecimal digit represents four binary digits which is half a byte
 */

function isString(param) {
  return typeof param === "string";
}

function isValidLength(string) {
  return string.length === 24;
}

function hasInvalidChars(string) {
  return string.match(/[A-Zg-z~!@#$%^&*()_+`\-=[\]{};:;'",./<>?|\\]/) !== null; // match() returns null if no match is found
}

function isObjectIdValid(param) {
  if (!isString(param)) return false;
  if (!isValidLength(param)) return false;
  if (hasInvalidChars(param)) return false;

  return true;
}

function getFirstEightCharactersFromString(string) {
  return string.slice(0, 8);
}

function parseHexTimestampToDecimal(string) {
  const timestampInSeconds = parseInt(string, 16); // timestamp value measured in seconds since the Unix epoch

  return timestampInSeconds * 1000; // timestamp in milliseconds
}

function getDateFromTimestamp(timestamp) {
  return new Date(timestamp);
}

function createTimestamp(string) {
  const timestampHex = getFirstEightCharactersFromString(string);
  const timestampDec = parseHexTimestampToDecimal(timestampHex);

  return getDateFromTimestamp(timestampDec);
}

function isTimestampValid(param) {
  if (!isObjectIdValid(param)) return false;

  return createTimestamp(param);
}

// eslint-disable-next-line no-unused-vars
const Mongo = {
  isValid: (s) => isObjectIdValid(s),
  getTimestamp: (s) => isTimestampValid(s),
};

// eslint-disable-next-line no-unused-vars
const exampleValidObjectId = "507f1f77bcf86cd799439011";

/**
 * interesting solution:
 *
 * var Mongo = {
 * isValid: function(s){
 *   return /^[a-f\d]{24}$/.test(s);
 * },
 * getTimestamp: function(s){
 *   return this.isValid(s) && new Date(parseInt(s.substr(0, 8), 16) * 1000);
 * }
 *}
 */
