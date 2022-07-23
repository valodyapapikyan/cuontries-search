import { Stack } from './data-structures/Stack/index';
import { LinkedList } from './data-structures/LinkedList/index';
import { DoblyLinkedList } from './data-structures/DoublyLinkedList/index';
(function () {
  const linkedList = new LinkedList();
  const doublyLinkedList = new DoblyLinkedList();
  const stack = new Stack();

  stack.push(1);
  stack.push(2);

  stack.push(3);
  stack.push(4);

//   // console.log('after',stack)

  console.log('peak', stack.peak());
//   console.log('pop', stack.pop());

//   console.log('before', stack);


for(let item of stack) {
    console.log(item)
}
  //   doublyLinkedList.addFirst(4);
  //   doublyLinkedList.addFirst(3);
  //   doublyLinkedList.addFirst(2);
  //   doublyLinkedList.addLast(5);

  //   doublyLinkedList.removeFisrt()
  //   doublyLinkedList.removeLast()
  //   console.log('search', doublyLinkedList.search(5));

  //   console.log('doub', doublyLinkedList.traverse());

  // linkedList.insertFirst(1);
  // linkedList.insertFirst(2);
  // linkedList.insertFirst(3);
  // linkedList.insertFirst(4);
  // linkedList.insertFirst(5);
  // linkedList.insertFirst(6);
  // linkedList.insertFirst(7);

  // linkedList.deleteFirst()
  // linkedList.deleteLast()

  // console.log("find :", linkedList.search(4))

  // console.log('size : ', linkedList.size())
  // console.log(linkedList.traverse())
})();
