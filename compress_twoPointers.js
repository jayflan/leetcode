const testStr = "ccaaatsss";// -> '2c3at3s'

const compress = (s) => {
  let outputStr = '', numPtr = 0, charPtr = 0;
  
  //iterate through orig string
  for(let i = 0; i < s.length; i++) {
  //use control to ask if next char is diff from curr
  // & slide up if same, go to output loop if diff
    if(s[charPtr] === s[charPtr + 1]) {
      console.log(s[charPtr])
      numPtr++
      charPtr++;
    } else {
      outputStr += `${numPtr}${s[charPtr]}`;
      numPtr = 0;
    };
    charPtr++;
  };
  
  return outputStr;
};

console.log(compress(testStr));