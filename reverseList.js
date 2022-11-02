// Tricky logic
// My approach with Structy walkthrough help:

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  };
};

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;


//iterative loop version

const reverseList = (origHead) => {
  //create new node var to be returned, it'll hold previous nodes and redirect 'next' nodes to reverselist
  let newHead = null;
  // create current var to traverse list in a loop
  let current = origHead;
  //loop used to traverse original list (head)
  while( current !== null) {
    //create a temp 'next' var to save current.next before redirecting current.next to reverse list
    const next = current.next;
    //re-assign current.next to be the result or 'previous' node, this'll redirect and reverse list
    current.next = newHead;
    //assign current (w/ redirected current.next) to result or 'previous' node
    newHead = current;
    // assign next to current to continue list traversal
    current = next;
  }
  // return result Node which should now have a start/head value of "f"
  return newHead;
};


//recursive version

const recurseReverseList = (origHead, newHead = null) => {
  //base case eval if head is null
  if(origHead === null) return newHead;
  //save current head.next for recursive traveral
  const next = origHead.next;
  //reassign head.next and make it resultNode or 'previous' node to redirect head.next to be previous node
  origHead.next = newHead;
  //re-assign resultNode to be current head to help traversal and final return of newest node
  newHead = origHead;
  // recurse using next and resultNode assignments to traverse original list
  return recurseReverseList(next, newHead);
};

console.log(reverseList(a));
// console.log(recurseReverseList(a));