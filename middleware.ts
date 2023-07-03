import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

function parseUrl(url: string) {
  const urlSplit = url.split("/");
  const username = urlSplit[3];
  const id = urlSplit[5];
  return { username, id };
}

// Originally written by Steven Tey for dub.sh
// https://github.com/steven-tey/dub/blob/3112be1e8b8ce5eea09b1fb484afe142a1d9b6ae/lib/middleware/utils.ts#L37C1-L54C3
const detectBot = (req: NextRequest) => {
  const url = req.nextUrl;
  if (url.searchParams.get("bot")) return true;
  const ua = req.headers.get("User-Agent");
  if (ua) {
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
      new URL(`/og/${username}/status/${id}`, req.url)
    );
  } else {
    return NextResponse.redirect(
      new URL(`/${username}/status/${id}`, "https://twitter.com")
    );
  }
}

export const config = {
  // matches [username]/status/[id]
  matcher: ["/([^/]+)/status/([^/]+)/"],
};
