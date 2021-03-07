/*
Generate Document

You're given a string of available characters and a string representing a document that you need to
generate. Write a function that determines if you can generate the document using the available 
characters. If you can generate the document, your function should return true; otherwise, it
should return false.

You're only able to generate the documents if the frequency of unique haracters in the characters
string is greater than or equal to the frequency of unique characters in the document string. For
example, if you're given characters = "abcabc" and the document = "aabbccc" you cannot generate
the document because you're missing one "c".

The document that you need to create may contain any characers, including special characters, 
capital letters, numbers, and spaces.

Example:
input:
characters = "Bste!hetsi ogEAxpelrt x "
document = "AlgoExpert is the Best!"

output:
true
*/

// brute force solution
// time: O(m * (n + m))
// space: O(1)
const generateDocument = (characters, document) => {
  let characterHash = {};
  let documentHash = {};
  for (let i = 0; i < characters.length; i++) {
    if (!characterHash[characters[i]]) {
      characterHash[characters[i]] = 0;
    }
    characterHash[characters[i]] += 1;
  }
  console.log(characterHash);
  for (let i = 0; i < document.length; i++) {
    if (!documentHash[document[i]]) {
      documentHash[document[i]];
    }
  }
};

// time: O(c * (n + m))
// space: O(1)
const gernerateDocumentRefactor = (characters, document) => {};

let characters = 'Bste!hetsi ogEAxpelrt x ';
let document = 'AlgoExpert is the Best!';
console.log(generateDocument(characters, document));
