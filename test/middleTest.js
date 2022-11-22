const middle = require('../middle');
const assert = require('chai').assert;

describe("#middle", () => {
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it('returns ["Lighthouse"] for ["Hello", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(middle(["Hello", "Lighthouse", "Labs"]), ["Lighthouse"]);
  });
  it('returns [3, "c"] for ["a", 3, "c", "d"]', () => {
    assert.deepEqual(middle(["a", 3, "c", "d"]), [3, "c"]);
  });
});