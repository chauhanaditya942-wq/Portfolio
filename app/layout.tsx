import { Providers } from "./providers";
import "./globals.css";
import type { Metadata } from "next";
import { Syne } from "next/font/google";
const syne = Syne({ subsets: ["latin"], weight: ["400","700","800"] });
// body mein: className={syne.className}
export const metadata: Metadata = {
  title: "Aditya Chauhan | Portfolio",
  description: "Web Developer & AI Workflow Creator",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {/* Providers poore app ko dark/light mode ki power deta hai */}
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}