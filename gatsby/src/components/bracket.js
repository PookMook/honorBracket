import React  from 'react'

const Bracket = (props) => (
  <tr>
    <td>{props.bracket.bracket}</td>
    <td>top {props.bracket.top}%</td>
    <td>{props.bracket.inPool} ({props.bracket.PoolSize})</td>
    <td>{props.bracket.ceiling}</td>
    <td>{props.bracket.floor}</td>
    <td>{props.bracket.RP} RP</td>
  </tr>)

export default Bracket
