/**
 * @desc Gets the average of two numbers
 * @param {number} start 
 * @param {number} stop 
 */
const setMidIndex = (start, stop) => Math.floor((start + stop) / 2);

/**
 * @desc Search for a word in an array of words
 * @param {array} wordArr
 * @param {string} word
 */
const hasWord = (wordArr, word) => {
  let startIndex = 0;
  let stopIndex = wordArr.length - 1;
  let midIndex = setMidIndex(startIndex, stopIndex);
  while (wordArr[midIndex] !== word && startIndex < stopIndex) {
    if (word < wordArr[midIndex]) {
      stopIndex = midIndex - 1;
    } else {
      startIndex = midIndex + 1;
    }
    midIndex = setMidIndex(startIndex, stopIndex);
  }
  return wordArr[midIndex] === word ? true : false;
};



module.exports = hasWord;
