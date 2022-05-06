import hreflang from "../config/hreflang";

export function getLink(location: string) {
  return hreflang[location];
}
