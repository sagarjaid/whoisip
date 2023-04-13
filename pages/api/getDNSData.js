import dns from "dns";

export default async function handler(req, res) {
  const domain = req.body.domain || "google.com";

  var timetaken = "Time taken by DNS_DATA function";

  console.time(timetaken);

  const DNSRecord = {
    A: null,
    AAAA: null,
    CNAME: null,
    MX: null,
    NS: null,
    PTR: null,
    SOA: null,
    SRV: null,
    TXT: null,
  };

  Promise.all([
    dns.promises
      .resolve4(domain)
      .then((addresses) => {
        // console.log("A record:", addresses);
        DNSRecord.A = addresses;
      })
      .catch((error) => {
        console.error("Failed to resolve A record:", error);
      }),
    dns.promises
      .resolve6(domain)
      .then((addresses) => {
        // console.log("AAAA record:", addresses);
        DNSRecord.AAAA = addresses;
      })
      .catch((error) => {
        console.error("Failed to resolve AAAA record:", error);
      }),
    dns.promises
      .resolveCname(domain)
      .then((addresses) => {
        // console.log("CNAME record:", addresses);
        DNSRecord.CNAME = addresses;
      })
      .catch((error) => {
        console.error("Failed to resolve CNAME record:", error);
      }),
    dns.promises
      .resolveMx(domain)
      .then((addresses) => {
        // console.log("MX record:", addresses);
        DNSRecord.MX = addresses;
      })
      .catch((error) => {
        console.error("Failed to resolve MX record:", error);
      }),
    dns.promises
      .resolveNs(domain)
      .then((addresses) => {
        // console.log("NS record:", addresses);
        DNSRecord.NS = addresses;
      })
      .catch((error) => {
        console.error("Failed to resolve NS record:", error);
      }),
    dns.promises
      .reverse(domain)
      .then((hostnames) => {
        // console.log("PTR record:", hostnames);
        DNSRecord.PTR = hostnames;
      })
      .catch((error) => {
        console.error("Failed to resolve PTR record:", error);
      }),
    dns.promises
      .resolveSoa(domain)
      .then((address) => {
        // console.log("SOA record:", address);
        DNSRecord.SOA = address;
      })
      .catch((error) => {
        console.error("Failed to resolve SOA record:", error);
      }),
    dns.promises
      .resolveSrv("_xmpp-server._tcp.example.com")
      .then((addresses) => {
        // console.log("SRV record:", addresses);
        DNSRecord.SRV = addresses;
      })
      .catch((error) => {
        console.error("Failed to resolve SRV record:", error);
      }),
    dns.promises
      .resolveTxt(domain)
      .then((addresses) => {
        // console.log("TXT record:", addresses);
        DNSRecord.TXT = addresses;
      })
      .catch((error) => {
        console.error("Failed to resolve TXT record:", error);
      }),
  ])
    .then(() => {
      // console.log("All DNS records have been resolved:", DNSRecord);
      res.status(200).json({ data: DNSRecord });
    })
    .catch((error) => {
      console.error("Failed to resolve DNS records:", error);
    });

  console.timeEnd(timetaken);
}
