/**
 * @desc Checks if a VM can fit a host
 * @param {object} vmData
 * @param {object} hostData
 */
module.exports = (vmData, hostData) => {
  for (props in vmData) {
    if (vmData[props] > hostData[props]) {
      return false;
    }
  }
  return true;
};
