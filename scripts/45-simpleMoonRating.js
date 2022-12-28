// ? Exercise from CodeWars: Simple Moon Rating, rank 7kyu

/**
 * Your task is to transform decimal number rating, which is in range 0-10, into 5-moons scale.
 * Your final rating should be rounded to "0.5" (nearest half moon). Input is always valid.
 * Write a function which returns valid rating represented as moons ('o','c','x') in single string.
 * 
 * 'o' - full moon 🌕
 * 'c' - half moon 🌗
 * 'x' - new moon 🌑

 * 0 - X X X X X
 * 1 - C X X X X
 * 2 - O X X X X
 * 3 - O C X X X
 * 4 - O O X X X
 */

// const results = {
//   0: "xxxxx",
//   0.6: "cxxxx",
//   1.5: "oxxxx",
//   3.9: "ooxxx",
//   5: "oocxx",
//   6: "oooxx",
//   7.2: "ooocx",
//   8.7: "ooooc",
//   10: "ooooo",
// };

const verboseSolution = function moonRating(rating) {
  let currRating = Math.round(rating);
  const fullMoon = "o";
  const halfMoon = "c";

  return new Array(5)
    .fill("x")
    .map((newMoon) => {
      if (currRating - 2 >= 0) {
        currRating -= 2;

        return fullMoon;
      }

      if (currRating - 1 >= 0) {
        currRating -= 1;

        return halfMoon;
      }

      return newMoon;
    })
    .join("");
};

console.log(verboseSolution(5));

// ? Exercise from CodeWars: One Line Task: Simple Moon Rating, rank 5kyu

/**
 * Code Limit: code.length < 65 characters.
 */

const moonRating = (x) => ("o".repeat((x += 0.5) >> 1) + ["c"[~x & 1]]).padEnd(5, "x");

console.log(moonRating(7));
