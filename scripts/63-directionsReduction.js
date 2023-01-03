// ? Exercise from CodeWars: Directions Reduction, rank 5kyu
/**
 * Write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed.
 *
 */

function isReduction(currDir, nextDir) {
  switch (currDir) {
    case "NORTH":
      return nextDir === "SOUTH";
    case "SOUTH":
      return nextDir === "NORTH";
    case "WEST":
      return nextDir === "EAST";
    case "EAST":
      return nextDir === "WEST";
  }
}

function dirReduc(arr) {
  let index = 0;
  let clearLoop = 0;

  while (clearLoop <= arr.length) {
    const curr = arr[index];
    const next = arr[index + 1];

    if (isReduction(curr, next)) {
      arr.splice(index, 2);
      index = 0;
      clearLoop = 0;
    } else {
      clearLoop += 1;
      index += 1;
    }
  }

  return arr;
}

console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]));
console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]));
console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]));
