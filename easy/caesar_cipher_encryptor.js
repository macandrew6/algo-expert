/*
Caesar Cipher Encryptor

Given a non-empty string of lowercase letters and a non-negative integer
representing a key, write a function that returns a new string obtained by
shifting every letter in the input string by k positions in the alphabet, 
where k is the key.

Note that letters should "wrap" around the alphabet; in other words, the
letter z shifted by one returns the letter a

example:
string = "xyz"
key = 2
output = "zab"
*/

const caesarCipherEncryptor = (string, key) => {
  let alpha = 'abcdefghijklmnopqrstuvwxyz';
  let alphaArr = alpha.split('');
  let result = '';
  for (let i = 0; i < string.length; i++) {
    let targetLetterIdx = alphaArr.indexOf(string[i]);
    let cipherLetterIdx = targetLetterIdx + key;
    cipherLetterIdx = cipherLetterIdx % 26;
    result += alphaArr[cipherLetterIdx];
  }
  return result;
};

console.log(caesarCipherEncryptor('xyz', 26));
