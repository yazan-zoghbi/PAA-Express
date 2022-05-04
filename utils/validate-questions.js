module.exports = {
  check: (questions) => {
    if (questions.length <= 0) {
      return false;
    }
    return true;
  },
};
