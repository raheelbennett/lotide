const assertEqual = function(actual, expected) {
  if (actual === expected) { // if actual and expected are identical in value and type then assertion passed.
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else { // if not identical then assertion failed.
    console.log(`❌❌❌ Assertion Failed: ${actual} !=== ${expected}`);
  }
};

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


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true);  // => should Fail