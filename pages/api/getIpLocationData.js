import ip2location from "ip-to-location";

export default async function handler(req, res) {
  const domain = req.body.domain || "google.com";

  const timetaken = "Time taken by IP_LOCATION function";
  console.time(timetaken);

  try {
    const response = await new Promise((resolve, reject) => {
      ip2location.fetch(domain, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });

    res.status(200).json({ data: response });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to retrieve IP location data." });
  }

  console.timeEnd(timetaken);
}
