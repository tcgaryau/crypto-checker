export function numberWithCommas(x: string | number) {
  var parts = (x + "").split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
}
