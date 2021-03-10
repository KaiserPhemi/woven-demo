// modules
const assert = require("assert");
const checkWord = require("./task_1");

// assertions
describe('hasWord module', ()=> {
  it('should return false for words not in array of words', ()=> {
    assert.deepStrictEqual(checkWord([2, null, "made", "it"], "femi"), false);
    assert.deepStrictEqual(checkWord([2, null, "made", "it"], "woven"), false);
    assert.deepStrictEqual(
      checkWord([2, null, "made", "it"], undefined),
      false
    );
  })
  it('should return true for words in array of words', ()=> {
    assert.deepStrictEqual(checkWord([2, "femi", "made", "it"], "femi"), true);
    assert.deepStrictEqual(checkWord([2, null, "made", "it"], null), true);
  })
})





