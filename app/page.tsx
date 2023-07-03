import Image from "next/image";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-8">
      <h1 className="text-4xl font-bold">twitter-og</h1>
      <div className="w-full max-w-xl flex flex-col gap-4 items-center">
        <p>
          Twitter shut down public access to the platform on June 30th, 2023,
          along with open graph data. This made me very sad because I share a
          lot of links to Twitter, and now they all look like this:
        </p>
        <Image
          alt="Screenshot of a link in iMessage with no OG data"
          src="/broken-og.png"
          width={264}
          height={90}
        />
        <p>
          Thankfully there's still a secret embed API that's still running, and
          you can use it to reconstruct the open graph data, so the tweets you
          share can look like this again:
        </p>
        <Image
          alt="Screenshot of a link in iMessage with the caption 'I will be frontlining Glastonbury' and with a picture of a bear jumping in shallow water"
          src="/working-og.png"
          width={350}
          height={301}
        />
      </div>
    </main>
  );
}
