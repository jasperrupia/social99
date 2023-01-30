import "../styles/globals.css";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script src="js/main.min.js" strategy="beforeInteractive" />
      <Script src="js/script.js" />
      <Component {...pageProps} />
    </>
  );
}
 