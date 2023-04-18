const fs = require("fs");
const { format } = require("date-fns");

export function generateMainSitemap() {
  const sitemapUrls = [];
  const files = fs.readdirSync("public");
  files.forEach((file) => {
    if (
      file.startsWith("sitemap") &&
      file.endsWith(".xml") &&
      file !== "sitemap.xml"
    ) {
      const sitemapUrl = `https://whoisos.com/${file}`;
      const lastModified = format(new Date(), "yyyy-MM-dd");
      sitemapUrls.push({
        url: sitemapUrl,
        lastModified,
        changeFrequency: "monthly",
      });
    }
  });
  const sitemapXml = generateSitemapXml(sitemapUrls);
  appendToSitemapXml(sitemapXml);
}

function generateSitemapXml(sitemapUrls) {
  const urlTags = sitemapUrls.map(
    ({ url, lastModified, changeFrequency }) => `
    <url>
      <loc>${url}</loc>
      <lastmod>${lastModified}</lastmod>
      <changefreq>${changeFrequency}</changefreq>
      <priority>1</priority>
    </url>
    `
  );
  const xmlContent = urlTags.join("");
  return xmlContent;
}

function appendToSitemapXml(newSitemapXml) {
  const sitemapFilePath = "public/sitemap.xml";
  const sitemapXml = fs.readFileSync(sitemapFilePath, "utf-8");
  const closingTagIndex = sitemapXml.lastIndexOf("</urlset>");
  if (closingTagIndex === -1) {
    throw new Error(`Could not find </urlset> tag in ${sitemapFilePath}`);
  }
  const newXmlContent = newSitemapXml + "\n";
  const newSitemapXmlContent =
    sitemapXml.slice(0, closingTagIndex) +
    newXmlContent +
    sitemapXml.slice(closingTagIndex);
  fs.writeFileSync(sitemapFilePath, newSitemapXmlContent);
}

// generateMainSitemap();
