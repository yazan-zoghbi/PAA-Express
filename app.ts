// import express from 'express';

import express, { Request, Response, NextFunction } from "express";

const db = require("./config/db");

import serpRouter from "./routes/main";

const app = express();

// handle json response
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// use error handler middleware to handle errors in routes and send error response to client
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
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
