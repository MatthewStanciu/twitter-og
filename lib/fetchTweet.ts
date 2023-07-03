import { Media, Photo, TweetData, User, Video } from "./types";

interface TweetDataSubset {
  text: string;
  user: User;
  photos: Photo[];
  video: Video | undefined;
  media: Media[] | undefined;
}

export async function fetchTweet(id: string): Promise<TweetDataSubset> {
  const baseUrl = "https://cdn.syndication.twimg.com/tweet-result";

  const res = await fetch(`${baseUrl}?id=${id}`);
  const data: TweetData = await res.json();
  const { text, user, photos, video, entities } = data;
  return {
    text,
    user,
    photos: photos ? photos : [],
    video,
    media: entities.media,
  };
}
