import { fetchTweet } from "@/lib/fetchTweet";
import { ImageResponse } from "next/server";

export const runtime = "edge";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default async function Icon({
  params,
}: {
  params: { username: string; id: string };
}) {
  const { username, id } = params;
  const { user } = await fetchTweet(id);
  const avatarUrl = user.profile_image_url_https;

  return new ImageResponse(
    (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        style={{ borderRadius: "50%" }}
        alt={`Twitter user ${username}'s avatar`}
        src={avatarUrl}
      />
    ),
    {
      ...size,
    }
  );
}
