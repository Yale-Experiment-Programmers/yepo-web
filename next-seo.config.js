/** @type {import('next-seo').DefaultSeoProps} */
// seo setup
const SEO = {
  defaultTitle: 'Evan Kirkiles - has a world.',
  titleTemplate: '%s - evan has a world',
  description: 'An index into the web work of one (1) evan wood kirkiles.',
  canonical: 'https://evan-has-a.world',
  additionalMetaTags: [
    {
      property: 'author',
      content: 'Evan Kirkiles',
    },
    {
      property: 'language',
      content: 'en-us',
    },
    {
      property: 'keywords',
      content:
        'art, artist, painting, paper, papercraft, papercrafting, scissors, cut, glue, fold, visuals, graphic design, blender, 3d, 2d, concept, sculpture, game, video, videogame',
    },
  ],
  openGraph: {
    type: 'website',
    locale: 'en',
    url: 'https://evan-has-a.world',
    title: 'Evan Kirkiles has a world.',
    description: 'An index into the web work of one (1) evan wood kirkiles.',
    site_name: 'evan has a world',
  },
};

export default SEO;
