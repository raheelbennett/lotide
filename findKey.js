const assertEqual = function(actual, expected) {
  if (actual === expected) { // if actual and expected are identical in value and type then assertion passed.
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else { // if not identical then assertion failed.
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};


//takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value.
const findKey = function(object, callback) {
  for (let key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
};

// const test1 = findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2); // => "noma"

// assertEqual(test1, "noma");
// assertEqual(test1, "nomasssss"); // should fail

module.exports = findKey;