import React from 'react'
import { Link } from 'gatsby'

const Header = ({ title, lastUpdate, backgroundColor, themeColor, headerColor, headerTitleColor }) => (
  <div
    style={{
      background: headerColor,
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: headerTitleColor,
            textDecoration: 'none',
          }}
        >
          {title} (updated at {lastUpdate})
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
