import cheerio from "cheerio";
import puppeteer from "puppeteer";

import { checkQuery, trimQuery } from "../utils/validate-query";
import { checkQuestions } from "../utils/validate-questions";
import { checkLocation } from "../utils/validate-location";
import { getLink } from "../utils/validate-link";

export async function fetch(query: string, location: string) {
  const link = await getLink(location);
  let fetchedQuestions: string[] = [];
  const results = [];

  if (!checkQuery(query)) {
    return { error: "Invalid query" };
  }

  if (!checkLocation(location)) {
    return { error: "Invalid location" };
  }

  const browser = await puppeteer.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();

  await page.goto(link + `${trimQuery(query)}`);

  const html = await page.content();
  await browser.close();
  const $ = cheerio.load(html);

  $(".iDjcJe.IX9Lgd.wwB5gf > span").each((i: number, el: any) => {
    fetchedQuestions[i] = $(el).text();
  });

  if (!checkQuestions(fetchedQuestions)) {
    return {
      error: "No related questions found, try to use more specific query!",
    };
  }

  for (let i = 0; i < fetchedQuestions.length; i++) {
    results.push({
      id: i + 1,
      question: fetchedQuestions[i],
    });
  }
  return {
    query,
    location,
    results,
  };
}
