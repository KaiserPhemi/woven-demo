module.exports = (arr, list) => {
  for (let i = 0; i < arr.length; i++) {
    list.addNode(arr[i]);
  }
};
