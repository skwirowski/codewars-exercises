// ? Exercise from CodeWars: RGB To Hex Conversion, rank 5kyu
/**
 * Complete the rgb function so that passing in RGB decimal values will result in a hexadecimal representation being returned.
 * Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.
 *
 * Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.
 */

const round = (num) => (num < 0 ? 0 : num > 255 ? 255 : num);

function rgb(r, g, b) {
  return [...arguments].map((arg) => round(arg).toString(16).toUpperCase().padStart(2, "0")).join("");
}

console.log(rgb(0, 0, 0));
console.log(rgb(0, 0, -20));
console.log(rgb(300, 255, 255));
console.log(rgb(173, 255, 47));
console.log(rgb(95, 164, 6));
