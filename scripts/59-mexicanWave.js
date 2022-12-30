// ? Exercise from CodeWars: Mexican Wave, rank 6kyu
/**
 * Create a function that turns a string into a Mexican Wave.
 * You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up.
 *
 * Rules:
 * * The input string will always be lower case but maybe empty.
 * * If the character in the string is whitespace then pass over it as if it was an empty seat
 *
 * Example:
 * * wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
 * * wave("two words") => ["Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"];
 */

function wave01(str) {
  const result = [];

  for (let i = 0; i < str.length; i += 1) {
    const arr = str.split("");
    const curr = arr[i];

    if (curr !== " ") {
      arr[i] = curr.toUpperCase();

      result.push(arr.join(""));
    }
  }

  return result;
}

console.log(wave01("hello"));

function wave(str) {
  const result = [];

  str.split("").forEach((char, i) => {
    if (char !== " ") {
      const left = str.substring(0, i);
      const right = str.substring(i + 1);
      const current = char.toUpperCase();

      result.push(`${left}${current}${right}`);
    }
  });

  return result;
}

console.log(wave("two words"));
