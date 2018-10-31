import React from 'react'

const LastUpdate = ({ lastUpdate }) => (
  <nav id="lastUpdate">
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0.5rem 1.0875rem',
      }}
    >
      <p>last updated at {lastUpdate}</p>
    </div>
  </nav>
)

export default LastUpdate
