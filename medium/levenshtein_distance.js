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
};

let str1 = 'abc';
let str2 = 'yabd';
console.log(lavenshteinDistance(str1, str2));
