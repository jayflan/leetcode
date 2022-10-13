// My structy approach:

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
};

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

//* recursive
const linkedListFind = (head, target) => {
  if(head === null) return false;
  if(head.val === target) return true;
  return linkedListFind(head.next, target);
};

//* loop
const linkedListFind = (head, target) => {
  let current = head;
  while(current !== null) {
    if(current.val === target) return true;
    current = current.next;
  };
  return false;
};

console.log(linkedListFind(a));

//structy solutions:

//* Welp, my functions are identical to struty's.  :)

//iterative:

// n = number of nodes
// Time: O(n)
// Space: O(1)

//recursive:

// n = number of nodes
// Time: O(n)
// Space: O(n)