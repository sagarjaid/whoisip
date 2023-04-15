const cron = require("node-cron");
const axios = require("axios");
const { format, subDays } = require("date-fns");
const { writeFile } = require("fs/promises");
const { existsSync } = require("fs");

const MAX_RECORDS_PER_SITEMAP = 50000;
const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "https://api.sheety.co/5a71675a98cacee735a92ca4416fb6ec/dailySheetApi";

async function generateSitemap(date) {
  try {
    const formattedDate = format(date, "yyyy-MM-dd");
    const apiUrl = `${API_URL}/${formattedDate.replace(/-/g, "")}`;
    const response = await axios.get(apiUrl);
    const data = response.data;

    console.log(data);

    const sitemapBaseName = `sitemap-${formattedDate}`;
    let sitemapVersion = "";
    let recordsCount = 0;
    let sitemapCount = 0;

    // Check if sitemap file already exists
    if (existsSync(`public/${sitemapBaseName}.xml`)) {
      // If file exists, increment the version number until an unused filename is found
      let i = 1;
      while (existsSync(`public/${sitemapBaseName}-${i}.xml`)) {
        i++;
      }
      sitemapVersion = `-${i}`;
    }

    let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

    for (const item of data[formattedDate.replace(/-/g, "")]) {
      sitemap += `
        <url>
          <loc>https://whoisos.com/${item.domain}</loc>
          <lastmod>${formattedDate}</lastmod>
          <changefreq>monthly</changefreq>
        </url>`;

      recordsCount++;

      if (recordsCount === MAX_RECORDS_PER_SITEMAP) {
        // If the maximum number of records per sitemap has been reached, write the current sitemap to file and start a new one
        await writeFile(
          `public/${sitemapBaseName}${sitemapVersion}-${++sitemapCount}.xml`,
          sitemap + "\n</urlset>"
        );
        console.log(
          `Sitemap generated at public/${sitemapBaseName}${sitemapVersion}-${sitemapCount}.xml`
        );
        sitemap = `<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;
        recordsCount = 0;
      }
    }

    // Write the final sitemap to file, if there are any remaining records
    if (recordsCount > 0) {
      await writeFile(
        `public/${sitemapBaseName}${sitemapVersion}-${++sitemapCount}.xml`,
        sitemap + "\n</urlset>"
      );
      console.log(
        `Sitemap generated at public/${sitemapBaseName}${sitemapVersion}-${sitemapCount}.xml`
      );
    }
  } catch (error) {
    console.error(error);
  }
}

// Manually trigger sitemap generation for current day
export async function generateTodaySitemap() {
  try {
    const currentDate = new Date();
    await generateSitemap(currentDate);
  } catch (error) {
    console.error(error);
  }
}

// Call generateTodaySitemap function when needed
// generateTodaySitemap();
