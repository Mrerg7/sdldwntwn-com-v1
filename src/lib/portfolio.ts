export type DomainCategory =
  | "geo"
  | "brandable"
  | "business"
  | "crypto"
  | "beauty";

export type PortfolioDomain = {
  name: string;
  url: string;
  price: number | null;
  tld: string;
  length: number;
  category: DomainCategory;
  keywords: string[];
  status: "available" | "featured" | "sold";
  blurb: string;
};

export const PORTFOLIO: PortfolioDomain[] = [
  {
    name: "sdldwntwn.com",
    url: "https://sdldwntwn.com",
    price: 55000,
    tld: "com",
    length: 9,
    category: "geo",
    keywords: ["scottsdale", "downtown", "old town"],
    status: "featured",
    blurb: "Definitive digital address for Downtown Scottsdale & Old Town.",
  },
  {
    name: "sdl.contact",
    url: "https://sdl.contact",
    price: null,
    tld: "contact",
    length: 3,
    category: "business",
    keywords: ["scottsdale", "directory", "vendors"],
    status: "available",
    blurb: "Scottsdale directory & vendor contact hub.",
  },
  {
    name: "sdl.hair",
    url: "https://sdl.hair",
    price: 12000,
    tld: "hair",
    length: 3,
    category: "beauty",
    keywords: ["salon", "hair", "beauty"],
    status: "available",
    blurb: "Premium short hair & salon brand domain.",
  },
  {
    name: "phx.beauty",
    url: "https://phx.beauty",
    price: 18000,
    tld: "beauty",
    length: 3,
    category: "beauty",
    keywords: ["phoenix", "beauty", "spa"],
    status: "available",
    blurb: "Phoenix beauty & spa destination domain.",
  },
  {
    name: "oldtwnsdl.com",
    url: "#",
    price: 28000,
    tld: "com",
    length: 10,
    category: "geo",
    keywords: ["old town", "scottsdale"],
    status: "available",
    blurb: "Alternate Old Town Scottsdale geo brand.",
  },
  {
    name: "azvault.com",
    url: "#",
    price: 9500,
    tld: "com",
    length: 7,
    category: "brandable",
    keywords: ["arizona", "vault", "brand"],
    status: "available",
    blurb: "Brandable Arizona investment / storage concept.",
  },
  {
    name: "desertledger.com",
    url: "#",
    price: 7500,
    tld: "com",
    length: 12,
    category: "crypto",
    keywords: ["ledger", "crypto", "desert"],
    status: "available",
    blurb: "Crypto / fintech brand with Southwest edge.",
  },
  {
    name: "scottsdalehq.com",
    url: "#",
    price: null,
    tld: "com",
    length: 12,
    category: "business",
    keywords: ["scottsdale", "hq", "office"],
    status: "sold",
    blurb: "Recently placed with a local operations brand.",
  },
];

export const CATEGORIES: { id: DomainCategory | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "geo", label: "Geo" },
  { id: "brandable", label: "Brandable" },
  { id: "business", label: "Business" },
  { id: "crypto", label: "Crypto" },
  { id: "beauty", label: "Beauty" },
];
