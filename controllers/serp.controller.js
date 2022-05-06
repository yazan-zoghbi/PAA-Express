const serp = require("../services/fetch-questions.service");

module.exports = {
  get: async (req, res) => {
    res.status(209).send("Enter a keyword");
  },
  post: async (req, res) => {
    const keyword = req.body.keyword;
    const location = req.body.location;
    const results = await serp.fetch(keyword, location);
    res.status(200).send(results);
  },
};
