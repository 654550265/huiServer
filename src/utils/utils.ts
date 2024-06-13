export default {
  isEmpty(str) {
    if (
      str === '' ||
      str === undefined ||
      str === null ||
      str === 'null' ||
      str === 'undefined' ||
      (typeof str === 'object' &&
        str.length !== undefined &&
        str.length === 0) ||
      (typeof str === 'object' &&
        str.length === undefined &&
        Object.keys(str).length === 0 &&
        JSON.stringify(str) === '{}')
    ) {
      return true;
    }
    return false;
  },
};
