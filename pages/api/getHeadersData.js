export default async function handler(req, res) {
  const domain = req.body.domain || "google.com";

  const timetaken = "Time taken by HEARDER_DATA function";
  console.time(timetaken);

  try {
    res.status(200).json({
      data: {
        req: req.headers,
        res: res.headers || null,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to retrieve header data." });
  }

  console.timeEnd(timetaken);
}
