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
// time: O(m * (n + m)) where n is the length of the document and m is the length of the characters
// space: O(1)
const generateDocument = (characters, document) => {
  // get character counts of both caracters and documents
  // compare them in the end
  for (let character of document) {
    let documentFrequency = countCharacterFrequency(character, document);
    let charactersFrequency = countCharacterFrequency(character, characters);
    if (documentFrequency > charactersFrequency) {
      return false;
    }
  }
  return true;
};

const countCharacterFrequency = (character, target) => {
  let frequency = 0;
  for (let char of target) {
    if (char === character) {
      frequency += 1;
    }
  }
  return frequency;
};

// time: O(c * (n + m))
// space: O(1)
const gernerateDocumentRefactor = (characters, document) => {
  let characterCountHash = {};
  for (let i = 0; i < characters.length; i++) {
    if (!characterCountHash[characters[i]]) {
      characterCountHash[characters[i]] = 0;
    }
    characterCountHash[characters[i]] += 1;
  }
  for (let i = 0; i < document.length; i++) {
    if (characterCountHash[document[i]]) {
      characterCountHash[document[i]]--;
    } else {
      return false;
    }
    if (characterCountHash[document[i]] < 0) {
      return false;
    }
  }
  console.log(characterCountHash);
  return true;
};

let characters = 'Bste!hetsi ogEAxpelrt x ';
let document = 'AlgoExpert is the Best!plum';
console.log(generateDocument(characters, document));
