import { getRequestConfig } from "next-intl/server";


export default getRequestConfig(async () => {
  var locale = "en";
  try {
    // Use headers to retrieve the locale directly from the cookie header
    const cookieHeader = await headers().get("cookie");
    const localeMatch = cookieHeader?.match(/locale=(\w+)/);
    locale = localeMatch ? localeMatch[1] : "en"; // Default to English if no cookie is found
  } catch (error) {}
  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
