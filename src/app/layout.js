import "./globals.css";

// ★ ここでタブのタイトルとアイコンを設定します
export const metadata = {
  title: "TraceGram",
  description: "なぞって英語の構造を理解する、新感覚の言語学習ゲーム",
  icons: {
    // 拡張子が .jpg の場合は "/tracegramlogo.jpg" に変更してください
    icon: "/tracegramlogo.png", 
  },
};

export default function RootLayout({ children }) {
  return (
    // サイトの言語を日本語(ja)に設定
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}