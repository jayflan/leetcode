  //What did you learn:
    //like 'TwoSum', a hashMap/table can be used to store previous values in arr, then referenced for a duplicate
var containsDuplicate = function(nums) {
  let prevValStorage = new Map();  //store previous values in hashTable (map method in this case)
  for(let i = 0; i < nums.length; i++) {
    console.log(prevValStorage)
    if(prevValStorage.has(nums[i])) return true;  //check if duplicate exists between elem-value and hashTable-values
    prevValStorage.set(nums[i], true); // if no duplicates found yet, place elem-value in hashTable
  };
  return false;
};

// console.log(containsDuplicate([1,2,3,1])) // true
console.log(containsDuplicate([1,2,3,4])) // false
