export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">ふたりごはん</h3>
            <p className="text-gray-300">
              二人で作る、二人で食べる。そんな特別な時間を大切に。
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">リンク</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-300 hover:text-white">
                  ホーム
                </a>
              </li>
              <li>
                <a href="/recipes" className="text-gray-300 hover:text-white">
                  レシピ
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-300 hover:text-white">
                  このサイトについて
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">お問い合わせ</h3>
            <p className="text-gray-300">
              ご質問やご要望がございましたら、
              <br />
              お気軽にお問い合わせください。
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
          <p>&copy; 2024 ふたりごはん. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
