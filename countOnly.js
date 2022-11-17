const assertEqual = function(actual, expected) {
  if (actual === expected) { // if actual and expected are identical in value and type then assertion passed.
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else { // if not identical then assertion failed.
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  let finalObj = {}; // We need a an empty object to return the final stats
  // we need to cycle through each key of the input object and see which ones have a value true
  for (let key in itemsToCount) {
    if (itemsToCount[key] === true) {
      // For each key that is true I need to loop through the array to see how many time the key matches elements in the array
      let counter = 0;
      for (let item of allItems) {
        if (key === item) {
          // if key matches the item in the array we will add to the counter and then add the counter value to the key, while adding the key to the blank object in first loop.
          counter += 1;
          finalObj[key] = counter;
        }
      }
    }
  } return finalObj;
};


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];
//countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

