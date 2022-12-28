// ? Exercise from CodeWars: Build Tower, rank 6kyu
// towerBuilder(1), ["*"]
// towerBuilder(2), [" * ","***"]
// towerBuilder(3), ["  *  "," *** ","*****"]

//? [             spaces
//?   "   *   ", 4 - 1 = 3  1 + 0
//?   "  ***  ", 4 - 2 = 2  2 + 1
//?   " ***** ", 4 - 3 = 1  3 + 2
// ?  "*******", 4 - 4 = 0  4 + 3
//? ]

function towerBuilder01(nFloors) {
  const result = [];

  for (let i = nFloors; i > 0; i -= 1) {
    const space = nFloors - i;
    const stars = i + i - 1;
    let floor = "".padEnd(space, " ");
    floor = floor.padEnd(space + stars, "*");
    floor = floor.padEnd(space + stars + space, " ");

    result.unshift(floor);
  }

  return result;
}

console.log(towerBuilder01(3));

function towerBuilder02(nFloors) {
  return new Array(nFloors).fill("").map((floor, i) => {
    const space = nFloors - i - 1;
    const stars = i + i + 1;
    return floor + " ".repeat(space) + "*".repeat(stars) + " ".repeat(space);
  });
}

console.log(towerBuilder02(3));
