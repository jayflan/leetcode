// My approach from Structy:

const pairProduct = (numbers, targetProduct) => {
  // create hash map obj
let prevMapObj = {};
  // iterate over number array & eval if complement dividend in obj
for(let i = 0; i < numbers.length; i++) {
  const complement = targetProduct / numbers[i];
  if(complement in prevMapObj) return [prevMapObj[complement], i];
  // update hash map with current complement/index props if pair not found
  prevMapObj[numbers[i]] = i;
};
};

//Structy Approach:

const pairProduct = (numbers, targetProduct) => {
  const previousNums = {};
  for (let i = 0; i < numbers.length; i += 1) {
    const num = numbers[i];
    const complement = targetProduct / num;
    
    if (complement in previousNums) return [ previousNums[complement], i ];
    
    previousNums[num] = i;
  }
};

// n= length of array
// Time: O(n)
// Space: O(n)

