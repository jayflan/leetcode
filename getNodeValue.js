//My structy approach:

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

//recursive:
const getNodeValue = (head, index, indexCount = 0) => {
  if(head === null) return head;
  if(indexCount === index) return head.val;
  return getNodeValue(head.next, index, indexCount+=1);
};

//loop:
const getNodeValue = (head, index) => {
  let current = head;
  let indexCount = 0;
  while(current !== null) {
    if(indexCount === index) return current.val;
    current = current.next;
    indexCount++;
  };
  return current;
};

console.log(getNodeValue(a,2));

//structy solutions:

// iterative

// const getNodeValue = (head, index) => {
//   let count = 0;
//   let current = head;
//   while (current !== null) {
//     if (count === index) return current.val;
//     current = current.next;
//     count += 1;
//   }
//   return null;
// };
// n = number of nodes
// Time: O(n)
// Space: O(1)
// recursive

// const getNodeValue = (head, index) => {
//   if (head === null) return null;
//   if (index === 0) return head.val;
//   return getNodeValue(head.next, index - 1);
// };
// n = number of nodes
// Time: O(n)
// Space: O(n)

