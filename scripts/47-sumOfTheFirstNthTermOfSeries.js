// ? Exercise from CodeWars: Sum of the first nth term of Series, rank 7kyu
/**
 * Your task is to write a function which returns the sum of following series upto nth term(parameter).
 * Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
 *
 * Rules:
 * * You need to round the answer to 2 decimal places and return it as String.
 * * If the given value is 0 then it should return 0.00
 * * You will only be given Natural Numbers as arguments.
 *
 * SeriesSum(1), "1.00"
 * SeriesSum(2), "1.25"
 * SeriesSum(3), "1.39"
 * SeriesSum(4), "1.49"
 */

function seriesSum(n) {
  let sum = 0;
  let divider = 1;

  for (let i = 0; i < n; i += 1) {
    sum += 1 / divider;

    divider += 3;
  }

  return sum.toFixed(2);
}

console.log(seriesSum(3));
