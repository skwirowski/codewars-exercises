// ? Exercise from CodeWars: Recursion #2 - Fibonacci, rank 7kyu
// ? Exercise from CodeWars: Memoized Fibonacci, rank 5kyu

const memoize = {};

const fibonacci = (n) => {
  if (memoize[n]) {
    return memoize[n];
  }

  if (n === 0) {
    return 0;
  }

  if (n === 1) {
    return 1;
  }

  const result = fibonacci(n - 1) + fibonacci(n - 2);
  memoize[n] = result;

  return result;
};

console.log(fibonacci(50));
