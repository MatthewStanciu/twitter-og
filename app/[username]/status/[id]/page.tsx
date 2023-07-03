import { fetchTweet } from "@/lib/fetchTweet";
import { Metadata } from "next";
import { redirect } from "next/navigation";

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
  const { username, id } = params;
  return redirect(`https://twitter.com/${username}/status/${id}`);
}
