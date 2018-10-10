import React  from 'react'
import Standing from './standing'

const Standings = (props) => (
  <div>
    <table>
      <thead>
        <th>Standing</th>
        <th>Bracket</th>
        <th>Name</th>
        <th>Honor</th>
        <th>Class</th>
        <th>Rank</th>
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
  const top = Math.floor((standing / pool ) * 10000)
  if(top < 20){return 14}
  else if(top < 70){return 13}
  else if(top < 170){return 12}
  else if(top < 370){return 11}
  else if(top < 770){return 10}
  else if(top < 1370){return 9}
  else if(top < 2070){return 8}
  else if(top < 2870){return 7}
  else if(top < 3770){return 6}
  else if(top < 4770){return 5}
  else if(top < 5870){return 4}
  else if(top < 7150){return 3}
  else if(top < 8580){return 2}
  else{return 1}
}
