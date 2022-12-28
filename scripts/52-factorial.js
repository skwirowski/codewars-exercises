// ? Exercise from CodeWars: Recursion #1 - Factorial, rank 7kyu

function factorial01(n) {
  if (n <= 1) {
    return 1;
  }

  return n * factorial01(n - 1);
}

console.log(factorial01(5));

const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));

console.log(factorial(5));

// 3! -> 3 * 2 * 1
