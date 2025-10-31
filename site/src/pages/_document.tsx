import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Moody',
      jobTitle: 'Growth Marketing Lead',
      worksFor: {
        '@type': 'Organization',
        name: 'Tajer'
      },
      url: 'https://moody.tajer.eg',
      sameAs: [
        'https://www.linkedin.com/in/moody-marketer',
        'https://twitter.com/moody_marketer'
      ],
      description:
        'Egyptian marketer at Tajer leading bold e-commerce campaigns with measurable impact.'
    };

    return (
      <Html lang="ar" dir="rtl">
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="description"
            content="مودي، ماركتير مصري في شركة تاجر، يقود حملات جريئة تحقق نتائج مبهرة للعلامات التجارية."
          />
          <meta name="keywords" content="مودي, ماركتير, تاجر, تسويق رقمي, Egypt marketer" />
          <meta property="og:title" content="Moody @ Tajer | Bold Egyptian Marketing" />
          <meta
            property="og:description"
            content="Discover Moody's fearless campaigns at Tajer and how they transform brands across MENA."
          />
          <meta property="og:image" content="/preview.svg" />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Moody @ Tajer" />
          <meta
            name="twitter:description"
            content="Heroic Egyptian marketing campaigns engineered by Moody at Tajer."
          />
          <meta name="twitter:image" content="/preview.svg" />
          <link rel="icon" href="/favicon.svg" />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        </Head>
        <body className="bg-brandInk text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
