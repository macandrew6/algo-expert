/*
Levenshtein Distance

Write a function that takes in two string and returns the minimum number of edit operations that
need to be performed on the first string to obtain the second string.

There are three edit operations: insertion of a character, deletions of a character, and substitution of
a character for another.

example:
input:
str1 = "abc"  
str2 = "yabd"

   " " y  a  b  d  
" " 0  1  2  3  4 
 a  1  1  1  2  3 
 b  2  2  2  1  2 
 c  3  3  3  2  2
compare " a" && "ya"
output:
2 // insert "y"; substitute "c" for "d"
*/

// time: O(n*m) where n is the length of str1 and m is the length of str2
// space: O(n*m)
const levenshteinDistance = (str1, str2) => {
  // build a two dimensional array of the minimum numbers of edits for pairs of
  let edit = [];
  for (let i = 0; i < str1.length + 1; i++) {
    let row = [];
    for (let j = 0; j < str2.length + 1; j++) {
      row.push(j);
    }
    row[0] = i;
    edit.push(row);
  }
  // str1 == 'abc'
  // str2 == 'yabd'
  for (let i = 1; i < str1.length + 1; i++) {
    for (let j = 1; j < str2.length + 1; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        edit[i][j] = edit[i - 1][j - 1];
      } else {
        edit[i][j] =
          1 + Math.min(edit[i - 1][j], edit[i][j - 1], edit[i - 1][j - 1]);
      }
    }
  }
  return edit[str1.length][str2.length];
};

// time: O(n*m)
// space: O(min(n, m))
const levenshteinDistanceRefactor = (str1, str2) => {
  const small = str1.length < str2.length ? str1 : str2;
  const long = str1.length >= str2.length ? str1 : str2;
  const evenEdits = [];
  const oddEdits = new Array(small.length + 1);
  for (let j = 0; j < small.length + 1; j++) {
    evenEdits.push(j);
  }
  for (let i = 1; i < long.length + 1; i++) {
    let currentEdits, previousEdits;
    if (i % 2 === 1) {
      currentEdits = oddEdits;
      previousEdits = evenEdits;
    } else {
      currentEdits = evenEdits;
      previousEdits = oddEdits;
    }
    // console.log(currentEdits);
    console.log(previousEdits);
    currentEdits[0] = i;
    for (let j = 1; j < small.length + 1; j++) {
      if (long[i - 1] === small[j - 1]) {
        currentEdits[j] = previousEdits[j - 1];
      } else {
        currentEdits[j] =
          1 +
          Math.min(previousEdits[j - 1], previousEdits[j], currentEdits[j - 1]);
      }
    }
  }
  return long.length % 2 === 0
    ? evenEdits[small.length]
    : oddEdits[small.length];
};

let str1 = 'abc';
let str2 = 'yabd';
console.log(levenshteinDistanceRefactor(str1, str2));
