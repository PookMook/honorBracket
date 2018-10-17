import React from 'react'

const Standing = (props) => (
  <tr className={"bracket"+props.bracket}>
    <td>{props.i + 1}</td>
    <td>{props.bracket}</td>
    <td>{props.name}</td>
    <td>{props.honor}</td>
    <td>{props.class}</td>
    <td>{Number(parseInt(props.rank) + parseFloat(props.rankProgress)).toFixed(2)}</td>
  </tr>
)

export default Standing
