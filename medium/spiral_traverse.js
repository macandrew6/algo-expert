/*
Spiral Traverse

Write a function that takes in an n x m two-dimensional array (that can be square-shaped 
when n == m) and returns a one-dimensional array of all the array's elements in a spiral
order.

Spiral order starts at the top left corner of the two-dimensional array, goes to the right,
and proceeds in a spiral pattern all the way until every element has been visited

array = [
  [1,   2,  3, 4],
  [12, 13, 14, 5],
  [11, 16, 15, 6],
  [10,  9,  8, 7]
        ^
]
i = 0 -> 1 -> 2 -> 3
j = 3 -> 2 -> 1 -> 0
j === length
i++
i === height
j--
j === 0
i--
i === 0
j++

results = [1, 2, 3, 4, ]
result => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
lenth = array[0].length - 1;
height = array.length;

*/

const spiralTraverse = (array) => {
  let result = [];
  let startCol = 0;
  let endCol = array[0].length - 1;
  let startRow = 0;
  let endRow = array.length - 1;
  while (startCol <= endCol && startRow <= endRow) {
    for (let col = startCol; col < endCol + 1; col++) {
      result.push(array[startRow][col]);
    }
    for (let row = startRow + 1; row < endRow + 1; row++) {
      result.push(array[row][endCol]);
    }
    for (let col = endCol - 1; col >= startCol; col--) {
      result.push(array[endRow][col]);
    }
    for (let row = endRow - 1; row > startRow; row--) {
      result.push(array[row][startCol]);
    }
    startRow++;
    endRow--;
    startCol++;
    endCol--;
  }
  return result;
};
/*
array = [
    sc          ec
sr  [1,   2,  3, 4],
    [12, 13, 14, 5],
    [11, 16, 15, 6],
er  [10,  9,  8, 7]
               ^
]
*/

let array = [
  [1, 2, 3, 4],
  [12, 13, 14, 5],
  [11, 16, 15, 6],
  [10, 9, 8, 7],
];
console.log(spiralTraverse(array));
