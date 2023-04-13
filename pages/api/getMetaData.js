import getMetaData from "metadata-scraper";

export default async function handler(req, res) {
  const domain = req.body.domain || "google.com";

  const timetaken = "Time taken by META_DATA function";
  console.time(timetaken);

  try {
    const url = `https://${domain}`;
    const MetaData = await getMetaData(url);
    res.status(200).json({ data: MetaData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to retrieve metadata." });
  }

  console.timeEnd(timetaken);
}
