// Central brand registry. Add a new entry + host mapping to add another domain.
//
// logo:    path to the header/footer logo image. Set to null to render NO logo
//          image at all (a text mark is shown instead where one is needed).
// favicon: browser tab icon. Set to null to emit no <link rel="icon"> tag.

export const BRANDS = {
  raspoly: {
    key: "raspoly",
    name: "RAS Polytex Pvt. Ltd.",
    shortName: "RAS Polytex",
    legalName: "RAS Polytex PVT LTD",
    tagline: "An ISO 9001, 14001, 22000 Company",
    since: "SINCE 1983",
    logo: "/assets/images/logo/logo.png",
    favicon: "/assets/images/logo/logo.png",
    domain: "https://raspoly.com",
  },
  interweave: {
    key: "interweave",
    name: "Interweave Polytex",
    shortName: "Interweave",
    legalName: "Interweave Polytex",
    tagline: "An ISO 9001, 14001, 22000 Company",
    since: "SINCE 1983",
    // No RAS mark on this domain. When the Interweave logo file is ready,
    // drop it in /public/assets/images/logo/ and set both paths below.
    logo: null,
    favicon: null,
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
