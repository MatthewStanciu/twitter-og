import "./globals.css";
import { Space_Grotesk, Space_Mono } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  weight: ["400", "700"],
  variable: "--space-grotesk",
  subsets: ["latin"],
});
const spaceMono = Space_Mono({
  weight: ["400"],
  variable: "--space-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Twitter OG",
  description:
    "Replace twitter.com with twitter-og.com when you share a tweet to show previews again!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${spaceMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
