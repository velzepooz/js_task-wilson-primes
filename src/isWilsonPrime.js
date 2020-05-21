'use strict';

/**
 * Wilson primes satisfy the following condition:
 *
 * 1) Let Num represent a prime number.
 * 2) Then ((Num-1)! + 1) / (Num * Num) should give a whole number.
 *
 * Implement isWilsonPrime function:
 *
 * Function should return true if the given number is a Wilson prime
 *
 * Examples:
 * isWilsonPrime(5)      returns true
 * isWilsonPrime(9)      returns false
 *
 * @param {number} num
 *
 * @return {boolean}
 */
function isPrime(a) {
  if (Number.isInteger(a)) {
    for (let i = 2; i < a; i++) {
      if (a % i === 0) {
        return false;
      }
    }
  } else {
    return false;
  }

  return a > 1;
};

function factorial(n) {
  return (n !== 1) ? n * factorial(n - 1) : 1;
};

function isWilsonPrime(num) {
  if (isPrime(num)) {
    return Number.isInteger((factorial(num - 1) + 1) / Math.pow(num, 2));
  } else {
    return false;
  }
}

module.exports = isWilsonPrime;
