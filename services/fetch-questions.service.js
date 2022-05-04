const cheerio = require("cheerio");
const puppeteer = require("puppeteer");

module.exports = {
  fetch: async (query) => {
    const trimmedQuery = query.trim().replace(/\s/g, "+");
    const browser = await puppeteer.launch({
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
    const page = await browser.newPage();
    await page.goto(`https://www.google.com/search?q=${trimmedQuery}`);

    const html = await page.content();
    await browser.close();
    const $ = cheerio.load(html);
    const results = [];

    const questions = [];
    $(".iDjcJe.IX9Lgd.wwB5gf > span").each((i, el) => {
      questions[i] = $(el).text();
    });

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
