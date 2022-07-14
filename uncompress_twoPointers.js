//What did you learn about two pointers?
  // - Need two, adjustable variables, that slide like a
  // window.  In this case, use control to slide a ptr
  // past nums to establish the num/slice range
  //  - Then use pointer at letter for output.
  //  - Don't forget to reset both pointers for next eval
  // sequence.
  // Using O(n * m) mostly, maintaining the original string
  // or using an arr then converting backto string for output.

  const testStr = "2c3a1t"; // -> 'ccaaat'

  const uncompress = (s) => {
    let outputStr = []; // <-- can be string or arr
    let ptrI = 0;
    let ptrJ = 0;
  //use loop or incrementer variables (pointers)
    for(let i = 0; i < s.length; i++) {
    //slide pointers up elements(chars)
      //use control to increment pointers
      if(s[ptrJ] >= '0' && s[ptrJ] <= '9') ptrJ++;
    //check j pointer for char & initiate output sequence
      if(s[ptrJ] >= 'a' && s[ptrJ] <= 'z') {
      //convert slice of i to j into number
        const numSlice = s.slice(ptrI, ptrJ) * 1;
      //use loop to add j pointer (char) to output variable
        for(let j = 1; j <= numSlice; j++ ) {
          outputStr.push(s[ptrJ]);
        };
        //slide ptrJ up to ready next sequence
        ptrJ++;
        //slide ptrI up to same slot as ptrJ for next sequence
        ptrI = ptrJ;
        
      };
    };
    return outputStr.join('');
  };
  
  console.log(uncompress(testStr));
 