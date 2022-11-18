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


const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const words = ["two", "times", "winner"]


const results1 = map(words, word => word[0]);
const results2 = map(words, word => word[1]);
const results3 = map(words, word => word[2]);

//console.log(results1);

assertArraysEqual(results1, ["t", "t", "w"] );
assertArraysEqual(results2, ["w", "i", "i"] );
assertArraysEqual(results3, ["o", "t", "u"] ); //==> //this should fail

