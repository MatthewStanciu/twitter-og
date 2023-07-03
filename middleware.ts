import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

function parseUrl(url: string) {
  const urlSplit = url.split("/");
  const username = urlSplit[3];
  const id = urlSplit[5];
  return { username, id };
}

const detectBot = (req: NextRequest) => {
  const url = req.nextUrl;
  if (url.searchParams.get("bot")) return true;
  const ua = req.headers.get("User-Agent");
  console.log({ ua });
  if (ua) {
    /* Note:
     * - bot is for most bots & crawlers
     * - ChatGPT is for ChatGPT
     * - facebookexternalhit is for Facebook crawler
     * - WhatsApp is for WhatsApp crawler
     * - MetaInspector is for https://metatags.io/
     */
    return /bot|chatgpt|facebookexternalhit|WhatsApp|google|baidu|bing|msn|duckduckbot|teoma|slurp|yandex|MetaInspector/i.test(
      ua
    );
  }
  return false;
};

export function middleware(req: NextRequest) {
  const isBot = detectBot(req);
  if (isBot) {
    const { username, id } = parseUrl(req.url);
    console.log({ username, id });
    return NextResponse.rewrite(
      new URL(`/_proxy/${username}/status/${id}`, req.url)
    );
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/about/:path*",
};
