"use client";

import Link from "next/link";

export default function Logo() {
  return (
    <div className="flex-shrink-0">
      <Link href="/" className="text-2xl font-bold text-gray-800">
        ふたりごはん
      </Link>
    </div>
  );
}
