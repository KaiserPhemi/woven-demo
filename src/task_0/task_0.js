/**
 * Given a string with multiple occurrence of words, seperated by spaces
 * Return the word with the highest number of occurrence.
 */

/**
 * @desc Find item with the highest occurence
 * @param {object} wordObj
 */
const findItem = (wordObj) => {
  let valueArr = Object.values(wordObj);
  let maxValue = valueArr.reduce((prev, next) => Number(Math.max(prev, next)));
  for (item in wordObj) {
    if (wordObj[item] === maxValue) {
      return { [item]: maxValue };
    }
  }
};

/**
 * @desc
 * @param {string} longString
 */
const getHighest = (longString) => {
  const wordArray = longString.trim().replace(/,/g, "").split(" ");
  let wordObj = {};
  for (let i = 0; i < wordArray.length; i++) {
    if (wordObj[wordArray[i]] === undefined) {
      wordObj[wordArray[i]] = 1;
    } else {
      wordObj[wordArray[i]]++;
    }
  }
  let result = findItem(wordObj);
  return result;
};

module.exports = getHighest;
