import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { dir } from "i18next";
import { languages } from "./i18n/settings";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Headless CMS",
  description: "A sample headless CMS using Next.js and MicroCMS",
};

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function RootLayout({
  children,
  params: { lng },
}: {
  children: React.ReactNode;
  params: { lng: string };
}) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
