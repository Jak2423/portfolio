import { Html, Head, Main, NextScript } from 'next/document';

export default function Document(props) {
  return (
    <Html lang='en'>
      <Head>
        <link
          rel='preload'
          href='/fonts/JetBrainsMono.woff2'
          as='font'
          type='font/woff2'
          crossOrigin='anonymous'
        />
        <link href='/static/favicons/favicon.ico' rel='shortcut icon' />
        <link href='/static/favicons/site.webmanifest' rel='manifest' />
        <link
          href='/static/favicons/apple-touch-icon.png'
          rel='apple-touch-icon'
          sizes='180x180'
        />
        <link
          href='/static/favicons/favicon-32x32.png'
          rel='icon'
          sizes='32x32'
          type='image/png'
        />
        <link
          href='/static/favicons/favicon-16x16.png'
          rel='icon'
          sizes='16x16'
          type='image/png'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
