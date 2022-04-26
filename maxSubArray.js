// const test = [-2,1,-3,4,-1,2,1,-5,4]; // should output 6
// const test = [1]; // should output 1
// const test = [5,4,-1,7,8]; // should output 23
const test = [8,-19,5,-4,20] // should output 21
// const test = [-2,-1] // should output -1
 
/*
maxSub =  -2, 1,   1, 4,   4, 5,  6,   6, 6     
nums[i] = -2, 1,  -3, 4,  -1, 2,  1,  -5, 4 
currSum = -2, 1,  -2, 4,   3, 5,  6,   1, 5 <-- should be 6!!!!! Gotta fix === return maxSub!! NOT currSum!!!
*/

/*
 maxSumStart =  8, 0, 5, 1
 nums[i] =    -19, 5, -4, 20
 maxSumEnd =    0, 5, 1, 21 <---should be 21!!!! Why?: maxSumEnd is 0, not 8, due to 8 + -19 being neg  
 */ 

//What did you learn?
  //use an accumulator/pointer to stay at a max through iteration then return it
  //use sum variable to sum up subarrays to get their maximums
  //keep eye of negative numbers, as they aren't a factor if sum is negative or lower than accumlator
    // .reduce method attempt worked, though was MUCH slower and used more memory
  //Need to reset currSum to 0 if drops to a negative number
  //Need to remember, you want to return maxSub (array) value, not the sum!!!!!!!
  //maxSub is the accumulator that represents the MAX value of array summation
var maxSubArray = function(nums) {
    let maxSub = nums[0], currSum = 0;
    
    for(let i = 0; i < nums.length; i++) {
      if(currSum < 0) currSum = 0;  //check if currSum is neg, reset it back to 0 if true
      currSum += nums[i];
      maxSub = Math.max(maxSub, currSum);
    };
    return maxSub;
};


// //reduce method version attempt
// const maxSubArray = (nums) => {
//   let curSum = nums[0];
//   return nums.reduce((maxAcc, num) => {
//     if(curSum < 0) curSum = 0;
//     curSum += num;
//     maxAcc = Math.max(maxAcc, curSum);
//     console.log('maxAcc:', maxAcc, 'curSum:', curSum)
//     return maxAcc;
//   })
// };

console.log(maxSubArray(test));