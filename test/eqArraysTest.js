const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays(["a", "b", "c"], ["a", "b", "c"]), true); // => should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true);  // => should Fail
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3", 4]), true);  // => should Fail