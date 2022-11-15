const assertEqual = function(actual, expected) {
  if (actual === expected) { // if actual and expected are identical in value and type then assertion passed.  console.log("🟢🟢🟢 Assertion Passed: " + actual+ " === " + expected);
  } else { // if not identical then assertion failed.
    console.log("❌❌❌Assertion Failed: " + actual + " !== " + expected);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("time", "time");
assertEqual(1, 2);