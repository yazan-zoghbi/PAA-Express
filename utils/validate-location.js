const hreflang = require("../config/hreflang");

module.exports = {
  check: (location) => {
    if (location === undefined) {
      return false;
    }
    if (location.length === 0) {
      return false;
    }
    if (hreflang[location] === undefined) {
      return false;
    }
    return true;
  },
};
