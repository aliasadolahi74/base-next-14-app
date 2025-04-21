import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Technical Test",
  description: "Technical test",
  authors: [{ name: "Ali Asadollahi", url: "https://github.com/aliasadolahi74" }],
};

const workSans = Work_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${workSans.className} antialiased h-full w-full`}>{children}</body>
    </html>
  );
}
