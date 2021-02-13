/*
Run-Length Encoding

Write a function that takes in a non-empty string and returns its run-length
encoding.

From Wikipedia, "run-length encoding is a form of lossless data compression in
which runs of data are stored as a single data value and count, rather than as the
original run." For this problem, a run of data is any sequence of consecutive, 
identical characters. So the run "AAA" would be run-length-encoded as "3A".

To make things more complicated, however, the input string can contain all sorts
of special characters, including numbers. And since encoded data must be decodable, 
this means that we can't naively run-length-encode long runs. For example, the run 
"AAAAAAAAAAAA" (12 A's), can't naively e encoded as "12A", since this string can be
decoded as either "AAAAAAAAAAAA" or "1AA". Thus, long runs (runs of 10 or more 
characters) should be encoded in a split fashion; the aforementioned run should be 
encoded as "9A3A"

Example:
                             |
                             V  
string: "AAAAAAAAAAAAABBCCCCDD"
output:"9A4A2B4C2D"
i = 15
count = 2
res = ['9', 'A', '4', 'A', '2', 'B', '4', 'C', '2', 'D']
*/

const runLengthEncoding = (string) => {
  let result = [];
  let count = 1;
  // iterate the string
  for (let i = 1; i < string.length; i++) {
    let current = string[i];
    let previous = string[i - 1];
    if (count === 9 || previous !== current) {
      result.push(count.toString());
      result.push(previous);
      count = 0;
    }
    count += 1;
  }
  result.push(count.toString());
  result.push(string[string.length - 1]);

  return result.join('');
};

let string = 'AAAAAAAAAAAAABBCCCCDD';
console.log(runLengthEncoding(string));
