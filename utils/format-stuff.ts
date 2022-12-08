export function removeLeadingZero(str: string): string {
  console.log(str);
  if (!str.length) return "";
  return str;
}

export function addCountryCode(str: string, countryCode: string): string {
  if (!str.length) return "";
  return `${countryCode}${str}`;
}
