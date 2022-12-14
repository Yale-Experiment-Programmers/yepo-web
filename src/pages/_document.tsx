/*
 * _document.tsx
 * author: evan kirkiles
 * created on Tue Aug 23 2022
 * 2022 papercraft club
 */
import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* <!-- Content Type --> */}
        <meta
          httpEquiv="Content-Type"
          content="text/html; charset=utf-8"
        ></meta>

        {/* <!-- Favicon --> */}
        <link rel="icon" href="/favicon.ico" />
        <meta name="apple-mobile-web-app-title" content="papercraft club" />
        <meta name="application-name" content="papercraft club" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#00356b" />
        <meta name="msapplication-TileColor" content="#00356b" />
        <meta name="theme-color" content="#00356b"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
