// ? Exercise from CodeWars: Count the smiley faces!, rank 6kyu
/**
 * Rules for a smiling face:
 * * Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
 * * A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
 * * Every smiling face must have a smiling mouth that should be marked with either ) or D
 */

// countSmileys([]                             ), 0
// countSmileys([':D',':~)',';~D',':)']        ), 4
// countSmileys([':)',':(',':D',':O',':;']     ), 2
// countSmileys([';]', ':[', ';*', ':$', ';-D']), 1

//return the total number of smiling faces in the array
function countSmileys(arr) {
  const validFaces = [":-)", ":-D", ":~)", ":~D", ":)", ":D", ";-)", ";-D", ";~)", ";~D", ";)", ";D",]; // prettier-ignore
  let count = 0;

  arr.forEach((face) => {
    if (validFaces.some((validFace) => validFace === face)) {
      count += 1;
    }
  });

  return count;
}

console.log(countSmileys([";]", ":[", ";*", ":$", ";-D"]));
