export default async function handler(req, res) {
  const timetaken = "Time taken by DOMAIN_DATA function";

  const domain = req.body.domain || "google";

  const Arr = [
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

    const domainArr = concatenateDomainExtension(domain, Arr);

    res.status(200).json({ data: domainArr });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to retrieve domain data." });
  }

  console.timeEnd(timetaken);
}
