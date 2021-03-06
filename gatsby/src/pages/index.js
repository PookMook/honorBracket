import React from 'react'

import Layout from '../components/layout'
import Brackets from '../components/brackets'
import Nav from '../components/nav'
import Calc from '../components/honorCalc'

const IndexPage = function (props) {
  let playerInPrevPool = 0;
  const standings = props.data.allCurrentWeekCsv.edges.map((node) => node.node).sort(compare)
  const brackets = bracketsPool.map(function (bracket, i) {
    const lastInBracket = Math.round((standings.length * bracket) / 100)
    const inPool = lastInBracket - playerInPrevPool
    playerInPrevPool += inPool
    let firstInBracket = 0
    if (i > 0) { firstInBracket = Math.floor((standings.length * bracketsPool[i - 1]) / 100) }
    return (
      {
        bracket: 14 - i,
        top: bracket,
        PoolSize: lastInBracket,
        ceiling: standings[firstInBracket].honor,
        floor: standings[lastInBracket - 1].honor,
        deltaFloor: standings[lastInBracket] ? standings[lastInBracket].honor : 0,
        RP: bracketsRP[i],
        RPmax: bracketsRPMax[i],
        inPool: inPool
      }
    )
  })
  return (
    <Layout>
      <h1>Northdale alliance standing</h1>
      <Nav />
      <Brackets brackets={brackets} />
      <Calc brackets={brackets} />
    </Layout>
  )
}

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

const bracketsPool = [0.2, 0.7, 1.7, 3.7, 7.7, 13.7, 20.7, 28.7, 37.7, 47.7, 58.7, 71.5, 85.8, 100]
const bracketsRP = [12000, 11000, 10000, 9000, 8000, 7000, 6000, 5000, 4000, 3000, 2000, 1000, 400, 0]
const bracketsRPMax = [13000, 12000, 11000, 10000, 9000, 8000, 7000, 6000, 5000, 4000, 3000, 2000, 1000, 400]

function compare (a, b) {
  if (parseInt(a.honor) > parseInt(b.honor)) { return -1 }
  if (parseInt(a.honor) < parseInt(b.honor)) { return 1 }
  return 0
}
