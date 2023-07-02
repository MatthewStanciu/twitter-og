export async function fetchTweet(
  id: string
): Promise<{ text: string; user: any }> {
  const baseUrl = "https://cdn.syndication.twimg.com/tweet-result";

  const res = await fetch(`${baseUrl}?id=${id}`);
  const data = await res.json();
  console.log({ data });
  const { text, user } = data;
  return { text, user };
}
