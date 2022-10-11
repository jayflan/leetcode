// My structy approach:

const intersection = (a, b) => {
  // create a hashMap of a arg (array)
  const mapObjA = a.reduce((accum, currElem, idx) => {
    accum[currElem] = idx;
    return accum;
  },{});
    // create output array
  let outputArr = [];
    // eval hashMap while interating through b arg (array)
  for(let i = 0; i < b.length; i++) {
    const num = b[i];
    if(num in mapObjA) outputArr.push(num);
  };
    // if eval is true, have duplicate, input into output array
  return outputArr.sort();
};

//Structy approach using set:

//using set (pass)

const intersection = (a, b) => {
  const result = [];
  const setA = new Set(a);
  for (let item of b) {
    if (setA.has(item)) {
      result.push(item);
    }
  }
  return result;
};
// n = length of array a, m = length of array b
// Time: O(n+m)
// Space: O(n)