// ? Exercise from CodeWars: Simple decrypt algo, rank 6kyu
/**
 * You'll be given a string of random characters (numbers, letters, and symbols).
 * To decode this string into the key we're searching for:
 * * (1) count the number occurrences of each ascii lowercase letter, and
 * * (2) return an ordered string, 26 places long, corresponding to the number of occurrences
 * * for each corresponding letter in the alphabet.
 *
 * Remember, the string returned should always be 26 characters long, and only count lowercase letters.
 * Note: You can assume that each lowercase letter will appear maximum of 9 times in the input string.
 */

function decrypt(encryption) {
  const arr = new Array(26).fill(0);

  encryption.match(/[a-z]/g).forEach((el) => {
    arr[el.charCodeAt(0) - 97] += 1;
  });

  return arr.join("");
}

console.log(decrypt("$aaaa#bbb*cc^fff!z")); // '43200300000000000000000001'
console.log("a".charCodeAt(0));
