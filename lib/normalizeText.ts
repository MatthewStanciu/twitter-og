import type { TweetData } from "./types";

export function normalizeText(data: TweetData) {
  let text = data.text;

  if (data.entities.media) {
    // Remove URL of media if the tweet includes text
    data.entities.media.map((item) =>
      text.trim() !== item.url
        ? (text = text.replace(new RegExp("\\s*" + item.url + "\\s*", "g"), ""))
        : null
    );
  }
  if (data.entities.urls) {
    // the `text` property includes t.co links by default.
    // Replace with the real URLs.
    for (let i = 0; i < data.entities.urls.length; i++) {
      let urlObj = data.entities.urls[i];
      let urlRegex = new RegExp(urlObj.url, "g");
      text = text.replace(urlRegex, urlObj.display_url);
    }
  }

  return text;
}
