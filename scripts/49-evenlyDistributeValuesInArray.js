// ? Exercise from CodeWars: Evenly distribute values in array, rank 7kyu
/**
 * Your distributeEvenly function will take an array as an argument and needs to return a new array with the values distributed evenly.
 */

// input: [g,a,a,e,k,a,d,f,i,k,j,k,i,h,i,j,f,b,h,a,j,i,f,k,k,k,b,c,e,h]
// output: [g,a,e,k,d,f,i,j,h,b,c,a,e,k,f,i,j,h,b,a,k,f,i,j,h,a,k,i,k,k]

function distributeEvenly(arr) {
  const order = [...new Set(arr)];
  const result = [];

  while (arr.length > 0) {
    order.forEach((char) => {
      const charIndex = arr.indexOf(char);

      if (charIndex >= 0) {
        result.push(char);
        arr.splice(charIndex, 1);
      }
    });
  }

  return result;
}

console.log(distributeEvenly(['g','a','a','e','k','a','d','f','i','k','j','k','i','h','i','j','f','b','h','a','j','i','f','k','k','k','b','c','e','h'])); // prettier-ignore
