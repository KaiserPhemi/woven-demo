// modules
const assert = require("assert");
const checkPrevItem = require("./task_2");

// utils
const addItem = require("../utils/addItem");

// assertions
assert.deepStrictEqual(
  checkPrevItem(["femi", "made", "it", "akinwa"], "made"),
  "femi"
);
assert.deepStrictEqual(
  checkPrevItem(["femi", "made", "it", "akinwa"], "femi"),
  null
);
assert.deepStrictEqual(
  checkPrevItem(["femi", "made", "it", "akinwa"], "it"),
  "made"
);
