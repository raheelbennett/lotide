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

//assertArrayEqual will use eqArrays function to compare the two arrays to generate the appropriate assertion.
const assertArrayEqual = function(actual, expected) {
  if (eqArrays(actual, expected) === true) { // if actual and expected are identical in value and type then assertion passed.
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else { // if not identical then assertion failed.
    console.log(`❌❌❌ Assertion Failed: ${actual} !=== ${expected}`);
  }
};

assertArrayEqual([1,2,3], [1,2,3]);
assertArrayEqual([1,2,3], [1,2,"3"]);
assertArrayEqual("Lighthouse Labs", "Bootcamp");
assertArrayEqual("Bootcamp", "Bootcamp");
