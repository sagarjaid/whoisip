import { generateMainSitemap } from "@/mainSitemap";
export default async function handler(req, res) {
  const timetaken = "Time taken by sitemap.xml function";

  console.time(timetaken);
  try {
    generateMainSitemap();
    console.log("sitemap.xml got out");
    res.status(200).json({ data: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to retrieve SSL data." });
  }
  console.timeEnd(timetaken);
}
