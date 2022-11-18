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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  //We will sort and store keys of each array in a varriable each and compare the keys along with their values. if a single mismatch is detected we will return false.
  const keys1 = Object.keys(object1).sort();
  const keys2 = Object.keys(object2).sort();
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let key of keys1) {
    const value1 = object1[key];
    const value2 = object2[key];
    if (Array.isArray(value1) && Array.isArray(value2)) {
      if (eqArrays(value1, value2) === false) { //invoking eqArrays to see if arrays are not identical then return false
        return false;
      }
    } else if (value1 !== value2) {
      return false;
    }
  } return true;
};


// // FUNCTION IMPLEMENTATION
// const assertObjectsEqual = function(actual, expected) {
//   
//   console.log(`Example label: ${inspect(actual)}`);
// };




//assertArrayEqual will use eqArrays function to compare the two arrays to generate the appropriate assertion.
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  if (eqObjects(actual, expected) === true) { // if actual and expected are identical in value and type then assertion passed.
    console.log(`🟢🟢🟢 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else { // if not identical then assertion failed.
    console.log(`❌❌❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

assertObjectsEqual({ a: '1', b: 2 },{ b: 2, a: '1' } ); // ==> Pass
assertObjectsEqual({ a: '1', b: 2 },{ b: 2, a: '0' } ); // ++> Fail
assertObjectsEqual({ a: '1', b: 2, c: [1, "b"] },{ b: 2, c:[1, "b"], a: '1' } ); // ==> Pass
assertObjectsEqual({ a: '1', b: 2, c: [1, "b"] },{ b: 2, c:[1, "c"], a: '1' } ); // ==> Fail
