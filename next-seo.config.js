/** @type {import('next-seo').DefaultSeoProps} */
// seo setup
const SEO = {
  defaultTitle: "Yale Experiment Programmers' Organization",
  titleTemplate: '%s - YEPO',
  description:
    'A Yale-based community of researchers across many disciplines, including the School of Medicine, Neuroscience, Psychology, Behavioral Economics etc. Researchers in our community all share an interest in developing tasks and surveys to study human behavior, both in-person and online.',
  canonical: 'https://yepo.yale.edu',
  additionalMetaTags: [
    {
      property: 'author',
      content: 'YEPO',
    },
    {
      property: 'language',
      content: 'en-us',
    },
    {
      property: 'keywords',
      content:
        'experiment, psychology, behavior, coding, programming, psych, python, javascript, framework, ',
    },
  ],
  openGraph: {
    type: 'website',
    locale: 'en',
    url: 'https://yepo.yale.edu',
    title: "Yale Experiment Programmers' Organization",
    description:
      'A Yale-based community of researchers across many disciplines, including the School of Medicine, Neuroscience, Psychology, Behavioral Economics etc. Researchers in our community all share an interest in developing tasks and surveys to study human behavior, both in-person and online.',
    site_name: 'YEPO home',
  },
};

export default SEO;
