import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";

const roboto  = Roboto({ subsets: ["latin"], weight : ["400"] });

export const metadata: Metadata = {
  title: "I'm free and lost",
  description: "something i must leave",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
