const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([1,2,3], [1,2,3]);
assertArraysEqual([1,2,3], [1,2,"3"]);
assertArraysEqual("Lighthouse Labs", "Bootcamp");
assertArraysEqual("Bootcamp", "Bootcamp");
