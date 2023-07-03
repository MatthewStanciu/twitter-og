import Image from "next/image";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center p-6 md:p-12 gap-8">
      <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-cyan-400">
        twitter-og
      </h1>
      <div className="w-full max-w-xl flex flex-col gap-4">
        <p>
          Twitter shut down public access to the platform on June 30th, 2023,
          along with open graph data. This made me very sad because I share a
          lot of links to Twitter, and now they all look like this:
        </p>
        <Image
          alt="Screenshot of a link in iMessage with no OG data"
          className="mx-auto"
          src="/broken-og.png"
          width={264}
          height={90}
        />
        <p>
          Thankfully, there's still an API for embedding tweets that's still
          publicly accessible, which we can use to reconstruct the open graph
          data, so the tweets you share can look like this again:
        </p>
        <Image
          alt="Screenshot of a link in iMessage with the caption 'I will be frontlining Glastonbury' and with a picture of a bear jumping in shallow water"
          className="mx-auto"
          src="/working-og.png"
          width={350}
          height={301}
        />
        <p>
          To use it, simply replace{" "}
          <span>
            <code>twitter.com</code>
          </span>{" "}
          with{" "}
          <span>
            <code>twitter-og.com</code>
          </span>{" "}
          in the link to any Twitter post. Clicking on a{" "}
          <span>
            <code>twitter-og.com</code>
          </span>{" "}
          link will still take you to the tweet.
        </p>
        <a href="https://github.com/MatthewStanciu/twitter-og" target="_blank">
          Read the source & contribute.
        </a>
      </div>
      <p>
        💛 By{" "}
        <span>
          <a href="https://matthewstanciu.com" target="_blank">
            Matthew
          </a>
        </span>
      </p>
    </main>
  );
}
