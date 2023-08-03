function fibonacci(num) {
  const memo = new Array(51).fill(-1); // Initialize an array to store computed Fibonacci numbers

  function fibHelper(n) {
    if (n <= 1) {
      return n;
    }

    if (memo[n] !== -1) {
      return memo[n];
    }

    memo[n] = fibHelper(n - 1) + fibHelper(n - 2);
    return memo[n];
  }

  return fibHelper(num);
}

module.exports = fibonacci;
