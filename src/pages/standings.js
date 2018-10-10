import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Standings from '../components/standings'
import Nav from '../components/nav'

const IndexPage = (props) => (
  <Layout>
    <h1>Northdale alliance standing</h1>
      <Nav/>
    <Standings nodes={props.data.allCurrentWeekCsv.edges}/>
    <Link to="/about/">About us</Link>
  </Layout>
)

export default IndexPage
export const IndexQuery = graphql`
  query {
    allCurrentWeekCsv {
      edges {
        node {
          name
          honor
          class
          LWHonor
          Standing
          rank
          rankProgress
          RP
        }
      }
    }
  }
`
