import "./globals.css";
import { Inter, Space_Grotesk, Space_Mono } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

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
  description: "Bring back OG metdata to Twitter",
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
