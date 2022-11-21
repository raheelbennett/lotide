const tail = function(arr) { // function tail will return an array without it's head, as a seperate array without changing the original array
  let x = [];
  for (let i = 1; i < arr.length; i++) {
    x.push(arr[i]);
  }
  return x;
};

module.exports = tail;
