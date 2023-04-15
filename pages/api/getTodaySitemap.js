import { generateTodaySitemap } from "@/sitemap";
export default async function handler(req, res) {
  const timetaken = "Time taken by sitemap-YYYY_MM_DD.xml function";

  console.time(timetaken);
  try {
    generateTodaySitemap();
    res.status(200).json({ data: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to retrieve SSL data." });
  }
  console.timeEnd(timetaken);
}
