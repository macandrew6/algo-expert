/*

sum1 = [4, 9, 5] Number(sum1.join) => 594
sum2 = [7, 4, 3, 2] => 7432
result = 8026

l1 => 594
V
4 -> 9 -> 5 -> null
l2 => 7432
2 -> 3 -> 4 -> 7
*/

// time: O(n + m) where n is the length of l1 and m is the length of l2
// space: O(n + m)
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const sumOfLinkedList = (l1, l2) => {
  // let newLL = new LinkedList();
  let list1Digits = [];
  let list2Digits = [];
  while (l1 !== null) {
    list1Digits.push(l1.value);
    l1 = l1.next;
  }
  while (l2 !== null) {
    list2Digits.push(l2.value);
    l2 = l2.next;
  }
  let sum =
    Number(
      list1Digits
        .reverse()
        .map((el) => el.toString())
        .join('')
    ) +
    Number(
      list2Digits
        .reverse()
        .map((el) => el.toString())
        .join('')
    );
  console.log(sum);
  sum.toString().split('');
  let length = sum.length;
  let idx = 0;
  let result = new LinkedList(Number(sum[0]));
  while (idx < length) {
    result.next;
  }
};

let l1 = new LinkedList(4);
l1.next = new LinkedList(9);
l1.next.next = new LinkedList(5);
let l2 = new LinkedList(2);
l2.next = new LinkedList(3);
l2.next.next = new LinkedList(4);
l2.next.next.next = new LinkedList(7);

console.log(sumOfLinkedList(l1, l2));
