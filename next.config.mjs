/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    // デフォルトのロケール
    defaultLocale: "ja",
    // サポートするロケール
    locales: ["ja", "en"],
    // ロケールの検出を無効化（手動で切り替え）
    localeDetection: false,
  },
  // 画像の最適化設定
  images: {
    domains: ["images.microcms-assets.io"], // MicroCMSの画像ドメイン
  },
};

export default nextConfig;
