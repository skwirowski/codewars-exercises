// ? Exercise from CodeWars: Greatest common divisor, rank 7kyu

/**
 * Find the greatest common divisor of two positive integers.
 * The integers can be large, so you need to find a clever solution.
 * The inputs x and y are always greater or equal to 1,
 * so the greatest common divisor will always be an integer that is also greater or equal to 1.
 */

// ? Euclidean algorithm

function mygcd(x, y) {
  const rest = x % y;

  return rest === 0 ? y : mygcd(y, rest);
}

console.log(mygcd(8, 9));
