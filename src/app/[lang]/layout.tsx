import { getTranslation } from "../i18n/server";
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import DefaultLayout from "@/app/components/templates/DefaultLayout";
import "../globals.css";

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

export default async function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  await getTranslation(lang);

  return (
    <html lang={lang}>
      <body
        className={`${notoSansJP.variable} ${notoSerifJP.variable} font-sans antialiased`}
      >
        <DefaultLayout>{children}</DefaultLayout>
      </body>
    </html>
  );
}
