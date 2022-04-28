var findMin = function(nums) {

  if(nums.length < 2) return nums[0]; // edge if only one elem
  if(nums[nums.length - 1] > nums[0]) return nums[0]; //edge if all elems rotated

  for(let i = 1; i < nums.length; i++) {  // iterate to find pivot point
    let prevElem = nums[i - 1], currElem = nums[i];

    if(currElem < prevElem) {
      // result = nums[i];
      return nums[i];
      // break;
    };
  };

} // Fn end

console.log(findMin([3,4,5,1,2]))
// console.log(findMin([4,5,6,7,0,1,2]))
// console.log(findMin([11,13,15,17]))
// console.log(findMin([1]))