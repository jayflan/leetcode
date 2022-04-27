
const maxProduct = (numArr) => {
  let result = Math.max(...numArr); // need input max for later, if final outcome goes negative
  let currMinProd = 1; // set min value to 1 to be first prod of first input element
  let currMaxProd = 1; // set max in same manner as min

  if(numArr.length < 2) return numArr; //edgecase if input arr is 1 or no values
    
  for(let i = 0; i < numArr.length; i++) { // iterate once over arr & calc mins/maxes prods for each elem
    const currElem = numArr[i];
    
    if(currElem === 0) currMinProd, currMaxProd = 1, 1;  // reset min/max vars if they go negative
    
    const tmpMax = currMaxProd * currElem // temp variable gets prod of curr max against curr element
    console.log('result: ',result,'tmpMax: ', tmpMax, 'currMinProd: ', currMinProd, 'currMaxProd: ', currMaxProd)

     // if currElem product is max against 1 of 3 types, set currMax to that product
    currMaxProd = Math.max(currElem * currMaxProd, currElem * currMinProd, currElem)
    // if currElem product is min against 1 of 3 types, set currMin to that product
    currMinProd = Math.min(tmpMax, currElem * currMinProd, currElem)
    // set result to max of either the currMax outcome OR the input arr max
      // why?: incase currMax outcome is negative, go w/ input max value 
    result = Math.max(result, currMaxProd);    

  };
  return result;
};

// console.log(maxProduct([2,3,-2,4])) // output: 6
// console.log(maxProduct([3,-1,4]))  //output: 4
console.log(maxProduct([-2,3,-4])); //output: 24