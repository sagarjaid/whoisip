import sslCertificate from "get-ssl-certificate";

export default async function handler(req, res) {
  const domain = req.body.domain || "careerdekho.ai";
  const timetaken = "Time taken by SSL_DATA function";

  console.time(timetaken);

  try {
    const certificate = await sslCertificate.get(domain);
    // certificate is a JavaScript object

    res.status(200).json({ data: certificate });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to retrieve SSL data." });
  }

  console.timeEnd(timetaken);
}
