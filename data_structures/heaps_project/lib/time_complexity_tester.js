let startTime, endTime;

const start = () => {
  startTime = new Date();
};

const end = () => {
  endTime = new Date();
  let timeDiff = endTime - startTime;
  console.log('     ' + timeDiff + ' ms');
};

let { MaxHeap } = require('./max_heap');

const heapify = (arr) => {
  let heap = new MaxHeap();
  arr.forEach((num) => heap.insert(num));
  return heap.array;
};

const sort = (arr) => {
  return arr.sort((a, b) => a - b);
};

const randomArray = (size) => {
  let array = [];
  while (array.length < size) {
    let randomNum = Math.floor(Math.random() * 1000);
    array.push(randomNum);
  }
  return array;
};

const runTest = (size) => {
  let array = randomArray(size);
  console.log(`\n----Testing array of size ${size}----`);
  console.log('   heapify');
  start();
  heapify(array);
  end();
  console.log('   full sort');
  start();
  sort(array);
  end();
  console.log();
};

runTest(100000000);
