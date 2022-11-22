const assertEqual = function(actual, expected) {
  if (actual === expected) { // if actual and expected are identical in value and type then assertion passed.
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else { // if not identical then assertion failed.
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

//The function should take in a sentence (as a string) and then return a count of each of the letters in that sentence.
const countLetters = function(sentence) {
  // The function will return an object with all it's keys corresponding to each unique letter and their respective values equal to the number of reoccurrence of that letter in the sentence.
  let countObj = {};
  // We need to loop through the string, disregard spaces and count occurance of each letter
  for (let letter of sentence) {
    if (letter !== ' ') {
      // If a letter does not already exist as a key in our countObj object then we need to add it with value = 1, if already exists then will add to it
      if (countObj[letter]) {
        countObj[letter] += 1;
      } else {
        countObj[letter] = 1;
      }
    }
  } return countObj;
};

console.log(countLetters("lighthouse in the house"));

const result1 = countLetters("lighthouse in the house");

assertEqual(result1["l"], 1);
assertEqual(result1["x"], undefined);
assertEqual(result1["i"], 2);
assertEqual(result1["h"], 4);
assertEqual(result1["z"], 4); // should return failed


module.exports = countLetters;