
/*
// O(n) version, pretty quick, though not good if array is super big
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
*/
/*
//O(log n) version, using recursion/binary search (pointers & pivot point) 
const findMin = (nums) => {

  let rightPointerIdx = nums.length - 1 // start pointer at last elem
  let leftPointerIdx = 0; // start pointer at 1st elem
  let midPointCalcIdx = Math.floor(nums.length / 2); // find midpoint of nums to start binary search

  if(nums.length < 2) return nums;

    // eval if rotation all way around
    //since sorted array, if 1st elem < last, return first elem as arr already 
    //fully rotated around
  if(nums[leftPointerIdx] < nums[rightPointerIdx]) return nums[leftPointerIdx];

  // eval if search to pivot point has completed, which is to 2 elems
  // 
  if(nums.length === 2) { 
    return nums[1]
  }

  if(nums[midPointCalcIdx] >= nums[leftPointerIdx] ) {  // search right
    leftPointerIdx = midPointCalcIdx
    return findMin(nums.slice(midPointCalcIdx, rightPointerIdx + 1))
  } else {    // search left
    rightPointerIdx = midPointCalcIdx;
    return findMin(nums.slice(leftPointerIdx, rightPointerIdx + 1))
  }

}; //Fn end
*/

const findMin = (nums) => {

  let leftPointerIdx = 0; // start pointer at 1st elem
  let rightPointerIdx = nums.length - 1 // start pointer at last elem
  let result = nums[0];

  //core notion: look for pivot point & compare orig. left pointer to new
  // pivot point 'left pointer' and go with lowest value
    //pivot point ends up being midPoint or new leftPointer when 
    // search array is in all assending order.  
      // ex. 4,5,6,7,0,1,2 turns into 0,1,2, which shows pivot pt btw 7 & 0;
        // new search arr is 0,1,2, so then compare min of 4 or 0. & use 0;

  while(leftPointerIdx <= rightPointerIdx) { // iterate if idx placement makes sense
    
    if(nums[leftPointerIdx] < nums[rightPointerIdx] ) {  // leftpt < rightpt means array fully rotated/ pivot pt found
      result = Math.min(result, nums[leftPointerIdx]);  // result is orig. leftPoint, if no pivot pt, or pivot pt (new leftPoint)
      console.log('result 1: ', result)
      break;
    };

    const midPointCalcIdx = Math.round((leftPointerIdx + rightPointerIdx) / 2);
    result = Math.min(result, nums[midPointCalcIdx]);  // change result if midpt is lower val
    console.log('result 2: ', result, 'midPt: ', midPointCalcIdx)
    if(nums[midPointCalcIdx] >= nums[leftPointerIdx]) { //if midpt > left elem (pivot pt), search right
      leftPointerIdx = midPointCalcIdx + 1;
    } else {  // if midpt < left elem (no pivot pt) search left
      rightPointerIdx = midPointCalcIdx - 1;
    }

  };

  return result; // result ends up min of all midpts or original arr left val

}; //Fn end


// console.log(findMin([5,1])) //output: 1
// console.log(findMin([5,1,2])) //output: 1
// console.log(findMin([3,4,5,1,2])) //output: 1
console.log(findMin([4,5,6,7,0,1,2])) //output: 0
// console.log(findMin([11,13,15,17])) //output: 11
// console.log(findMin([1])) //output: 1
// console.log(findMin([2, 1])) //output: 1
// console.log(findMin([2,3,1])); // output: 1