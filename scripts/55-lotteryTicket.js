// ? Exercise from CodeWars: Lottery Ticket, rank 6kyu
/**
 * Given a lottery ticket (ticket), represented by an array of 2-value arrays, you must find out if you've won the jackpot.
 * To do this, you must first count the 'mini-wins' on your ticket. Each subarray has both a string and a number within it.
 * If the character code of any of the characters in the string matches the number, you get a mini win.
 * Note you can only have one mini win per sub array.
 *
 * Once you have counted all of your mini wins, compare that number to the other input provided (win).
 * If your total is more than or equal to (win), return 'Winner!'. Else return 'Loser!'.
 *
 * All inputs will be in the correct format. Strings on tickets are not always the same length.
 */

function bingo01(ticket, win) {
  let miniWins = 0;

  for (let item of ticket) {
    const [str, num] = item;

    for (let char of str) {
      if (char.charCodeAt(0) === num) {
        miniWins += 1;
      }

      if (miniWins >= win) {
        return "Winner!";
      }
    }
  }

  return "Loser!";
}

console.log(
  bingo01(
    [
      ["ABC", 65],
      ["HGR", 74],
      ["BYHT", 74],
    ],
    2
  )
);

// Recursive approach

function miniWins(ticket) {
  if (ticket.length === 0) {
    return 0;
  }

  let wins = 0;
  const [str, num] = ticket[0];

  for (let char of str) {
    if (char.charCodeAt(0) === num) {
      wins += 1;
    }
  }

  return miniWins(ticket.slice(1)) + wins;
}

function bingo(ticket, win) {
  return miniWins(ticket) >= win ? "Winner!" : "Loser!";
}

console.log(
  bingo(
    [
      ["SRQ", 75],
      ["UHJHUFJH", 74],
      ["UFMXHN", 69],
    ],
    2
  )
);
