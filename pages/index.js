import Head from "next/head";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [domain, setDomain] = useState();

  const [value, setValue] = useState();
  const [err, SetErr] = useState(false);

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

  const handleInput = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);
    const domainName = getDomainName(e.target.value, domainArr);
    console.log(domainName);
    SetErr(!domainName);
    if (domainName?.domain) {
      setDomain(domainName?.domain);
    }
  };

  const handlekeyDown = (e) => {
    if (e.keyCode === 13) {
      domain && !err && (window.location.pathname = `/${domain}`);
    }
  };

  const handleUrl = () => {
    domain && !err && (window.location.pathname = `/${domain}`);
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

  return (
    <>
      <Head>
        <title>WHOIS_OS</title>
        <meta name="title" content="WHOIS OS - " />
        <meta
          name="description"
          content="WHOIS Domain Lookup, Nameserver Lookup & IP Tools"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://whoisos.com/" />
        <meta property="og:title" content="WHOIS_OS" />
        <meta
          property="og:description"
          content="WHOIS Domain Lookup, Nameserver Lookup & IP Tools"
        />
        <meta
          property="og:image"
          content="https://whoisos.com/whois-cover.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://whoisos.com/" />
        <meta property="twitter:title" content="WHOIS_OS" />
        <meta
          property="twitter:description"
          content="WHOIS Domain Lookup, Nameserver Lookup & IP Tools"
        />
        <meta
          property="twitter:image"
          content="https://whoisos.com/whois-cover.png"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" href="https://whoisos.com/favicon.png" />

        <meta
          name="google-site-verification"
          content="Yp9e-xgEgjFSdaOwKgO0bv66QN5ScCpFxlGr0F8qUWk"
        />
      </Head>
      <main className="m-auto flex max-w-5xl flex-col px-4">
        <nav className="flex row justify-between items-center py-4">
          <a href="/">
            <span className="font-medium smd:text-xl py-2 px-4 text-white bg-black cursor-pointer rounded-full rounded-tl-sm ">
              WHOIS_OS
            </span>
          </a>
          <span>
            <ul className="flex row items-center gap-4 cursor-pointer">
              <li className="hidden sd:inline">
                <a
                  href="https://www.producthunt.com/posts/scrip-ai?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-scrip&#0045;ai"
                  target="_blank"
                >
                  <img
                    className="w-36"
                    src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=384573&theme=light"
                  />
                </a>
              </li>
              <li className="hover:font-semibold text-sm px-3 py-1 border border-black rounded-full">
                <a href="https://tally.so/r/n0d8bZ" target="_blank">
                  I'm feeling Luck!
                </a>
              </li>
            </ul>
          </span>
        </nav>
        <div className="flex flex-col items-center justify-center gap-6 p-2 py-20 ">
          <div className="line flex flex-col text-center text-base font-extrabold xs:text-lg sdm:text-3xl sm:gap-3 md:text-4xl mdx:text-5xl ">
            <span>WHOIS_OS</span>
            <span className="text-sm">
              WHOIS Domain Lookup, Nameserver Lookup & IP Tools <br />
            </span>
          </div>
          <div className="text-gray-600 w-full sm:w-3/4 rounded-full border-2 sm:border-2 border-black flex justify-around items-center px-2">
            <input
              type="text"
              name="url"
              onKeyDown={handlekeyDown}
              title="Please enter correct tiktok url"
              placeholder="type domain name or paste url..."
              className="w-full h-12 px-4 m:h-14 rounded-l-full text-sm font-light focus:outline-none text-black placeholder:text-slate-600 placeholder:font-light"
              value={value}
              onChange={handleInput}
              autoComplete="off"
            />
            <span className="flex items-center">
              <button
                onClick={handleUrl}
                className="cursor-pointer px-4 bg-black w-min flex justify-center h-8 m:h-10 items-center rounded-full text-white"
              >
                <span className="mr-1">Search</span>
              </button>
            </span>
          </div>
          {err && value && (
            <div className="text-xs text-red-600">
              please enter valid domain name!
            </div>
          )}
          <div className=" text-center text-xs">
            recently searched:{" "}
            <span className="text-blue-500 cursor-pointer">
              <a className="mr-1" href="/scripai.com">
                scripai.com
              </a>
              <a href="/careerdekho.ai">careerdekho.ai</a>
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
}
