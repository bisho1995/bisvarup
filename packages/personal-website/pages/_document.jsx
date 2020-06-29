import React from 'react';
import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';
import styles from '../styles/_document.scss';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet" />
          <script src="https://apis.google.com/js/platform.js" />
          <meta name=" theme-color" content="#f56565" />
        </Head>
        <body className="bg-gray-100">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
