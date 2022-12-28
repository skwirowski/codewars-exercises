// ? Exercise from CodeWars: Cryptanalysis Word Patterns, rank 7kyu

/**
 * A word pattern is a description of the patterns of letters occurring in a word,
 * where each letter is given an integer code in order of appearance.
 * So the first letter is given the code 0, and second is then assigned 1
 * if it is different to the first letter or 0 otherwise,and so on.
 *
 * Your task is to return the word pattern for a given word.
 * All words provided will be non-empty strings of alphabetic characters only, i.e. matching the regex "[a-zA-Z]+".
 *
 * wordPattern("hello"), "0.1.2.2.3";
 * wordPattern("heLlo"), "0.1.2.2.3";
 * wordPattern("helLo"), "0.1.2.2.3";
 * wordPattern("Hippopotomonstrosesquippedaliophobia"), "0.1.2.2.3.2.3.4.3.5.3.6.7.4.8.3.7.9.7.10.11.1.2.2.9.12.13.14.1.3.2.0.3.15.1.13"
 */

function wordPattern01(word) {
  const wordLength = word.length;
  const charCodes = {};
  let pattern = [];
  let order = 0;

  for (let i = 0; i < wordLength; i += 1) {
    const char = word[i].toLowerCase();
    const charCode = charCodes[char];

    if (charCode !== undefined) {
      pattern.push(charCode);
    } else {
      charCodes[char] = order;
      pattern.push(order);

      order += 1;
    }
  }

  return pattern.join(".");
}

console.log(wordPattern01("hello"));

function wordPattern(word) {
  const lowerCaseWord = word.toLowerCase();
  const charCodes = [...new Set(lowerCaseWord)];

  return lowerCaseWord
    .split("")
    .map((char) => charCodes.indexOf(char))
    .join(".");
}

console.log(wordPattern("hellO"));
