// validate if query is valid

module.exports = {
  check: (query) => {
    const trimmedQuery = query.trim().replace(/\s/g, "+");
    const regex = /^[a-zA-Z0-9\s]+$/;
    if (trimmedQuery.length < 3 || trimmedQuery.length > 100) {
      return false;
    }
    if (!regex.test(trimmedQuery)) {
      return false;
    }
    return true;
  },

  trim: (query) => {
    return query.trim().replace(/\s/g, "+");
  },
};
