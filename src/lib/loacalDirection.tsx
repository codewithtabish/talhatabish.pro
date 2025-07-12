export function getDirection(locale: string) {
  // Add more locales as needed
  if (["ar", "ur", "fa", "he"].includes(locale)) return "rtl";
  return "ltr";
}
