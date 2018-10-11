import React from 'react'

import Layout from '../components/layout'
import Brackets from '../components/brackets'
import Nav from '../components/nav'

const IndexPage = (props) => (
  <Layout>
    <h1>Northdale alliance standing</h1>
    <Nav/>
    <Brackets nodes={props.data.allCurrentWeekCsv.edges}/>
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
          standing
          rank
          rankProgress
          RP
        }
      }
    }
  }
`
