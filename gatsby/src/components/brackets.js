import React  from 'react'
import Bracket from './bracket'


const Brackets = function (props) {
  const sortedStanding = props.nodes.map(node => node.node).sort(compare);
  return (
    <div>
      <table>
        <thead>
          <th>Bracket</th>
          <th>Cutoff</th>
          <th>PoolSize</th>
          <th>Honor ceiling</th>
          <th>Honor floor</th>
          <th>Floor RP gains</th>
        </thead>
        <tbody>
          {BracketsPool.map((bracket, i) => (
            <Bracket key={i} i={i} bracket={bracket} standings={sortedStanding}/>
          ))}
        </tbody>
      </table>
    </div>
  )
}


export default Brackets


const BracketsPool = [0.2,0.7,1.7,3.7,7.7,13.7,20.7,28.7,37.7,47.7,58.7,71.5,85.8,100]



function compare(a,b) {
  if (parseInt(a.honor) > parseInt(b.honor))
    return -1;
  if (parseInt(a.honor) < parseInt(b.honor))
    return 1;
  return 0;
}
