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
    console.log(`❌❌❌ Assertion Failed: ${actual} !=== ${expected}`);
  }
};

//Implement middle which will take in an array and return the middle-most element(s) of the given array.
const middle = function(array) {
  // For arrays with one or two elements, there is no middle. Return an empty array.
  if (array.length <= 2) {
    return [];
  }
  //For arrays with odd number of elements, an array containing a single middle element should be returned.
  if (array.length % 2 !== 0) {
    let i = Math.floor(array.length / 2);
    return [array[i]];
  }
  // The middle function should return an array with only the middle element(s) of the provided array. This means that the length of the returned elements could vary.
  if (array.length % 2 === 0) {
    let i = array.length / 2;
    return [array[i - 1], array[i]];
  }
};

console.log(middle([1,2,3,4,5,6,7]));
console.log(middle([1,2,3,4,5,6]));


assertArraysEqual(middle([1,2,3]), [2]);
assertArraysEqual(middle(["red","blue","green"]), ["blue"]);
assertArraysEqual(middle(["red","blue","green"]), "blue");