// modules
const assert = require("assert");
const checkPrevItem = require("./task_2");

// utils
const addItem = require("../utils/addItem");


// assertions

describe('checkPrevItem module', ()=> {

  it('should return previous string for an input in a list', ()=>{

    assert.deepStrictEqual(
      checkPrevItem(["femi", "made", "it", "akinwa"], "made"),
      "femi"
    );
     assert.deepStrictEqual(
       checkPrevItem(["femi", "made", "it", "akinwa"], "it"),
       "made"
     );
  })
  it('should return null if input string is the first element in the list', ()=> {
    assert.deepStrictEqual(
      checkPrevItem(["femi", "made", "it", "akinwa"], "femi"),
      null
    );
  })
 
})



