const cheerio = require("cheerio");
const puppeteer = require("puppeteer");

const validateQuery = require("../utils/validate-query");
const validateQuestions = require("../utils/validate-questions");

module.exports = {
  fetch: async (query) => {
    if (!validateQuery.check(query)) {
      return { error: "Invalid query" };
    }

    const browser = await puppeteer.launch({
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
    const page = await browser.newPage();
    await page.goto(
      `https://www.google.com/search?q=${validateQuery.trim(query)}`
    );

    const html = await page.content();
    await browser.close();
    const $ = cheerio.load(html);
    const results = [];

    const questions = [];
    $(".iDjcJe.IX9Lgd.wwB5gf > span").each((i, el) => {
      questions[i] = $(el).text();
    });

    if (!validateQuestions.check(questions)) {
      return {
        error: "No related questions found, try to use more specific query!",
      };
    }

    for (let i = 0; i < questions.length; i++) {
      results.push({
        id: i + 1,
        question: questions[i],
      });
    }
    return {
      query,
      results,
    };
  },
};
