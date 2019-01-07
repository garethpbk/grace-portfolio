module.exports = {
  siteMetadata: {
    title: 'Grace Mae Huddleston',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `rnpqidzxa4bk`,
        accessToken: `a139ac29aea3d7a31a192bf8f3177a222bd394906779f4bbfee05ed6cb2aac10`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [],
      },
    },
    'gatsby-plugin-offline',
  ],
};
