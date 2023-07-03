import { fetchTweet } from "@/lib/fetchTweet";
import { Metadata } from "next";

interface PageProps {
  params: { username: string; id: string };
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { username, id } = params;
  let { text, user, photos, video, media, mediaDetails } = await fetchTweet(id);

  if (media) {
    media.map(
      (item) =>
        (text = text.replace(new RegExp("\\s*" + item.url + "\\s*", "g"), ""))
    );
  }

  const photoUrls: string[] = [];
  if (video) photoUrls.push(video.poster);
  photos.map((photo) => photoUrls.push(photo.url));

  return {
    themeColor: "#1ca0f2",
    openGraph: {
      title: `${user.name} on Twitter`,
      siteName: "Twitter",
      // type: video ? "video.other" : "website",
      type: "website",
      description: text,
      url: `https://twitter.com/${username}/status/${id}`,
      images: photoUrls,
      videos: video ? [video.variants[1].src] : undefined,
    },
    twitter: {
      title: `${user.name} on Twitter`,
      site: user.screen_name,
      description: text,
      creator: user.screen_name,
      images: photoUrls,
      card: video ? "player" : "summary_large_image",
      players: {
        playerUrl: video.variants[1].src,
        streamUrl: video.variants[1].src,
        width: mediaDetails[0].original_info.width,
        height: mediaDetails[0].original_info.height,
      },
    },
  };
}

export default function Page() {
  return <h1>hi</h1>;
}
