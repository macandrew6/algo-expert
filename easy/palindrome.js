/*
Palindrome Check

Write a funtion that takes in a non-empty string and that returns a boolean
representing whether the string is a palindrome

A palindrom is defined as a string that's written the same forward and backwards.
Note that singe-character strings are palindromes

example:
string = "abcdcba"
result => true;
*/
// time O (n) | space O (1)
const isPalindrome = (string) => {
  let front = 0;
  let back = string.length - 1;
  while (front < back) {
    if (string[front] !== string[back]) {
      return false;
    }
    front += 1;
    back -= 1;
  }
  return true;
};

// time O (n) | space O (n)
const isPalindrome = (string) => {
  let copy = string.split('');
  let reversed = copy.reverse().join('');
  return string === reversed;
};

// time O (n) | space O (n)
const isPalindromeRecur = (string, i = 0) => {
  let j = string.length - 1 - i;
  if (i >= j) {
    return true;
  } else {
    return string[i] === string[j] && isPalindrome(string, i + 1);
  }
};

// tail recursion
const isPalindromeRecur = (string, i = 0) => {
  let j = string.length - 1 - i;
  if (j <= i) {
    return true;
  } else if (string[i] !== string[j]) {
    return false;
  } else {
    return isPalindromeRecur(string, i + 1);
  }
};

console.log(isPalindromeRecur('abcdcba'));
