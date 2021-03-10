// modules
const assert = require("assert");
const checkWord = require("./task_1");

// assertions
assert.deepStrictEqual(checkWord([2, null, "made", "it"], "femi"), false);
assert.deepStrictEqual(checkWord([2, null, "made", "it"], null), true);
assert.deepStrictEqual(checkWord([2, null, "made", "it"], undefined), false);
assert.deepStrictEqual(checkWord([2, "femi", "made", "it"], "femi"), true);
