//* Helper functions

/**
 * Gets ASCII code for given character
 * @param { string } string - string of characters
 * @param { number } index - index of string's character to get code for; default 0
 * @returns { number } - ASCII code
 */
const getCharCode = (string, index = 0) => string.charCodeAt(index);

/**
 * Returns true if given number is even otherwise returns false
 * @param { number } number - parity check number
 * @returns { boolean }
 */
const isEven = (number) => number % 2 === 0;

//* Main functions

/**
 * Determines chess board cell's color according to given coordinate's character code and number
 *  -> if char is odd and num is odd - dark color
 *  -> if char is odd and num is even - light color
 *  -> if char is even and num is odd - light color
 *  -> if char is even and num is even - dark color
 * @param { number } charCode - chess board coordinate's character ASCII code
 * @param { number } num - chess board coordinate's number value
 * @returns { string } - chess board cell can be either 'dark color' or 'light color'
 */
const determineCellColor = (charCode, num) => {
  const isCharCodeEven = isEven(charCode);
  const isNumberEven = isEven(num);
  return (isCharCodeEven && isNumberEven) || (!isCharCodeEven && !isNumberEven) ? "dark color" : "light color";
};

/**
 * Determines if both chess board cells are the same color
 * @param { string } cell1 - first chess board cell coordinate, eg. 'A1'
 * @param { string } cell2 - second chess board cell coordinate, eg. 'B3'
 * @returns { boolean }
 */
const chessBoardCellColor = (cell1, cell2) => {
  const firstCellChar = cell1.slice(0, 1);
  const firstCellNum = cell1.slice(-1);
  const secondCellChar = cell2.slice(0, 1);
  const secondCellNum = cell2.slice(-1);

  const firstCharCode = getCharCode(firstCellChar);
  const secondCharCode = getCharCode(secondCellChar);

  const firstCellColor = determineCellColor(firstCharCode, firstCellNum);
  const secondCellColor = determineCellColor(secondCharCode, secondCellNum);

  return firstCellColor === secondCellColor;
};

export default {
  getCharCode,
  isEven,
  determineCellColor,
  chessBoardCellColor,
};
