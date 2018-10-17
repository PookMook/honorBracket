import React  from 'react'
import Standing from './standing'

const Standings = (props) => (
  <div>
    <table>
      <thead>
        <tr>
          <th>Standing</th>
          <th>Bracket</th>
          <th>Name</th>
          <th>Honor</th>
          <th>Class</th>
          <th>Rank</th>
        </tr>
      </thead>
      <tbody>
        {props.nodes.map(node => node.node).sort(compare).map((node, i) => (
          <Standing key={"standing" + i} {...node} i={i} bracket={bracket(i+1,props.nodes.length)}/>
        ))}
      </tbody>
    </table>
  </div>
)


export default Standings

function compare(a,b) {
  if (parseInt(a.honor) > parseInt(b.honor))
    return -1;
  if (parseInt(a.honor) < parseInt(b.honor))
    return 1;
  return 0;
}

const bracket = function (standing, pool){
  const brackets = [0.2,0.7,1.7,3.7,7.7,13.7,20.7,28.7,37.7,47.7,58.7,71.5,85.8,100]
  const poolsizes = brackets.map((br,i) => (Math.round((br * pool)/100)))
  if(standing <= poolsizes[0]){return 14}
  else if(standing <= poolsizes[1]){return 13}
  else if(standing <= poolsizes[2]){return 12}
  else if(standing <= poolsizes[3]){return 11}
  else if(standing <= poolsizes[4]){return 10}
  else if(standing <= poolsizes[5]){return 9}
  else if(standing <= poolsizes[6]){return 8}
  else if(standing <= poolsizes[7]){return 7}
  else if(standing <= poolsizes[8]){return 6}
  else if(standing <= poolsizes[9]){return 5}
  else if(standing <= poolsizes[10]){return 4}
  else if(standing <= poolsizes[11]){return 3}
  else if(standing <= poolsizes[12]){return 2}
  else{return 1}
}
