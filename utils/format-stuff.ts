export function removeLeadingZero(str: string): string {
  console.log(str);
  if (!str.length) return "";
  if (parseInt(str[0]) > 0) {
    console.log(str[0]);
  }
  return str;
}

export function addCountryCode(str: string, countryCode: string): string {
  console.log(str);
  if (!str.length) return "";
  return `${countryCode}${str}`;
}
