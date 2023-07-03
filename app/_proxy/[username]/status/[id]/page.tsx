import { fetchTweet } from "@/lib/fetchTweet";
import { Metadata } from "next";

interface PageProps {
  params: { username: string; id: string };
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { username, id } = params;
  const { text, user, photos, video } = await fetchTweet(id);

  const photoUrls: string[] = [];
  photos.map((photo) => photoUrls.push(photo.url));

  return {
    openGraph: {
      title: `@${user.screen_name} on Twitter`,
      siteName: "Twitter",
      type: "website",
      description: text,
      url: `https://twitter.com/${username}/status/${id}`,
      images: photoUrls,
      videos: video ? [video.variants[1].src as string] : undefined,
    },
    twitter: {
      card: "summary_large_image",
    },
  };
}

export default function Page() {
  return <h1>hi</h1>;
}
