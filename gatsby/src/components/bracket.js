import React  from 'react'

const Bracket = function (props) {
  const lastInBracket = Math.floor((props.standings.length*props.bracket)/100)
  let firstInBracket = 0
  if(props.i > 0){firstInBracket = Math.floor((props.standings.length*BracketsPool[props.i-1])/100)}
  return (
    <tr>
      <td>{14 - props.i}</td>
      <td>top {props.bracket}%</td>
      <td>{lastInBracket}</td>
      <td>{props.standings[firstInBracket].honor}</td>
      <td>{props.standings[lastInBracket-1].honor}</td>
      <td>{BracketsRP[props.i]} RP</td>
    </tr>
  )
}


export default Bracket


const BracketsPool = [0.2,0.7,1.7,3.7,7.7,13.7,20.7,28.7,37.7,47.7,58.7,71.5,85.8,100]
const BracketsRP = [12000,11000,10000,9000,8000,7000,6000,5000,4000,3000,2000,1000,400,0]
