"use client";

export default function LanguageSwitcher() {
  return (
    <div className="flex items-center">
      <button className="text-gray-600 hover:text-blue-500">EN</button>
      <span className="mx-2 text-gray-300">|</span>
      <button className="text-gray-600 hover:text-blue-500">JA</button>
    </div>
  );
}
