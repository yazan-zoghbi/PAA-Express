import hreflang from "../config/hreflang";

function checkLocation(location: string) {
  if (location === undefined) {
    return false;
  }
  if (location.length === 0) {
    return false;
  }
  if (hreflang[location] === undefined) {
    return false;
  }
  return true;
}

export { checkLocation };
