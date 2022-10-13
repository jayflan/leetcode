// My structy approach:

class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }

const a = new Node(2);
const b = new Node(8);
const c = new Node(3);
const d = new Node(-1);
const e = new Node(7);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

console.log(sumList(a));
  

//* recursive
const sumList = (head) => {
  if(!head) return 0;
  if(head === null) return head.val;
  return head.val + sumList(head.next);
};

//* loop
const sumList = (head) => {
  let result = 0;
  let current = head;
  while(current !== null) {
    result += current.val;
    current = current.next
  };
  return result;
};

//structy solution:

iterative

const sumList = (head) => {
  let sum = 0;
  let current = head;
  while (current !== null) {
    sum += current.val;
    current = current.next;
  }
  return sum;
};
n = number of nodes
Time: O(n)
Space: O(1)
recursive

const sumList = (head) => {
  if (head === null) return 0;
  return head.val + sumList(head.next);
};
n = number of nodes
Time: O(n)
Space: O(n)

