import { fetchTweet } from "@/lib/fetchTweet";
import { Metadata } from "next";

interface PageProps {
  params: { username: string; id: string };
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { username, id } = params;
  let { text, user, photos, video, media } = await fetchTweet(id);

  if (media) {
    media.map(
      (item: any) =>
        (text = text.replace(new RegExp("\\s*" + item.url + "\\s*", "g"), ""))
    );
  }

  const photoUrls: string[] = [];
  photos.map((photo) => photoUrls.push(photo.url));

  return {
    openGraph: {
      title: `${user.name} on Twitter`,
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
