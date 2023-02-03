import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" href="css/main.min.css" />
        <link rel="stylesheet" href="css/style.css" />
        <link rel="stylesheet" href="css/color.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
