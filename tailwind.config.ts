import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // メインカラー
        primary: {
          DEFAULT: "#F5A623", // オレンジ
          light: "#FFB74D",
          dark: "#F57C00",
        },
        // アクセントカラー
        accent: {
          DEFAULT: "#4CAF50", // グリーン
          light: "#81C784",
          dark: "#388E3C",
        },
        // テキストカラー
        text: {
          DEFAULT: "#333333",
          light: "#666666",
          dark: "#000000",
        },
        // 背景カラー
        background: {
          DEFAULT: "#FFFFFF",
          light: "#F5F5F5",
          dark: "#EEEEEE",
        },
      },
      fontFamily: {
        sans: [
          "Noto Sans JP",
          "Helvetica Neue",
          "Arial",
          "Hiragino Kaku Gothic ProN",
          "Hiragino Sans",
          "Meiryo",
          "sans-serif",
        ],
        serif: [
          "Noto Serif JP",
          "Times New Roman",
          "YuMincho",
          "Yu Mincho",
          "serif",
        ],
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1.5" }], // 12px
        sm: ["0.875rem", { lineHeight: "1.5" }], // 14px
        base: ["1rem", { lineHeight: "1.5" }], // 16px
        lg: ["1.125rem", { lineHeight: "1.5" }], // 18px
        xl: ["1.25rem", { lineHeight: "1.5" }], // 20px
        "2xl": ["1.5rem", { lineHeight: "1.5" }], // 24px
        "3xl": ["1.875rem", { lineHeight: "1.2" }], // 30px
        "4xl": ["2.25rem", { lineHeight: "1.2" }], // 36px
        "5xl": ["3rem", { lineHeight: "1.2" }], // 48px
      },
      spacing: {
        // グリッドシステム用のスペーシング
        gutter: "1rem", // 16px
        container: "1200px",
        section: "4rem", // 64px
      },
      maxWidth: {
        container: "1200px",
      },
      borderRadius: {
        sm: "4px",
        DEFAULT: "8px",
        lg: "12px",
        xl: "16px",
      },
      boxShadow: {
        sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        DEFAULT:
          "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [],
};
export default config;
