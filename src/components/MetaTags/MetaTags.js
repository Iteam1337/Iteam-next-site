import Head from "next/head";

const MetaTags = ({ title, description, image }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} key="title" />
      <meta property="og:description" content={description} key="description" />
      {image && <meta property="og:image" content={image} key="image" />}
    </Head>
  );
};

export default MetaTags;
