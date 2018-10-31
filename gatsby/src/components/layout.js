import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import LastUpdate from './lastUpdate'
import './layout.css'
import favicon from '../images/logo.png';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
	          lastUpdate
            backgroundColor
            themeColor
            headerColor
            headerTitleColor
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          {...data.site.siteMetadata}
          meta={[
            { name: 'description', content: 'PvP ranking system Vanilla World of Warcraft' },
            { name: 'keywords', content: 'Ranking, PvP, wow, world of warcraft, vanilla, 1.12, classic, ranks, honor, reward' },
          ]}
          link={[
            { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header {...data.site.siteMetadata} />
        <LastUpdate {...data.site.siteMetadata} />
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
          {children}
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
