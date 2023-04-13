import whois from "whois-json";
// import whois from "whois";

export default async function handler(req, res) {
  const domain = req.body.domain || "google.com";
  console.log(domain, "domain");

  const timetaken = "Time taken by WHOIS_DATA function";
  console.time(timetaken);

  // whois.lookup(domain, function (err, data) {
  //   console.log(data);

  //   res.status(200).json({ whoisData: dat, isValid: true });
  // });

  try {
    const results = await whois(domain);
    res.status(200).json({ data: results });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to retrieve WHOIS data." });
  }

  console.timeEnd(timetaken);
}
