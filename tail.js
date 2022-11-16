const assertEqual = function(actual, expected) {
  if (actual === expected) { // if actual and expected are identical in value and type then assertion passed.
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else { // if not identical then assertion failed.
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(arr) { // function tail will return an array without it's head, as a seperate array without changing the original array
  let x = [];
  for (let i = 1; i < arr.length; i++) {
    x.push(arr[i]);
  }
  return x;
};


// Test cases.
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!


console.log(tail(["lighthouse"]));
console.log(tail([]));

/*
can also use arr.slice(1) and it won't chagne the original array
*/
