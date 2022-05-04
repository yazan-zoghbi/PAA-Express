const express = require("express");

const db = require("./config/db");

const serpRouter = require("./routes/main");

const app = express();

// handle json response
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// use error handler middleware to handle errors in routes and send error response to client
app.use((err, req, res, next) => {
  res.status(500).send({ error: err.message });
});

// use serp route
app.use("/", serpRouter);

// start server
db.connect().then(() => {
  app.listen(3000, () => {
    console.log("Server started at port 3000");
  });
});
