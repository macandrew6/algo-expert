/*
Move Element To End

You're given an array of integers and an integer. Write a function that moves all instances of 
that integer in the array to the end of the array and returns the array

The function should perorm this in place (i.e., it should mutate the input array) and doesn't 
need to maintain the order of the other integers.

example:
array = [2, 1, 2, 2, 2, 3, 4, 2]
toMove = 2
*/
<<<<<<< HEAD


=======
/*
[2, 1, 2, 2, 2, 3, 4, 2]
*/
>>>>>>> b5982eae7de91059996d08cdde8c825838dfbace

// time O(n(log(n))) | space O(1)
const moveElementToEnd = (array, toMove) => {
  array.sort((a, b) => a - b);
  let front = 0;
  let back = array.length - 1;
  while (front < back) {
    if (array[front] === toMove) {
      swap(array, front, back);
      front++;
      back--;
    } else {
      front++;
    }
  }
  return array;
};

const swap = (array, i, j) => {
  [array[i], array[j]] = [array[j], array[i]];
};

// time O(n) | space O(1)
const moveElementToEndRefactor = (array, toMove) => {
  let front = 0;
  let back = array.length - 1;
  while (front < back) {
    while (front < back && array[back] === toMove) {
      back--;
    }
    if (array[front] === toMove) {
      swap(array, front, back);
    }
    front++;
  }
  return array;
};

/*
          V  
[4, 1, 3, 2, 2, 2, 2, 2] target = 2
        ^ 
<<<<<<< HEAD
front = 4
back = 3
=======
i = 0
j = end
>>>>>>> b5982eae7de91059996d08cdde8c825838dfbace
*/

let array = [2, 1, 2, 2, 2, 3, 4, 2];
let toMove = 2;

console.log(moveElementToEndRefactor(array, toMove));
