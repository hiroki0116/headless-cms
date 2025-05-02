import type { Metadata } from "next";
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import "../globals.css";

type Locale = "ja" | "en";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
  weight: ["400", "500", "700"],
});

const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  variable: "--font-noto-serif-jp",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "しずごはん",
  description: "夫婦で一緒につくる「季節の手仕事、季節料理」のレシピサイト",
};

export default function LangLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {
  return (
    <div
      className={`${notoSansJP.variable} ${notoSerifJP.variable} font-sans antialiased`}
    >
      {children}
    </div>
  );
}
