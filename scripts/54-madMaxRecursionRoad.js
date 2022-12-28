// ? Exercise from CodeWars: Mad Max: Recursion Road, rank 6kyu
/**
 * Let's replace the Math.max function with our own solution that uses recursion! Yay!
 * Write a function called max that takes one argument, an array, and returns the maximum value of that array.
 *
 * Rules:
 * * You cannot use Math.max (duh!)
 * * You can only use const to declare any variables
 * * You cannot use any loops like for or while
 * * You cannot use any other argument than the one passed to the function
 * * If the array is empty then return -Infinity, just like with Math.max.apply(null, [])
 * * You cannot use any Array.prototype methods like forEach, map, filter, or reduce
 */

function max01(array) {
  const maxValue = [-Infinity];
  const firstElement = array[0];
  const remainingArr = array.slice(1, array.length);

  if (firstElement > maxValue[0]) {
    maxValue[0] = firstElement;
  }

  if (remainingArr.length > 0) {
    const currValue = max01(remainingArr);

    if (currValue > maxValue[0]) {
      return currValue;
    }
  }

  return maxValue[0];
}

console.log(max01([3, 1, 4, 5, 2]));

/* 
function max(arr) {
  if (!arr.length) 
    return -Infinity;
    
  if (arr.length === 1) 
    return arr[0];
  
  const [a, b] = [arr[0], max(arr.slice(1))];
  return a < b ? b : a;
}
*/

/*
function max(array) {

  if (array.length == 0) return -Infinity;
  const curMax = max(array.slice(1));
  return array[0] > curMax ? array[0] : curMax;
  
}
*/

function max(array) {
  if (array.length === 0) {
    return -Infinity;
  }

  const currMax = max(array.slice(1));

  return array[0] > currMax ? array[0] : currMax;
}

console.log(max([3, 1, 6, 5, 2]));
