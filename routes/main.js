const serpController = require("../controllers/serp.controller");

const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Enter a keyword");
});

router.post("/", serpController.post);

module.exports = router;
