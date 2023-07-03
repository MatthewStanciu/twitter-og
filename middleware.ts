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
  if (ua) {
    /* Note:
     * - bot is for most bots & crawlers
     * - ChatGPT is for ChatGPT
     * - facebookexternalhit is for Facebook crawler
     * - WhatsApp is for WhatsApp crawler
     * - MetaInspector is for https://metatags.io/
     */
    return /bot|chatgpt|facebookexternalhit|WhatsApp|google|baidu|bing|msn|duckduckbot|teoma|slurp|yandex|MetaInspector|node-fetch|axios|got/i.test(
      ua
    );
  }
  return false;
};

export function middleware(req: NextRequest) {
  const { username, id } = parseUrl(req.url);
  const isBot = detectBot(req);
  if (isBot) {
    return NextResponse.rewrite(
      new URL(`/bot/${username}/status/${id}`, req.url)
    );
  } else {
    return NextResponse.redirect(
      new URL(`/${username}/status/${id}`, "https://twitter.com")
    );
  }
}

export const config = {
  matcher: [
    "/((?!_next/|bot/|_static|_vercel|favicon.ico|sitemap.xml|apple-touch-icon-precomposed.png|apple-touch-icon.png).*)",
  ],
};
