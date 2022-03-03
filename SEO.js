import React from "react";
import Head from "next/head";
import Script from "next/script";

const SEO = (props) => {
  const { url, title, description, schemaType, children } = props;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta itemProp="name" content={title} />
        <meta itemProp="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
        {children}
      </Head>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://schema.org",
            "@type": schemaType,
            name: title,
            about: description,
            url: url,
          }),
        }}
        id="Seo"
      />
    </>
  );
};

SEO.defaultProps = {
  url: "/",
  schemaType: "Article",
};

export default SEO;
