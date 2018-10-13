import React from 'react'
import { Link } from 'gatsby'

const Nav = () => (
  <nav id="Nav">
    <Link to="/" activeStyle={{color: 'white', textDecoration: 'none'}}>Brackets</Link>
    <Link to="/standings" activeStyle={{color: 'white', textDecoration: 'none'}}>Standings</Link>
    <Link to="/about/" activeStyle={{color: 'white', textDecoration: 'none'}}>About</Link>
  </nav>
)

export default Nav
