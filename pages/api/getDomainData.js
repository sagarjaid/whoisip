import { domainArr } from "@/components/domainArr";

export default async function handler(req, res) {
  const timetaken = "Time taken by DOMAIN_DATA function";

  const domain = req.body.domain || "google";

  console.time(timetaken);

  try {
    function concatenateDomainExtension(str, arr) {
      const combinedArr = [];
      for (let i = 0; i < arr.length; i++) {
        combinedArr.push({
          domain: str + "." + arr[i],
          extenstion: "." + arr[i],
          name: arr[i],
        });
      }
      return combinedArr;
    }

    const Arr = concatenateDomainExtension(domain, domainArr);

    res.status(200).json({ data: Arr });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to retrieve domain data." });
  }

  console.timeEnd(timetaken);
}
