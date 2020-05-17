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
        <Head />
        <body className="wrapper-w1">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
