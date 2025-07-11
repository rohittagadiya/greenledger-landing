import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Favicon with cache busting */}
        <link rel="icon" href="/favicon.svg?v=2" type="image/svg+xml" />
        <link rel="icon" href="/favicon-16.svg?v=2" type="image/svg+xml" sizes="16x16" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.svg?v=2" />
        
        {/* Alternative favicon formats */}
        <link rel="shortcut icon" href="/favicon.svg?v=2" type="image/svg+xml" />
        
        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#059669" />
        
        {/* Manifest for PWA */}
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
