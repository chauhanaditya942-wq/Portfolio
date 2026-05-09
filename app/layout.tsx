import { Providers } from "./providers";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aditya Chauhan | Full Stack Developer & Digital Marketer",
  description: "Full Stack Developer & Digital Marketing specialist from India. Building scalable web apps and running Meta & Google ad campaigns that convert.",
  keywords: ["Aditya Chauhan", "Full Stack Developer", "Digital Marketing", "React Developer", "Next.js", "Node.js", "Meta Ads", "Google Ads", "Web Developer India"],
  authors: [{ name: "Aditya Chauhan" }],
  creator: "Aditya Chauhan",
  verification: {
    google: "hhFzxqM6HAtpEkFplaBtm9qffdKG67YcaCRmj8T84yM",
  },
  openGraph: {
    type: "website",
    title: "Aditya Chauhan | Full Stack Developer & Digital Marketer",
    description: "Full Stack Developer & Digital Marketing specialist from India. Building scalable web apps and running Meta & Google ad campaigns that convert.",
    siteName: "Aditya Chauhan Portfolio",
    images: [
      {
        url: "/photo.jpg",
        width: 1200,
        height: 630,
        alt: "Aditya Chauhan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aditya Chauhan | Full Stack Developer",
    description: "Full Stack Developer & Digital Marketing specialist from India.",
    images: ["/photo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}