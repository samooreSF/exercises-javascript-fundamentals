/**
 * Returns true if the given positive integer is prime and false otherwise.
 *
 * A positive integer is prime if it its only factors are 1 and itself.
 *
 * See https://en.wikipedia.org/wiki/Prime_number
 *
 * Primes: 2, 3, 5, 7, 11, 13, 17, ...
 *
 * @param {number} num - The positive integer whose primality we want to check
 * @returns {boolean} True if num is prime and false otherwise
 */
function isPrime(num) {
  /*
    Your code goes here.

    Work out one version that works and don't worry about performance.

    If you're having trouble working it out in code, step out of JS-land
    and use pen/paper, index cards, etc. — anything that helps you think
    about it without getting stuck in JavaScript syntax.
  */

 for(var i = 2; i < num; i++) {//need to start at 2 because 1 goes into every prime. 
                                //The code will stop when the i value is larger than num ;
  if(num % i === 0) {
      return false;
  }
}
return num > 1; //true if prime 
}


if (require.main === module) {
  console.log('Running sanity checks for isPrime:');

  console.log(isPrime(12) === false);
  console.log(isPrime(2) === true);
  console.log(isPrime(4) === false);

  // Your own sanity checks go here
}

module.exports = isPrime;
