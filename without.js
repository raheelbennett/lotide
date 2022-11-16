// We need a functon to compre each element of both arrays corresponding to their index and if either element don't match then false will be returned.
const eqArrays = function(arr1, arr2) {
  let x = true;
  for (let index in arr1) {
    if (arr1[index] !== arr2[index]) {
      x = false;
      return x;
    }
  } return x;
};

//assertArraysEqual will use eqArrays function to compare the two arrays to generate the appropriate assertion.
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected) === true) { // if actual and expected are identical in value and type then assertion passed.
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else { // if not identical then assertion failed.
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

//Function without will take two arrays and generate a new array of elements from source array that are not found in itemsToRemove array.
const without = function(source, itemsToRemove) {
  let tempSource = [];
  for (let i = 0; i < source.length; i++) {
    let flag = false;
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        flag = true;
      }
    } if (flag === false) {
      tempSource.push(source[i]);
    }
  }  console.log(tempSource);
};

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
