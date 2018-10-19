const SymbolRegFunc =
  "[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]";

/**
 * Check is this a name
 * @param {*} data
 */
const nameFilter = data => {
  reg = /^([a-zA-Z0-9_-])+/;
  if (!reg.test(data.value)) {
    return false;
  }
  return true;
};
