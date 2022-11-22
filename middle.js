//Implement middle which will take in an array and return the middle-most element.
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

module.exports = middle;