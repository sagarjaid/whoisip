import whois from "whois";
import dns from "dns";
import sslCertificate from "get-ssl-certificate";
import ip2location from "ip-to-location";
import getMetaData from "metadata-scraper";

const domain = "youtube.com";

// export default async function handler(req, res) {
//   whois.lookup("thegold.us", function (err, data) {
//     console.log(data);
//     res.status(200).json({ data: data });
//   });
// }
export default async function handler(req, res) {
  //   let start = new Date();
  //   console.log(start);

  var timetaken = "Time taken by addCount function";

  console.time(timetaken);

  // whois call

  whois.lookup(domain, function (err, data) {
    console.log(data);
    // res.status(200).json({ data: data });
  });

  // Http header
  console.log(req.headers);

  res.status(200).json({ data: req.headers });
  // A record
  dns.resolve4(domain, (err, addresses) => {
    console.log("A record:", addresses);
  });

  // AAAA record
  dns.resolve6(domain, (err, addresses) => {
    console.log("AAAA record:", addresses);
  });

  // CNAME record
  dns.resolveCname(domain, (err, addresses) => {
    console.log("CNAME record:", addresses);
  });

  // MX record
  dns.resolveMx(domain, (err, addresses) => {
    console.log("MX record:", addresses);
  });

  // NS record
  dns.resolveNs(domain, (err, addresses) => {
    console.log("NS record:", addresses);
  });

  // PTR record
  const ipAddress = "192.0.2.1";
  dns.reverse(ipAddress, (err, hostnames) => {
    console.log("PTR record:", hostnames);
  });

  // SOA record
  dns.resolveSoa(domain, (err, address) => {
    console.log("SOA record:", address);
  });

  // SRV record
  dns.resolveSrv("_xmpp-server._tcp.example.com", (err, addresses) => {
    console.log("SRV record:", addresses);
  });

  // TXT record
  dns.resolveTxt(domain, (err, addresses) => {
    console.log("TXT record:", addresses);
  });

  //   let end = new Date();
  //   console.log(end);

  //   let total = end - start;

  let url = `https://${domain}`;

  getMetaData(url).then((data) => {
    console.log(data, "meta");
  });

  ip2location.fetch(domain, function (err, res) {
    console.log(res, "ip location");
  });

  sslCertificate.get(domain).then(function (certificate) {
    console.log("ssl certificate");
    console.log(certificate);
    // certificate is a JavaScript object

    console.log(certificate.issuer);
    // { C: 'GB',
    //   ST: 'Greater Manchester',
    //   L: 'Salford',
    //   O: 'COMODO CA Limited',
    //   CN: 'COMODO RSA Domain Validation Secure Server CA' }

    console.log(certificate.valid_from);
    // 'Aug  14 00:00:00 2017 GMT'

    console.log(certificate.valid_to);
    // 'Nov 20 23:59:59 2019 GMT'

    // If there was a certificate.raw attribute, then you can access certificate.pemEncoded
    // console.log(certificate.pemEncoded)
    // -----BEGIN CERTIFICATE-----
    // ...
    // -----END CERTIFICATE-----
  });

  console.timeEnd(timetaken);

  //   console.log("Total Time :", total);
}
