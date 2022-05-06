const hreflang = require("../config/hreflang");

module.exports = {
  get: async (location) => {
    return hreflang[location];
  },
};
