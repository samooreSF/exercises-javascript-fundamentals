/**
 * Returns true if the given number is negative (less than 0) and false otherwise.
 *
 * @param {number} num The input number
 * @returns {boolean} True if num is negative and false otherwise
 */
function isNegative(num) {
    if(num < 0){
        return "True";
    }
    else{
        return "False";
  }
  }

  if (require.main === module) {
    console.log('Running sanity checks for isNegative:');
  
    console.log(isNegative(0));
    console.log(isNegative(1));
    console.log(isNegative(-1));
    console.log(isNegative(-100.20));
  }
  
  module.exports = isNegative;
