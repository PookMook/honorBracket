import React from 'react'
import { Link } from 'gatsby'

const Nav = () => (
  <nav id="Nav">
    <Link to="/" activeStyle={{display:'none'}}>Brackets</Link>
    <Link to="/standings" activeStyle={{display:'none'}}>Standings</Link>
    <Link to="/about/" activeStyle={{display:'none'}}>About</Link>
  </nav>
)

export default Nav
