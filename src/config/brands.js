// Central brand registry. Add a new entry + host mapping to add another domain.

export const BRANDS = {
  raspoly: {
    key: "raspoly",
    name: "RAS Polytex Pvt. Ltd.",
    legalName: "RAS Polytex PVT LTD",
    tagline: "An ISO 9001, 14001, 22000 Company",
    since: "SINCE 1983",
    logo: "/assets/images/logo/logo.png",
    domain: "https://raspoly.com",
  },
  interweave: {
    key: "interweave",
    name: "Interweave Polytex",
    legalName: "Interweave Polytex",
    tagline: "An ISO 9001, 14001, 22000 Company",
    since: "SINCE 1983",
    // Drop the new file in /public/assets/images/logo/ and point to it here.
    // Until then this falls back to the existing logo.
    logo: "/assets/images/logo/logo.png",
    domain: "https://www.interweavepolytex.com",
  },
};

// hostname (lowercase, no port) -> brand key
const HOST_MAP = {
  "interweavepolytex.com": "interweave",
  "www.interweavepolytex.com": "interweave",
};

export const DEFAULT_BRAND = BRANDS.raspoly;

export function getBrandFromHost(host) {
  if (!host) return DEFAULT_BRAND;
  const hostname = host.toLowerCase().split(":")[0].trim();
  const key = HOST_MAP[hostname];
  return (key && BRANDS[key]) || DEFAULT_BRAND;
}
