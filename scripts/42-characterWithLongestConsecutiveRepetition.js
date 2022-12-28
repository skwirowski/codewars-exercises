// ? Exercise from CodeWars: Character with longest consecutive repetition, rank 6kyu
/**
 * For a given string s find the character c with longest consecutive repetition and return: [c, l]
 * where l is the length of the repetition.
 * If there are two or more characters with the same l return the first in order of appearance.
 */

function longestRepetition(s) {
  const inputStringLength = s.length;
  let longestString = "";
  let currentString = "";
  let counter = 0;

  for (let i = 0; i < inputStringLength; i += 1) {
    if (!counter) {
      currentString += s[i];
      counter += 1;
    }
    if (s[i] === s[i + 1]) {
      currentString += s[i + 1];
      counter += 1;
    } else {
      if (currentString.length > longestString.length) {
        longestString = currentString;
      }
      counter = 0;
      currentString = "";
    }
  }

  return [longestString[0] || "", longestString.length];
}

const exampleStrings = ["aaaabb", "bbbaaabaaaa", "cbdeuuu900", "abbbbb", "aabb", "", "ba"];

for (let i = 0; i < exampleStrings.length; i += 1) {
  console.log(longestRepetition(exampleStrings[i]));
}
