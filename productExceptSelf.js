//sudo code problem 'restated'
  //Use 'I'nput 'O'output 'C'onditions to help think of solution

  /*
    I: a number[] which is the nums argument of a function
    O: a number[] which is the product of all 'nums' elements except for itself
    C: must be time O(n) and CANNOT use division
  */

    /*
    Why not use division?
      Could get each product solution by dividing by total product of elems
      ex. 4*3*2*1 = 24, 
      24 / 4 = 6
      24 / 3 = 8
      24 / 2 = 12
      24 / 1 = 24
      [24, 12, 8, 6]
    */

  /*
  How do you solve without dividing?
    Use pointers for elems left/before & right/after current elem when iterating over nums (input) array
    ex. 
    nums = [1, 2, 3, 4]
    
    preFixArr = [1, 1, 2, 6] 
      outline: start w/ 1,   
      nums[0] * 1 = 1, 
      nums[0] * nums[1] = 2, 
      nums[0] * nums[1] * nums[2] = 6
      
      Whats going on here?: summing products of each elem that comes BEFORE current elem in nums input array iteration

    postFixArr = [24, 12, 4, 1] 
      outline: nums[3] * nums[2] * nums[1] = 24,
      nums[2] * nums[3] = 12,
      nums[3] * 1 = 4
      end w/ 1;

      Whats going on here?: summing products of each elem that come AFTER current elem in nums input array interation
  
    Solution/Answer output:

    Now get product between each pointer/fix array:
      preFixArr[0] * postFixArr[0] = 24
      preFixArr[1] * postFixArr[1] = 12
      prefixArr[2] * postFixArr[2] = 8
      prefixArr[3] * postFixArr[3] = 6

      Solution/Answer output = [ 24, 12, 8, 6]!
  */

const testInputArr = [1,2,3,4] // output should be [24, 12, 8, 6]

  //What have you learned?
    // need a left/right pointer, though they are arrays in this case (preFixArr & postFixArr)
    // the pointers will process all products to the elems before/after the current elem of input arr (nums)
    // need to iterate through the input array (nums) twice
      // iterate once for the pre-pointer and again for the post-pointer


var productExceptSelf = function(nums) {
  let answer = [], preFixArr = [], postFixArr = [];

  // iterate forward using preFixArr storage & store subProducts
  for(let i = 0; i < nums.length; i++) {
    if(!preFixArr.length) {
      preFixArr.push(1);
    } else {
      preFixArr.push(preFixArr[i-1] * nums[i-1])
    }
  };

  // iterate backwards using postFixArr storage & store subProducts
  for(let i = nums.length - 1; i > -1; i--) {
    if(!postFixArr.length) {
      postFixArr.push(1);
    } else {
      postFixArr.unshift(postFixArr[0] * nums[i+1])
    }
  };

  // iterate final pass to place final producst in result array
  for(let i = 0; i < nums.length; i++) {
    answer.push(preFixArr[i] * postFixArr[i])
  };

  return answer;

};


console.log(productExceptSelf(testInputArr));

