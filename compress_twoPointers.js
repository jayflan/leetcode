//What have you learned?:
  //Need two pointers, though for loop 'i' stands in for 
    // charPtr in this case, using numPtr to reset for each
    // sequence.
  //Need two control if scenarios to format for when only
    //one char letter used.  (ex. 't');

    const testStr = "ccaaatsss";// -> '2c3at3s'

    const compress = (s) => {
      let outputStr = '', numPtr = 1;
      
      //iterate through orig string
      for(let i = 0; i < s.length; i++) {
      //use control to ask if next char (i) is diff from curr
        // & slide numPtr up if same, go to output loop if diff
      //i will always increment up, numPtr resets after
        //output used for next sequence
        if(s[i] === s[i + 1]) {
          numPtr++;
        } else if(numPtr === 1) {
          outputStr += `${s[i]}`;
          numPtr = 1;
        } else {
          outputStr += `${numPtr}${s[i]}`;
          numPtr = 1;
        };
      };
      
      return outputStr;
    };
    
    console.log(compress(testStr));
        