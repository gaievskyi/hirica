import { Html, Head, Main, NextScript } from "next/document"

const Document = () => (
  <Html>
    <Head>
      <link
        href="https://fonts.cdnfonts.com/css/century-gothic"
        rel="stylesheet"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="./apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="./favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="./favicon-16x16.png"
      />
      <link rel="shortcut icon" href="./favicon.ico" />
      <link rel="manifest" href="./site.webmanifest" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
)

export default Document
