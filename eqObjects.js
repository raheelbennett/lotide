const assertEqual = function(actual, expected) {
  if (actual === expected) { // if actual and expected are identical in value and type then assertion passed.
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else { // if not identical then assertion failed.
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

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


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true);
const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false

const cdq = { c: "1", d: ["2", 3], e: ["a", 3] };
const dcq = { e: ["a", 3], d: ["2", 3], c: "1" };
assertEqual(eqObjects(cdq, dcq), true); // => true