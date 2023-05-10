import "@/styles/globals.css";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-J76FXF2VER`}
        strategy="afterInteractive"
      />

      <Script
        async={true}
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7096102876286946"
        strategy="afterInteractive"
        crossOrigin="anonymous"
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-J76FXF2VER');
        `}
      </Script>
      <Component {...pageProps} />
    </>
  );
}
