module.exports = {
  siteMetadata: {
    title: 'Bracket Visualizer',
    lastUpdate: 'Tue Nov  6 21:30:01 UTC 2018',
    backgroundColor: '#003366',
    themeColor: '#003366',
    headerColor: '#FFCC00',
    headerTitleColor: '#003366'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'HonorSpy and bracket visualizer',
        short_name: 'HonorBracket',
        start_url: '/',
        background_color: '#003366',
        theme_color: '#003366',
        display: 'minimal-ui',
        icon: 'src/images/logo.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    `gatsby-transformer-csv`,
  ],
}
