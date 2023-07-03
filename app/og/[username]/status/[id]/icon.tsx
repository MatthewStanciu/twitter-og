import { fetchTweet } from "@/lib/fetchTweet";
import { ImageResponse } from "next/server";

export const runtime = "edge";

export const size = {
  width: 73,
  height: 73,
};
export const contentType = "image/png";

export default async function Icon({
  params,
}: {
  params: { username: string; id: string };
}) {
  const { username, id } = params;
  const { user } = await fetchTweet(id);
  const avatarUrl = user.profile_image_url_https.replace("normal", "bigger");

  return new ImageResponse(
    (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        style={{ borderRadius: "4px" }}
        alt={`Twitter user ${username}'s avatar`}
        src={avatarUrl}
      />
    ),
    {
      ...size,
    }
  );
}
