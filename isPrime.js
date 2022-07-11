//What have you learned?: 
  // Either by recursion or for-loop, iterate from 2 through n (or sqrt of n to 
    // get a better Big O)
  //Edge case if n === 1 or n < 2 is good to have

const isPrime = (n, interval = 2) => {
  if(n < 2) return false;
  if(interval > Math.sqrt(n)) return true;
  // if(n % interval === 0) return false;
  if(Number.isInteger(n / interval) === true) return false;
  // if(Number.isInteger(n / interval) === true) return false;
  return isPrime(n, interval + 1)
};