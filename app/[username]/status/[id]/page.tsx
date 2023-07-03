import { fetchTweet } from "@/lib/fetchTweet";
import { Metadata, ResolvingMetadata } from "next";

interface PageProps {
  params: { username: string; id: string };
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { username, id } = params;
  const { text, user } = await fetchTweet(id);

  return {
    openGraph: {
      title: `@${user.screen_name} on Twitter`,
      description: text,
      url: `https://twitter.com/${username}/status/${id}`,
    },
  };
}

export default function Page({ params }: PageProps) {
  console.log({ params });
  return <h1>{JSON.stringify(params)}</h1>;
}
