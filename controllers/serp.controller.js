const serp = require("../services/fetch-questions.service");

module.exports = {
  get: async (req, res) => {
    res.status(209).send("Enter a keyword");
  },
  post: async (req, res) => {
    const keyword = req.body.keyword;
    const results = await serp.fetch(keyword);
    res.status(200).send(results);
  },
};
