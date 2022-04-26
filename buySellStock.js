  //next attempt using pointer verbiage to ensure points start over first two elements
    //working attempt
    //What did you learn?:
      //need 3 things: left pointer,right pointer, max figure for output
      //sell/right pointer always iterates up, as you can only sell on current date or future dates
      //buy pointer can either stay the same or go lower based on current/future dates

  var maxProfit = function(prices) {
  if(prices.length < 2) return 0; //edge case if array too short
    //will need pointers to track 'buy' & 'sell' points of stock price
    //set intial pointers to first two array elements
  let leftPointer = 0, rightPointer = 1, maxProfitResult = 0;
    //iterate over price array & eval if current elem < or > to BUY pointer
  prices.map((price, idx) => {
      if(price < prices[leftPointer]) {
        leftPointer = idx;
      }
      rightPointer = idx;
      maxProfitResult = Math.max(maxProfitResult, prices[rightPointer] - prices[leftPointer])
  });
  if(maxProfitResult < 0) return 0
  else return maxProfitResult;
};


  //original attempt using low/high verbiage
// var maxProfit = function(prices) {
//   //will need pointers to track 'low' & 'high' points of stock price
//   //set intial price at first elem value
//   let lowPrice = prices[0];
//   let highPrice = prices[0];
//   let buyIdx = 0;
//   //iterate over price array & eval if current elem < or > to pointers
//   prices.map((price, idx) => {
//       //set an index/start value as a buy date if lowPrice changes
//       if(price < lowPrice) {
//         lowPrice = price
//         buyIdx = price
//       };
//       if(price > highPrice && idx > buyIdx) {
//         highPrice = price;
//       };
//   });
//   return highPrice - lowPrice
// };

// console.log(maxProfit([7,1,5,3,6,4])) // Output should = 5 of max. profit
// console.log(maxProfit([7,6,4,3,1])) // Output should = 0 of max. profit
// console.log(maxProfit([1,2])) // Output should = 1 of max. profit
console.log(maxProfit([1])) // Output should = 0 of max. profit