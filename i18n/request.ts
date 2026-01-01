import { getRequestConfig } from "next-intl/server";
import { cookies, headers } from "next/headers";

export default getRequestConfig(async () => {
  const store = await cookies();
  const requestHeaders = await headers();

  let locale = store.get("locale")?.value;
  if (!locale) {
    const acceptLanguage = requestHeaders.get("accept-language");
    locale =
      acceptLanguage?.split(",")[0]?.split("-")[0]?.toLowerCase() || "ar";
  }

  let messages;
  try {
    messages = (await import(`../messages/${locale}.json`)).default;
  } catch (error) {
    locale = "ar";
    messages = (await import(`../messages/ar.json`)).default;
  }

  return {
    locale,
    messages,
  };
});
