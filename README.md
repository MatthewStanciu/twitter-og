# twitter-og

Twitter shut down public access to the platform on June 30th, 2023, along with open graph data. This made me very sad because I share a lot of links to Twitter, and now they all look like this:

<img width="132" alt="Screenshot of a link in iMessage with no OG data" src="https://github.com/MatthewStanciu/twitter-og/assets/14811170/617ffb3d-72d5-46bf-8194-b08037b48554">

Thankfully, there’s an API for embedding tweets that’s still publicly accessible, which we can use to reconstruct the open graph data, so the tweets you share can look like this again:

<img width="370" alt="Screenshot of a link in iMessage with the caption 'I will be frontlining Glastonbury' and with a picture of a bear jumping in shallow water" src="https://github.com/MatthewStanciu/twitter-og/assets/14811170/22da3f77-b747-4185-8e78-9b91b3a86cda">

To use it, simply replace `twitter.com` with `twitter-og.com` in the link to any Twitter post. Clicking on a `twitter-og.com` link will still take you to the tweet.
