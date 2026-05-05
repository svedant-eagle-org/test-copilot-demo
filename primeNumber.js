/**
 * Checks if a given number is a prime number.
 * @param {number} num - The number to check.
 * @returns {boolean} true if the number is prime, false otherwise.
 */
function isPrime(num) {
  if (num < 2) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;
  const sqrt = Math.sqrt(num);
  for (let i = 3; i <= sqrt; i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}

module.exports = isPrime;
