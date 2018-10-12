import React  from 'react'
import Bracket from './bracket'


const Brackets = function (props) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Bracket</th>
            <th>Cutoff</th>
            <th>PoolSize</th>
            <th>Honor ceiling</th>
            <th>Honor floor</th>
            <th>Floor RP gains</th>
          </tr>
        </thead>
        <tbody>
          {props.brackets.map((bracket,i)=>(
            <Bracket bracket={bracket} key={i} />
          ))}
        </tbody>
      </table>
    </div>
  )
}


export default Brackets
