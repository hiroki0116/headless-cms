import { Locale } from "@/i18n/config";
import Link from "next/link";

const languages: { code: Locale; name: string }[] = [
  { code: "ja", name: "日本語" },
  { code: "en", name: "English" },
];

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-8">
          言語を選択してください / Select Language
        </h1>
        <div className="flex gap-4 justify-center">
          {languages.map((lang) => (
            <Link
              key={lang.code}
              href={`/${lang.code}`}
              className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              {lang.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
