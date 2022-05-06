import { Request, Response } from "express";
import { fetch } from "../services/fetch-questions.service";

export async function get(req: Request, res: Response) {
  res.status(200).send("Enter a keyword");
}
export async function post(req: Request, res: Response) {
  const keyword = req.body.keyword;
  const location = req.body.location;
  const results = await fetch(keyword, location);
  res.status(200).send(results);
}
