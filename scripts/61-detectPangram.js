// ? Exercise from CodeWars: Detect Pangram, rank 6kyu
/**
 * A pangram is a sentence that contains every single letter of the alphabet at least once.
 * For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram,
 * because it uses the letters A-Z at least once (case is irrelevant).
 *
 * Given a string, detect whether or not it is a pangram.
 * Return True if it is, False if not. Ignore numbers and punctuation.
 */

function isPangram(string) {
  const filteredChars = string.match(/[a-zA-Z]/g);
  const alphabetIndexes = new Array(26).fill(0);

  filteredChars.forEach((char) => {
    const alphabetIndex = char.toLowerCase().charCodeAt(0) - 97;
    alphabetIndexes[alphabetIndex] += 1;
  });

  return alphabetIndexes.every((char) => char > 0);
}

console.log(isPangram("The quick brown fox jumps over the lazy dog1."));
