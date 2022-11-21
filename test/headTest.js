const head = require('../head');
const assertEqual = require('../assertEqual'); // We also need to import the assertEqual as well since it is being called to test our head function.


// TEST CODE for head.js
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([5]), 5);
assertEqual(head(5), 5); // expected to fail since actual (input) is not an array
assertEqual(head([]), 5); //expected to fail