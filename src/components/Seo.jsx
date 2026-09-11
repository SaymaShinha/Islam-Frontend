import { Helmet } from "react-helmet-async";

const SITE_URL = "https://furqanlife.vercel.app";

const SEO = ({
  title,
  description,
  path = "",
  image = `${SITE_URL}/og-image.jpg`,
  type = "website",
}) => {
  const canonicalUrl = `${SITE_URL}${path}`;

  const fullTitle = title
    ? `${title} | Furqan Life`
    : "Furqan Life | Quran, Islamic Knowledge & Learning Resources";

  return (
    <Helmet>
      {/* Basic SEO */}
      <title>{fullTitle}</title>

      <meta name="description" content={description} />

      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Furqan Life" />
      <meta property="og:image" content={image} />

      {/* Twitter/X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;
