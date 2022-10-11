// Structy Algo

//My approach:

const pairSum = (numbers, targetSum) => {
  // create hash map array of numbers arg and eval agains targetSum difference
let prevMapObj = {};
  // iterate over numbers arg and eval if matches hash map, if yes then push to outputArr
for(let i = 0; i < numbers.length; i++) {
  const complement = targetSum - numbers[i];
    //REMEMBER: Use 'key in obj' to check key in map object!!!
  if(complement in prevMapObj) return [prevMapObj[complement], i]
    //setup hash map with previous key num & index properties
  prevMapObj[numbers[i]] = i;            
};
};

//Structy approach:

const pairSum = (numbers, targetSum) => {
  const previousNums = {};
  for (let i = 0; i < numbers.length; i += 1) {
    const num = numbers[i];
    const complement = targetSum - num;
    if (complement in previousNums) return [i, previousNums[complement]];
    
    previousNums[num] = i;
  }
};

// n = length of array
// Time: O(n)
// Space: O(n)