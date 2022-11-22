const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');



assertArraysEqual(middle([1,2,3]), [2]);
assertArraysEqual(middle(["red","blue","green"]), ["blue"]);
assertArraysEqual(middle(["red","blue","green"]), "blue");  // should fail 