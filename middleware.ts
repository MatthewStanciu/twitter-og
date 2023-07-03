import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

function parseUrl(url: string) {
  const urlSplit = url.split("/");
  const username = urlSplit[3];
  const id = urlSplit[5];
  return { username, id };
}

export function middleware(request: NextRequest) {
  console.log(request.url);
  const { username, id } = parseUrl(request.url);
  if (username && id) {
    return NextResponse.redirect(
      new URL(`${username}/status/${id}`, "https://twitter.com")
    );
  }
}

// export const config = {
//   matcher: "/:username/status/:id", // Can't get this to work, not sure why
// };
