// ? Exercise from CodeWars: Last Survivor, rank 7kyu
/**
 * You are given a string of letters and an array of numbers.
 * The numbers indicate positions of letters that must be removed, in order, starting from the beginning of the array.
 * After each removal the size of the string decreases (there is no empty space).
 * Return the only letter left.
 * */

function lastSurvivor01(letters, coords) {
  const lettersArr = letters.split("");
  const coordsLength = coords.length;

  for (let i = 0; i < coordsLength; i += 1) {
    lettersArr.splice(coords[i], 1);
  }

  return lettersArr.join("");
}

function lastSurvivor(letters, coords) {
  const arr = letters.split("");

  coords.forEach((num) => arr.splice(num, 1));

  return arr.join("");
}

console.log(lastSurvivor("abc", [1, 1]));
