const getHighest = require("./task_0");

// modules
const assert = require("assert");
const getWord = require("./task_0.js");

// assertions
assert.deepStrictEqual(
  getWord(`baby cried baby wept, baby slept, he ate, baby ate`),
  { baby: 4 }
);
assert.deepStrictEqual(getWord(`my name is oluwafemi, what is yours`), {
  is: 2,
});
