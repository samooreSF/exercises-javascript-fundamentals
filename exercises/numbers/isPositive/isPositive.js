/**
 * Returns true if the given number is positive (greater than 0) and false otherwise.
 *
 * @param {number} num The input number
 * @returns {boolean} True if num is positive and false otherwise
 */
function isPositive(num) {
 
  if(num > 0){
      return "True";
  }
  else{
      return "False";
}
}
console.log(isPositive(-23));
console.log(isPositive(5));
console.log(isPositive(-3));

}

if (require.main === module) {
  console.log('Running sanity checks for isPositive:');

  console.log(isPositive(0));
  console.log(isPositive(1));
  console.log(isPositive(-1));
  console.log(isPositive(-100.20));
}

module.exports = isPositive;
