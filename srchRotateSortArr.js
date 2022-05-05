/*
  Input: 
    sorted array of nums, possibly rotated (no dups) & pivot pt unknown if rotated
    target num
  OutPut: 
    array index of target num value, if exists
    value of -1 if target num value is NOT an array-element value
  Efficiency: 
    must be O(log n) which seems like binary search
  Flow: control & components needed:
    result variable 
    leftIdxPointer
    rightIdxPointer
    midIdxPointer
    while loop to iterate binary search
    may be rotated, find a pivot via binary search
    check if target is in range, then search that direction (left/right)
    control example:
      Eval midpoint against left & right pointers against target
      ex.  Is target < mid & < left? = look left
      ex.  Is target > mid & < left? = look right
      
*/

const search = (nums, target) => {

  const calcMidPt = () => Math.round((rightPtrIdx + leftPtrIdx) / 2)
  
  let leftPtrIdx = 0, rightPtrIdx = nums.length - 1, midPtrIdx = calcMidPt(); 

  while(leftPtrIdx <= rightPtrIdx) {
// console.log('lPt: ', leftPtrIdx, 'mPt: ', midPtrIdx, 'rPt: ', rightPtrIdx )
    
// if a pointer's value is a target, target idx found!
    if(nums[leftPtrIdx] === target) return leftPtrIdx;
    if(nums[rightPtrIdx] === target) return rightPtrIdx;
    if(nums[midPtrIdx] === target) return midPtrIdx;

  //Here's the sauce!!!!:

  //Find a starting portion, based on if sorted (no pivot point or path of least resistance)
    //look at left sorted portion
      //if target here, then search left, if no search right
    //look at right sorted portion
      // if target here, then search right, if no search left

    if(nums[leftPtrIdx] < nums[midPtrIdx]) { // if left portion sorted
      if(target > nums[leftPtrIdx] && target < nums[midPtrIdx]) { 
        rightPtrIdx = midPtrIdx - 1  //search left
        midPtrIdx = calcMidPt();
      } else {
        leftPtrIdx = midPtrIdx + 1  //search right
        midPtrIdx = calcMidPt();
      }
    } else {
      if(target > nums[midPtrIdx] && target < nums[rightPtrIdx]) { // if right portion sorted
        leftPtrIdx = midPtrIdx + 1  //search right
        midPtrIdx = calcMidPt();
      } else {
        rightPtrIdx = midPtrIdx - 1  //search left
        midPtrIdx = calcMidPt();
      }
    }

  };

  return -1

};

console.log(search([4,5,6,7,0,1,2], 0)); // Output: 4
console.log(search([4,5,6,7,0,1,2], 3)); // Output: -1
console.log(search([4,5,6,7,0,1,2], 1)); // Output: 5
console.log(search([1], 0)); // Output: -1
console.log(search([1, 3], 2)); // Output: -1 
console.log(search([1, 3, 5], 0)); // Output: -1 
console.log(search([7,8,1,2,3,4,5,6], 2)); // Output: 3
console.log(search([8,1,2,3,4,5,6,7], 6));// Output: 6
