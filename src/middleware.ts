import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // デフォルトのロケールを設定
  const defaultLocale = "ja";
  const locales = ["ja", "en"];

  // パス名がロケールを含んでいるかチェック
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // ロケールが含まれていない場合は、デフォルトのロケールにリダイレクト
  if (pathnameIsMissingLocale) {
    return NextResponse.redirect(
      new URL(`/${defaultLocale}${pathname}`, request.url)
    );
  }
}

export const config = {
  matcher: [
    // すべてのパスをマッチさせるが、以下のパスは除外
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
