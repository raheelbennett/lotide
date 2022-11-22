// We need a functon to compre each element of both arrays corresponding to their index and if either element don't match then false will be returned.
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let index in arr1) {
    if (arr1[index] !== arr2[index]) {
      return false;
    }
  } return true;
};


//assertArrayEqual will use eqArrays function to compare the two arrays to generate the appropriate assertion.
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected) === true) { // if actual and expected are identical in value and type then assertion passed.
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else { // if not identical then assertion failed.
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// function letterPositions which will return all the indices (zero-based positions) in the string where each character is found.
const letterPositions = function(sentence) {
  const results = {};
  // We will loop through each letter, disregarding any spaces, if it does not already exists as a key in the final object then we will add it along with array of it's indices.
  for (let index in sentence) {
    if (sentence[index] !== " ") {
      if (results[sentence[index]]) {
        results[sentence[index]].push(Number(index));
      } else {
        results[sentence[index]] = [Number(index)];
      }
    }
   
  } return results;
};

// const results = letterPositions("hello");
// assertArraysEqual(results["h"], [0]);
// assertArraysEqual(results["e"], [1]);
// assertArraysEqual(results["l"], [2,3]);
// assertArraysEqual(results["o"], [4]);


module.exports = letterPositions;