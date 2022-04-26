  //youtube solution using map method for reference
// var twoSum = function(nums, target) {
//   let map = new Map();
//   for(let i = 0; i < nums.length; i++) {
//     let num1 = nums[i];
//     let num2 = target - num1;
//     if(map.has(num2)) {
//       return [map.get(num2), i]
//     } else {
//       map.set(num1, i);
//     }
//   }
// };

  //my solution attempt, it works
  //what did I learn? : can't use a normal obj. as the variable of an integer will not work in this case
    // the 'diff' varaible kept going falsy, in this case, using the .Map method helped to bypass issue
var twoSum = function(nums, target) {
  let prevMap = new Map(); //create hash/map to reference
  for(let i = 0; i < nums.length; i++) {  //iterate over array argument
    let currentNum = nums[i];
    let diff = target - currentNum;  //get difference to compare against arg. array / map
      if( prevMap.has(diff) ) {  //eval if diff num is in map, if true then two-sum is found!
        return [prevMap.get(diff), i];  //when found, return index from map and current arg. arr. elem
      } else prevMap.set(currentNum, i); //load map with val : index for next reference 
  }
};


  //solution of similar problem from FSA reacto solutions
// const twoSum = (array, n) => {
//   // worst case, this object will need
//   // about as much space as the input array
//   const dict = {}

//   for (let i = 0; i < array.length; i++) {
//     const current = array[i]
//     const complement = n - current
//     // We'll check the dict to see if the "complement"
//     // has been previously stored in the dictionary
//     if (dict[complement]) {
//       return [current, complement] // Found it!
//     } else {
//       dict[current] = true
//     }
//   }

//   // Not found :(
//   return []
// }  

console.log(twoSum( [2,7,11,15], 9))