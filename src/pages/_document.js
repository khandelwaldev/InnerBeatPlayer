import { Head, Html, Main, NextScript } from "next/document";

export default function MyDocument() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head />
      <body className="bg-black text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
