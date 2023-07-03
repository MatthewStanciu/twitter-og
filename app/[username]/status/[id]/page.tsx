import { redirect } from "next/navigation";

interface PageProps {
  params: { username: string; id: string };
}

export default function Page({ params }: PageProps) {
  const { username, id } = params;
  return redirect(`https://twitter.com/${username}/status/${id}`);
}
