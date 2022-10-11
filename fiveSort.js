//My Structy approach:

const fiveSort = (nums) => {
  // create 2-pointer structure to iterate through nums array
const targetNum = 5;
let leftPtr = 0;
let rightPtr = nums.length - 1;
  // iterate & eval if left ptr is target num (5) & right ptr is NOT 5
while(leftPtr <= rightPtr) {
    // eval if rightPtr is NOT targetNum
      // if true, decrement rightPtr
  if(nums[rightPtr] === targetNum) {
    rightPtr--;
    //if false, then eval leftPtr
  } else if(nums[leftPtr] === targetNum) {
    //if true, swap elements  
    const tempVar = nums[leftPtr];
    nums[leftPtr] = nums[rightPtr]
    nums[rightPtr] = tempVar;
    leftPtr++;
      //ensure pointers shift after evals (rightPtr shifts in eval)
  } else leftPtr++;
  
};

return nums;
};

//Structy approach:

// using two pointers

const fiveSort = (nums) => {
  let i = 0;
  let j = nums.length - 1;
  while (i < j) {
    if (nums[j] === 5) {
      j -= 1;
    } else if (nums[i] === 5) {
      [ nums[i], nums[j] ] = [ nums[j], nums[i] ];
      i += 1;
    } else {
      i += 1;
    }
  }

  return nums;
};

// n = array size
// Time: O(n)
// Space: O(1)