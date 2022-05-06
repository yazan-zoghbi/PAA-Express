import { get, post } from "../controllers/serp.controller";

const express = require("express");

const router = express.Router();

router.get("/", get);

router.post("/", post);

export default router;
