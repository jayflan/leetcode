//My structy approaches:

class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  const a = new Node("a");
  const b = new Node("b");
  const c = new Node("c");
  const d = new Node("d");
  
  a.next = b;
  b.next = c;
  c.next = d;
  
  
  //* recursive approach
  const linkedListValues = (head, result = []) => {
    if(head === null) return result;
    result.push(head.val);
    return linkedListValues(head.next, result);
  };
  
  //* loop approach
  const linkedListValues = (head) => {
    let result = [];
    let current = head;
    while(current !== null) {
      result.push(current.val)
      current = current.next
    };
    return result;
  };
  
  // console.log(linkedListValues(a));