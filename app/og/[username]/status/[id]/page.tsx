import { fetchTweet } from "@/lib/fetchTweet";
import type { Metadata } from "next";

interface PageProps {
  params: { username: string; id: string };
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { username, id } = params;
  const { text, user, photos, video } = await fetchTweet(id);

  const photoUrls: string[] = [];
  if (video) photoUrls.push(video.poster);
  photos.map((photo) => photoUrls.push(photo.url));

  return {
    themeColor: "#1ca0f2",
    alternates: {
      canonical: `https://twitter.com/${username}/status/${id}`,
    },
    openGraph: {
      title: `${user.name} on Twitter`,
      siteName: "Twitter",
      type: "website",
      description: text,
      url: `https://twitter.com/${username}/status/${id}`,
      images: photoUrls,
      videos: video
        ? [
            video.contentType === "gif"
              ? video.variants[0].src
              : video.variants[1].src,
          ]
        : undefined,
    },
    twitter: {
      title: `${user.name} on Twitter`,
      site: user.screen_name,
      description: text,
      creator: user.screen_name,
      images: photoUrls,
      card: "summary_large_image",
    },
  };
}

export default function Page() {
  return <h1>🕊️</h1>;
}
