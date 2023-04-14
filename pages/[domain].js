import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";

import React, { useEffect, useState } from "react";
const DomainPage = () => {
  const router = useRouter();
  // const arr = [];

  const slug = router.query.domain;

  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(true);

  const [domainInputUrl, setDomainInputUrl] = useState();
  const [err, SetErr] = useState(false);

  const [domainName, setDomainName] = useState();
  const [domainData, SetDomainData] = useState();
  const [WhoisData, SetWhoisData] = useState();
  const [SSLData, SetSSLData] = useState();
  const [MetaData, SetMetaData] = useState();
  const [HeaderData, SetHeaderData] = useState();
  const [DNSData, SetDNSData] = useState();
  const [IpLocationData, SetIpLocationData] = useState();
  const [domainStatusData, setDomainStatusData] = useState();

  const domainArr = [
    "ac",
    "academy",
    "accountant",
    "accountants",
    "actor",
    "adult",
    "ag",
    "agency",
    "ai",
    "airforce",
    "am",
    "amsterdam",
    "apartments",
    "app",
    "archi",
    "army",
    "art",
    "asia",
    "associates",
    "at",
    "attorney",
    "au",
    "auction",
    "auto",
    "autos",
    "baby",
    "band",
    "bar",
    "barcelona",
    "bargains",
    "bayern",
    "be",
    "beauty",
    "beer",
    "berlin",
    "best",
    "bet",
    "bid",
    "bike",
    "bingo",
    "bio",
    "biz",
    "biz.pl",
    "black",
    "blog",
    "blue",
    "boats",
    "boston",
    "boutique",
    "build",
    "builders",
    "business",
    "buzz",
    "bz",
    "ca",
    "cab",
    "cafe",
    "camera",
    "camp",
    "capital",
    "car",
    "cards",
    "care",
    "careers",
    "cars",
    "casa",
    "cash",
    "casino",
    "catering",
    "cc",
    "center",
    "ceo",
    "ch",
    "charity",
    "chat",
    "cheap",
    "church",
    "city",
    "cl",
    "claims",
    "cleaning",
    "clinic",
    "clothing",
    "cloud",
    "club",
    "cn",
    "co",
    "co.in",
    "co.jp",
    "co.kr",
    "co.nz",
    "co.uk",
    "co.za",
    "coach",
    "codes",
    "coffee",
    "college",
    "com",
    "com.ag",
    "com.au",
    "com.br",
    "com.bz",
    "com.cn",
    "com.co",
    "com.es",
    "com.ky",
    "com.mx",
    "com.pe",
    "com.ph",
    "com.pl",
    "com.tw",
    "community",
    "company",
    "computer",
    "condos",
    "construction",
    "consulting",
    "contact",
    "contractors",
    "cooking",
    "cool",
    "country",
    "coupons",
    "courses",
    "credit",
    "creditcard",
    "cricket",
    "cruises",
    "cymru",
    "cz",
    "dance",
    "date",
    "dating",
    "de",
    "deals",
    "degree",
    "delivery",
    "democrat",
    "dental",
    "dentist",
    "design",
    "dev",
    "diamonds",
    "digital",
    "direct",
    "directory",
    "discount",
    "dk",
    "doctor",
    "dog",
    "domains",
    "download",
    "earth",
    "education",
    "email",
    "energy",
    "engineer",
    "engineering",
    "enterprises",
    "equipment",
    "es",
    "estate",
    "eu",
    "events",
    "exchange",
    "expert",
    "exposed",
    "express",
    "fail",
    "faith",
    "family",
    "fan",
    "fans",
    "farm",
    "fashion",
    "film",
    "finance",
    "financial",
    "firm.in",
    "fish",
    "fishing",
    "fit",
    "fitness",
    "flights",
    "florist",
    "fm",
    "football",
    "forsale",
    "foundation",
    "fr",
    "fun",
    "fund",
    "furniture",
    "futbol",
    "fyi",
    "gallery",
    "games",
    "garden",
    "gay",
    "gen.in",
    "gg",
    "gifts",
    "gives",
    "giving",
    "glass",
    "global",
    "gmbh",
    "gold",
    "golf",
    "graphics",
    "gratis",
    "green",
    "gripe",
    "group",
    "gs",
    "guide",
    "guru",
    "hair",
    "haus",
    "health",
    "healthcare",
    "hockey",
    "holdings",
    "holiday",
    "homes",
    "horse",
    "hospital",
    "host",
    "house",
    "idv.tw",
    "immo",
    "immobilien",
    "in",
    "inc",
    "ind.in",
    "industries",
    "info",
    "info.pl",
    "ink",
    "institute",
    "insure",
    "international",
    "investments",
    "io",
    "irish",
    "ist",
    "istanbul",
    "it",
    "jetzt",
    "jewelry",
    "jobs",
    "jp",
    "kaufen",
    "kids",
    "kim",
    "kitchen",
    "kiwi",
    "kr",
    "ky",
    "la",
    "land",
    "lat",
    "law",
    "lawyer",
    "lease",
    "legal",
    "lgbt",
    "life",
    "lighting",
    "limited",
    "limo",
    "live",
    "llc",
    "loan",
    "loans",
    "london",
    "love",
    "ltd",
    "ltda",
    "luxury",
    "maison",
    "makeup",
    "management",
    "market",
    "marketing",
    "mba",
    "me",
    "me.uk",
    "media",
    "melbourne",
    "memorial",
    "men",
    "menu",
    "miami",
    "mobi",
    "moda",
    "moe",
    "money",
    "monster",
    "mortgage",
    "motorcycles",
    "movie",
    "ms",
    "mx",
    "nagoya",
    "name",
    "navy",
    "ne.kr",
    "net",
    "net.ag",
    "net.au",
    "net.br",
    "net.bz",
    "net.cn",
    "net.co",
    "net.in",
    "net.ky",
    "net.nz",
    "net.pe",
    "net.ph",
    "net.pl",
    "network",
    "news",
    "ninja",
    "nl",
    "no",
    "nom.co",
    "nom.es",
    "nom.pe",
    "nrw",
    "nyc",
    "okinawa",
    "one",
    "onl",
    "online",
    "org",
    "org.ag",
    "org.au",
    "org.cn",
    "org.es",
    "org.in",
    "org.ky",
    "org.nz",
    "org.pe",
    "org.ph",
    "org.pl",
    "org.uk",
    "page",
    "paris",
    "partners",
    "parts",
    "party",
    "pe",
    "pet",
    "ph",
    "photography",
    "photos",
    "pictures",
    "pink",
    "pizza",
    "pl",
    "place",
    "plumbing",
    "plus",
    "poker",
    "porn",
    "press",
    "pro",
    "productions",
    "promo",
    "properties",
    "protection",
    "pub",
    "pw",
    "quebec",
    "quest",
    "racing",
    "re.kr",
    "realestate",
    "recipes",
    "red",
    "rehab",
    "reise",
    "reisen",
    "rent",
    "rentals",
    "repair",
    "report",
    "republican",
    "rest",
    "restaurant",
    "review",
    "reviews",
    "rich",
    "rip",
    "rocks",
    "rodeo",
    "run",
    "ryukyu",
    "sale",
    "salon",
    "sarl",
    "school",
    "schule",
    "science",
    "se",
    "security",
    "services",
    "sex",
    "sg",
    "sh",
    "shiksha",
    "shoes",
    "shop",
    "shopping",
    "show",
    "singles",
    "site",
    "ski",
    "skin",
    "soccer",
    "social",
    "software",
    "solar",
    "solutions",
    "space",
    "storage",
    "store",
    "stream",
    "studio",
    "study",
    "style",
    "supplies",
    "supply",
    "support",
    "surf",
    "surgery",
    "sydney",
    "systems",
    "tax",
    "taxi",
    "team",
    "tech",
    "technology",
    "tel",
    "tennis",
    "theater",
    "theatre",
    "tickets",
    "tienda",
    "tips",
    "tires",
    "today",
    "tokyo",
    "tools",
    "tours",
    "town",
    "toys",
    "trade",
    "training",
    "travel",
    "tube",
    "tv",
    "tw",
    "uk",
    "university",
    "uno",
    "us",
    "vacations",
    "vc",
    "vegas",
    "ventures",
    "vet",
    "viajes",
    "video",
    "villas",
    "vin",
    "vip",
    "vision",
    "vodka",
    "vote",
    "voto",
    "voyage",
    "wales",
    "watch",
    "webcam",
    "website",
    "wedding",
    "wiki",
    "win",
    "wine",
    "work",
    "works",
    "world",
    "ws",
    "wtf",
    "xxx",
    "xyz",
    "yachts",
    "yoga",
    "yokohama",
    "zone",
    "移动",
  ];

  // function renderObject(obj) {
  //   return (
  //     <ul>
  //       {Object.entries(obj).map(([key, value]) => (
  //         <li key={key}>
  //           <strong>{key}:</strong>{" "}
  //           {typeof value === "object" ? renderObject(value) : value}
  //         </li>
  //       ))}
  //     </ul>
  //   );
  // }

  // function renderObject(obj, ignoredKeys) {
  //   return (
  //     <ul>
  //       {Object.entries(obj).map(([key, value, index]) => {
  //         if (ignoredKeys.includes(key)) {
  //           return null; // Skip rendering this key-value pair
  //         }
  //         return (
  //           <li key={key} className="border-b flex gap-2 border-black">
  //             <strong>{key}:</strong>{" "}
  //             {typeof value === "object"
  //               ? renderObject(value, ignoredKeys)
  //               : value}
  //           </li>
  //         );
  //       })}
  //     </ul>
  //   );
  // }

  // function renderObject(obj, ignoredKeys) {
  //   return (
  //     <ul>
  //       {Object.entries(obj).map(([key, value], index) => {
  //         if (ignoredKeys.includes(key)) {
  //           return null; // Skip rendering this key-value pair
  //         }
  //         return (
  //           <li
  //             key={key}
  //             className={index === 0 ? "border-b flex gap-2 border-black" : ""}
  //           >
  //             <strong>{key}:</strong>{" "}
  //             {typeof value === "object"
  //               ? renderObject(value, ignoredKeys)
  //               : value}
  //           </li>
  //         );
  //       })}
  //     </ul>
  //   );
  // }

  const handleInput = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);
    let domainurl = getDomainName(e.target.value, domainArr);
    console.log(domainurl);
    SetErr(!domainurl);
    if (domainurl?.domain) {
      setDomainInputUrl(domainurl?.domain);
    }
  };

  const handlekeyDown = (e) => {
    if (e.keyCode === 13) {
      domainInputUrl &&
        !err &&
        (window.location.pathname = `/${domainInputUrl}`);
    }
  };

  const handleUrl = () => {
    domainInputUrl && !err && (window.location.pathname = `/${domainInputUrl}`);
  };

  const getDomainName = (url, suffixes) => {
    // Find & remove protocol (http, ftp, etc.) and get domain
    let domain = "";
    if (url.includes("://")) {
      domain = url.split("/")[2];
    } else {
      domain = url.split("/")[0];
    }

    // Remove port number if exists
    domain = domain.split(":")[0];

    // Remove www. if exists
    domain = domain.replace(/^www\./i, "");

    // Check if domain name ends with any of the specified suffixes
    const validSuffix = suffixes.some((suffix) => domain.endsWith(suffix));
    if (!validSuffix || domain.includes(" ")) {
      return false;
    }

    const domainName = domain;

    // Get name without top-level domain

    const parts = domainName?.split(".");
    const name = parts.slice(0, -1).join(".");
    return {
      domain: domainName,
      name: name,
    };
  };

  const getData = async (url) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ domain: url }),
    };

    const res1 = await fetch("/api/getWhoisData", options);
    const resWhoisData = await res1.json();
    SetWhoisData(resWhoisData.data);
    console.log(resWhoisData, "resWhoisData");

    const res2 = await fetch("/api/getSSLData", options);
    const resSSLData = await res2.json();
    SetSSLData(resSSLData.data);
    console.log(resSSLData, "resSSLData");

    const res3 = await fetch("/api/getMetaData", options);
    const resMetaData = await res3.json();
    SetMetaData(resMetaData.data);
    console.log(resMetaData, "resMetaData");

    const res4 = await fetch("/api/getIpLocationData", options);
    const resIpLocationData = await res4.json();
    SetIpLocationData(resIpLocationData.data);
    console.log(resIpLocationData, "resIpLocationData");

    const res5 = await fetch("/api/getDNSData", options);
    const resDNSData = await res5.json();
    SetDNSData(resDNSData.data);
    console.log(resDNSData, "resDNSData");

    const res6 = await fetch("/api/getDomainData", options);
    const DomainData = await res6.json();

    SetDomainData(DomainData.data);
    console.log(DomainData, "resDomainData");

    const res7 = await fetch("/api/getHeadersData ", options);
    const resHeaderData = await res7.json();
    SetHeaderData(resHeaderData.data.req);
    console.log(resHeaderData, "resIpLocationData");

    const domainStatus = resWhoisData?.data?.domainStatus;

    const domainSArr = domainStatus?.split(" ");

    const domainStatusArr = [];

    for (let i = 0; i < domainSArr?.length; i += 2) {
      const obj = {
        domainStatus: domainSArr[i],
        url: domainSArr[i + 1],
      };
      domainStatusArr.push(obj);
    }
    setDomainStatusData(domainStatusArr);
    setLoading(false);
  };

  useEffect(() => {
    console.log(slug, "domain EF");
    if (slug) {
      const domainObj = getDomainName(slug, domainArr);
      console.log(domainObj, "domainObj");
      setDomainName(domainObj);
      if (domainObj?.domain) {
        getData(domainObj?.domain);
      }
    }
  }, [slug]);

  if (loading) {
    <div className="text-center my-auto">Loading...</div>;
  }

  if (domainName === false)
    return (
      <div className="text-center my-auto">
        please enter valid domain name...
      </div>
    );

  return (
    <>
      <Head>
        <title>{domainName?.domain}</title>
        <meta name="title" content={domainName?.domain} />
        <meta
          name="description"
          content={domainName?.domain + " " + MetaData?.title}
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://whoisos.com/" />
        <meta property="og:title" content={domainName?.domain} />
        <meta
          property="og:description"
          content={domainName?.domain + " " + MetaData?.title}
        />
        <meta property="og:image" content={MetaData?.image} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://whoisos.com/" />
        <meta property="twitter:title" content={domainName?.domain} />
        <meta
          property="twitter:description"
          content={domainName?.domain + " " + MetaData?.title}
        />
        <meta property="twitter:image" content={MetaData?.image} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" href={MetaData?.icon} />

        <meta
          name="google-site-verification"
          // content="Yp9e-xgEgjFSdaOwKgO0bv66QN5ScCpFxlGr0F8qUWk"
        />
      </Head>
      <main className="m-auto flex max-w-5xl flex-col px-4 ">
        <nav className="flex flex-col w-full gap-6  sm:flex-row  justify-between sm:items-center py-4">
          <a href="/">
            <span className="font-medium smd:text-xl py-2 px-4 text-white bg-black cursor-pointer rounded-full rounded-tl-sm ">
              WHOIS_OS
            </span>
          </a>
          <div className="text-gray-600 w-full grow rounded-full border-2 sm:border-2 border-black  flex justify-around items-center px-1 pr-0">
            <input
              type="text"
              name="url"
              onKeyDown={handlekeyDown}
              title="Please enter correct tiktok url"
              placeholder="type domain name or paste url..."
              className="w-full pl-4 rounded-l-full text-sm font-light focus:outline-none text-black placeholder:text-slate-600 placeholder:font-light"
              value={value}
              onChange={handleInput}
              autoComplete="off"
            />
            <span className="flex items-center">
              <button
                onClick={handleUrl}
                className="cursor-pointer px-4 bg-black w-min rounded-r-full flex justify-center h-10 sm:h-8 items-center  text-white"
              >
                <span className="mr-1">Search</span>
              </button>
            </span>
          </div>
        </nav>
        {err && value && (
          <div className="text-xs text-left sm:text-right text-red-600">
            please enter valid domain name!
          </div>
        )}
        <div className="flex flex-col gap-6 py-5 overflow-hidden ">
          <div className="flex gap-2 flex-wrap justify-between items-center sm:items-start">
            <div className="flex flex-col justify-start gap-3">
              <h1 className=" text-2xl font-bold">{domainName?.domain}</h1>
              <div className="text-xs">{MetaData?.url}</div>
              <div className="text-sm">
                {MetaData?.title || "no title found"}
              </div>
              <div className="text-sm">{MetaData?.description}</div>
              <div className="text-xs">
                Keywords :{" "}
                {MetaData?.keywords
                  ? MetaData?.keywords?.map((el) => (
                      <span key={el} className="pr-1">
                        {el}
                      </span>
                    ))
                  : "no keywords found in meta-data"}
              </div>
            </div>

            <img
              src={MetaData?.image}
              className=" border w-[300px] h-[250px] object-cover"
            />
            {/* <div>
              <div className="w-[300px] h-[250px] bg-white"></div>
            </div>
            <div>
              <div className="w-[300px] h-[250px] bg-white"></div>
            </div> */}
          </div>

          <div className="flex flex-col gap-1">
            <div className="text-base underline">
              About {domainName?.domain}
            </div>
            <div className="text-sm">
              The website {domainName?.name} ({domainName?.domain}) was created
              on {WhoisData?.creationDate || "undefined date"}. The website is
              owned by{" "}
              {WhoisData?.registrantName ||
                WhoisData?.registrantOrganization ||
                "undefined"}{" "}
              which is based in{" "}
              {WhoisData?.registrantStateProvince || "undefined"}{" "}
              {WhoisData?.registrantCity || "location"}. The domain is
              registered with {WhoisData?.registrar || "undefined"}. and has a
              Domain ID of {WhoisData?.registryDomainId || "undefined"}. The
              website's domain name {domainName?.domain} is set to expire on{" "}
              {WhoisData?.registrarRegistrationExpirationDate || "undefined"}.
              The website's Name Servers are{" "}
              {DNSData?.NS ? DNSData?.NS[0] : "undefined"} and{" "}
              {DNSData?.NS ? DNSData?.NS[1] : "undefined"}, which help direct
              traffic to the website. The information on the website's domain
              name, registration, and ownership can be found through publicly
              available records.
            </div>
          </div>
          <div className="flex gap-3 flex-wrap">
            {/* <div>
              <div className="w-[300px] h-[600px] bg-black"></div>
            </div> */}
            <div className=" flex flex-col text-sm gap-3 grow">
              <div className="text-base border-black   border-b-2">
                SSL certificate
              </div>

              {/* {SSLData &&
                SSLData.map((obj, index) => (
                  <div key={index}>
                    {renderObject(obj, ["data", "pemEncoded", "modulus"])}
                  </div>
                ))} */}

              <div className="border-b border-black">
                Domain Name: {SSLData?.subject?.CN || "undefined"}
              </div>
              <div className="border-b border-black">
                Issuer Country: {SSLData?.issuer?.C || "undefined"}
              </div>
              <div className="border-b border-black">
                Issuer Organization: {SSLData?.issuer?.O || "undefined"}
              </div>
              <div className="border-b border-black">
                Issuer CN: {SSLData?.issuer?.CN || "undefined"}
              </div>
              <div className="border-b border-black">
                Other Domains : {SSLData?.subjectaltname || "undefined"}
              </div>
              <div className="border-b border-black">
                Info Access :{" "}
                {JSON.stringify(SSLData?.infoAccess) || "undefined"}
              </div>
              <div className="border-b border-black">SSL Version: 2</div>
              <div className="border-b border-black">
                Issued on:{SSLData?.valid_from || "undefined"}
              </div>
              <div className="border-b border-black">
                Expires on: {SSLData?.valid_to || "undefined"}
              </div>
              <div className="border-b border-black">
                Serial Number: {SSLData?.serialNumber || "undefined"}
              </div>
              <div className="border-b border-black">
                Public Key Algorithm: {SSLData?.fingerprint || "undefined"}
              </div>
            </div>
            <div className=" flex flex-col text-sm gap-3 grow">
              <div className="text-base border-black   border-b-2">
                Server location
              </div>
              <div className="border-b border-black">
                Country Name: {IpLocationData?.country_name || "undefined"}
              </div>
              <div className="border-b border-black">
                Region Code: {IpLocationData?.region_code || "undefined"}
              </div>
              <div className="border-b border-black">
                Region Name: {IpLocationData?.region_name || "undefined"}
              </div>
              <div className="border-b border-black">
                Time Zone: {IpLocationData?.time_zone || "undefined"}
              </div>
              <div className="border-b border-black">
                City: {IpLocationData?.city || "undefined"}
              </div>
              <div className="border-b border-black">
                ISP: {IpLocationData?.isp || "undefined"}
              </div>
              <div className="border-b border-black">
                Zip Code: {IpLocationData?.zip_code || "undefined"}
              </div>
              <div className="border-b border-black">
                Latitude: {IpLocationData?.latitude || "undefined"}
              </div>
              <div className="border-b border-black">
                Longitude: {IpLocationData?.longitude || "undefined"}
              </div>
            </div>
            <div className=" flex flex-col text-sm gap-3 grow">
              <div className="text-base border-black   border-b-2">
                Name Server
              </div>
              <div className="border-b border-black">
                Name Server: {DNSData?.NS ? DNSData?.NS[0] : "undefined"}
              </div>
              <div className="border-b border-black">
                Name Server: {DNSData?.NS ? DNSData?.NS[1] : "undefined"}
              </div>
              <div className="border-b border-black">
                Name Server: {DNSData?.NS ? DNSData?.NS[2] : "undefined"}
              </div>
              <div className="border-b border-black">
                Name Server: {DNSData?.NS ? DNSData?.NS[3] : "undefined"}
              </div>
            </div>
            {/* <div className=" flex flex-col text-sm gap-2 grow">
              <div className="text-base underline">Server location</div>
              <div>country_code: 'US'</div>
              <div>country_name: 'United States'</div>
              <div>region_code: NJ</div>
              <div>region_name: New Jersey</div>
              <div>city: Colts Neck</div>
              <div>isp: Google LLC</div>
              <div>zip_code: 07722</div>
              <div>latitude: 40.3029</div>
              <div>longitude: -74.1828</div>
              <div>time_zone: America/New_York</div>
            </div> */}
          </div>

          <div className="flex flex-col gap-3">
            <div className="text-base border-black border-b-2">
              Whois lookup {domainName?.domain}
            </div>
            <div className="flex flex-col gap-3 border p-2">
              <div className="text-sm">
                Domain Name: {WhoisData?.domainName || "undefined"}
              </div>
              <div className="text-sm">
                Updated Date: {WhoisData?.updatedDate || "undefined"}
              </div>
              <div className="text-sm">
                Creation Date: {WhoisData?.creationDate || "undefined"}
              </div>
              <div className="text-sm">
                Expiration Date:{" "}
                {WhoisData?.registrarRegistrationExpirationDate || "undefined"}
              </div>
              <div className="text-sm">
                Domain ID: {WhoisData?.registryDomainId || "undefined"}
              </div>

              <div className="text-sm">
                Domain Registrar: {WhoisData?.registrar || "undefined"}
              </div>
              <div className="text-sm">
                Domain Registrar IANA ID:{" "}
                {WhoisData?.registrarIanaId || "undefined"}
              </div>
              <div className="text-sm">
                Domain Registrar WHOIS Server:{" "}
                {WhoisData?.creationDate || "undefined"}
              </div>

              <div className="text-sm">
                Domain Registrar URL:{" "}
                {WhoisData?.registrarWhoisServer || "undefined"}
              </div>

              <div className="text-sm">
                Domain Registrar Abuse Contact Email:
                {WhoisData?.registrarAbuseContactEmail || "undefined"}
              </div>

              <div className="text-sm">
                Domain Registrar Abuse Contact Phone:{" "}
                {WhoisData?.registrarAbuseContactPhone || "undefined"}
              </div>
              {domainStatusData &&
                domainStatusData?.map((el) => (
                  <div className="text-sm">
                    Domain Status: {el.domainStatus || "undefined"}
                    <div className="text-xs">{el.domainStatus && el.url}</div>
                  </div>
                ))}
              <div className="text-sm">
                Owner Name:{" "}
                {WhoisData?.registrantName ||
                  WhoisData?.registrantOrganization ||
                  "undefined"}
              </div>
              <div className="text-sm">
                Owner Organization:{" "}
                {WhoisData?.registrantOrganization || "undefined"}
              </div>
              <div className="text-sm">
                Owner State/Province:{" "}
                {WhoisData?.registrantStateProvince || "undefined"}
              </div>
              <div className="text-sm">
                Owner Country: {WhoisData?.registrantCity || "undefined"}
              </div>
              <div className="text-sm">
                Owner Postal Code:{" "}
                {WhoisData?.registrantPostalCode || "undefined"}
              </div>
              <div className="text-sm">
                Website Admin Organization:{" "}
                {WhoisData?.adminName ||
                  WhoisData?.adminOrganization ||
                  "undefined"}
              </div>
              <div className="text-sm">
                Website Admin City: {WhoisData?.adminCity || "undefined"}
              </div>

              <div className="text-sm">
                Website Admin State/Province:{" "}
                {WhoisData?.adminStateProvince || "undefined"}
              </div>
              <div className="text-sm">
                Website Admin Country: {WhoisData?.adminCountry || "undefined"}
              </div>
              <div className="text-sm">
                Website Admin Postal Code:{" "}
                {WhoisData?.adminPostalCode || "undefined"}
              </div>
              <div className="text-sm">
                WHOIS_OS Last Upade:{" "}
                {WhoisData?.lastUpdateOfWhoisDatabase || "undefined"}
              </div>
            </div>
          </div>
          <div className=" flex flex-col text-sm gap-3 grow">
            <div className="text-base border-black   border-b-2">
              DNS record
            </div>
            <div className="border-b flex flex-wrap gap-2 border-black">
              NS record:{" "}
              {DNSData?.NS?.map((el) => <span key={el}>{el}</span>) ||
                "undefined"}
            </div>
            <div className="border-b border-black">
              A record: {DNSData?.A || "undefined"}
            </div>
            <div className="border-b border-black">
              CNAME record: {DNSData?.CNAME || "undefined"}
            </div>
            <div className="border-b border-black">
              AAAA record: {DNSData?.AAAA || "undefined"}
            </div>
            <div className="border-b border-black">
              MX record:{" "}
              {DNSData?.MX?.map((el) => (
                <span key={el}>{`${el.exchange} - ${el.priority}`}</span>
              )) || "undefined"}
            </div>
            <div className="border-b flex flex-wrap gap-2 border-black">
              TXT record:{" "}
              {DNSData?.TXT?.map((el) => <span key={el}>{el}</span>) ||
                "undefined"}
            </div>
            <div className="border-b border-black">
              SRV record: {DNSData?.SRV || "undefined"}
            </div>
            <div className="border-b border-black">
              PTR record: {DNSData?.PTR || "undefined"}
            </div>
            <div className="border-b border-black">
              SOA record: {`${JSON.stringify(DNSData?.SOA)}` || "undefined"}
            </div>
          </div>

          <div>
            <div className="text-base border-black   border-b-2">
              HTTP Reqvest headers
            </div>
            <textarea
              rows={10}
              className="w-full p-1 text-sm border h-full"
              value={JSON.stringify(HeaderData)}
            />
          </div>

          <div className="flex flex-col gap-3">
            <div className="text-base border-black">
              Alternate domain extensions {domainName?.domain}
            </div>
            <span className="flex text-gray-800 flex-wrap gap-2">
              {domainData &&
                domainData?.map((el) => (
                  <div
                    className="flex w-full sm:w-fit justify-between p-2 border border-black rounded-md items-center"
                    key={el.extenstion}
                  >
                    <span className="flex flex-col justify-center gap-1">
                      <span className="text-xl text-green-600 font-bold">
                        {el.extenstion}
                      </span>
                      <span className="ml-1">{el.domain} </span>

                      <span className="ml-1 text-xs text-gray-500">
                        check the availability on Godaddy
                      </span>
                    </span>
                    <span className=" h-full rounded-md flex items-start">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          clipRule="evenodd"
                          fillRule="evenodd"
                          d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z"
                        />
                        <path
                          clipRule="evenodd"
                          fillRule="evenodd"
                          d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z"
                        />
                      </svg>
                    </span>
                  </div>
                ))}
            </span>
          </div>
          <div className="flex text-sm items-center gap-2 pt-10">
            <a href="https://www.linkedin.com/in/sagarjaid/" target="_blank">
              dev: sagar jaid
            </a>
            <span>|</span>

            <a href="https://whoisos.com/privacy" target="_blank">
              privacy policy
            </a>
            <span>|</span>
            <a href="https://whoisos.com/tc" target="_blank">
              terms and conditions
            </a>
            <span>|</span>
            <a href="https://whoisos.com/gdrp" target="_blank">
              GDRP policy
            </a>
          </div>
        </div>
      </main>
    </>
  );
};

export default DomainPage;
