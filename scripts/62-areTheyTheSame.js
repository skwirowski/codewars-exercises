// ? Exercise from CodeWars: Are they the "same"?, rank 6kyu
/**
 * Given two arrays a and b write a function comp(a, b) that checks whether the two arrays have the "same" elements,
 * with the same multiplicities (the multiplicity of a member is the number of times it appears).
 * "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.
 *
 * Examples:
 * * a = [121, 144, 19, 161, 19, 144, 19, 11]
 * * b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
 * because:
 * * a = [121, 144, 19, 161, 19, 144, 19, 11]
 * * b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
 */

function comp01(array1, array2) {
  if (array1 === null || array2 === null) {
    return false;
  }

  for (const num of array2) {
    const index = array1.indexOf(Math.sqrt(num));

    if (index === -1) {
      return false;
    }

    array1[index] = true;
  }

  return true;
}

function comp(array1, array2) {
  return array1 && array2
    ? array1
        .map((num) => {
          const index = array2.indexOf(num ** 2);

          if (index !== -1) {
            array2.splice(index, 1);

            return true;
          }

          return false;
        })
        .every((el) => el)
    : false;
}

console.log(
  comp(
    [121, 144, 19, 161, 19, 144, 19, 11],
    [11 * 11, 121 * 121, 144 * 144, 19 * 19, 161 * 161, 19 * 19, 144 * 144, 19 * 19]
  )
);

console.log(comp([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 36100, 25921, 361, 20736, 361]));
