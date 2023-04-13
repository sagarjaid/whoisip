// function getDomainName(url, suffixes) {
//   var domainName;
//   //find & remove protocol (http, ftp, etc.) and get domain
//   if (url.indexOf("://") > -1) {
//     domainName = url.split("/")[2];
//   } else {
//     domainName = url.split("/")[0];
//   }
//   //remove port number if exists
//   domainName = domainName.split(":")[0];
//   //remove www. if exists
//   domainName = domainName.replace("www.", "");
//   //check if domain name ends with any of the specified suffixes
//   var validSuffix = false;
//   for (var i = 0; i < suffixes.length; i++) {
//     var suffix = suffixes[i];
//     if (domainName.endsWith(suffix)) {
//       validSuffix = true;
//       break;
//     }
//   }
//   if (!validSuffix || domainName.includes(" ")) {
//     return false;
//   }
//   return domainName;
// }

// `The website ${domainName.domain} (${domain}) was created on ${creationDate}. The website is owned by ${owenerOrganization}, which is based in ${owenerState} ${owenerCountry}. The domain is registered with ${domainRegistrar}. and has a Domain ID of ${domainID}. The website's domain name ${domainName.domain} is set to expire on ${expirationDate}. The website's Name Servers are ${NS1} and ${NS2}, which help direct traffic to the website. The information on the website's domain name, registration, and ownership can be found through publicly available records.`;
