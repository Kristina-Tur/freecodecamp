// DESCRIPTION:
// Create a function with two arguments that will return an array of the first n multiples of x.

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array or list(depending on language).

//   Examples
// countBy(1, 10) === [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// countBy(2, 5) === [2, 4, 6, 8, 10]



function countBy(x, n) {
  let z = [];
  for (let i = 1; i <= n; i++) {// countBy(1, 10) - единица (1) будет умножаться на саму себя 10 раз. 1*1, 1*2, 1*3 и т.д.
// countBy(2, 5) - двойка будет умножаться на саму себя 5 раз. 2*1=2, 2*2=4, 2*3=6, 2*4=8 и т.д.
    z.push(x * i);
  }
  return z
}