import React from 'react';
import { Html, Head, Main, NextScript } from "next/document";
import { CssBaseline } from '@nextui-org/react';

export default function Document() {
  
  
  return (
    <Html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
          crossOrigin="anonymous"
        />
        <script src="https://accounts.google.com/gsi/client" async defer></script>
        {CssBaseline.flush()}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
