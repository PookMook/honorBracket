import React from 'react'
import { Stage, Layer, Rect, Circle, Text, Line } from 'react-konva'

const RankGraph = (props) => (
  <Stage width={920} height={500}>
    <Layer>
    <Text text='Ranking points per honor' fill='yellow' x={30} />
      {props.brackets.map((bracket, i) => (
          <Circle x={honor2x(bracket.ceiling)} y={RP2y(bracket.RPmax)} radius={3} fill='green' />
      ))}

      <Line stroke='green' strokeWidth={1} lineCap='round' lineJoin='round' points={[honor2x(1500000),RP2y(13000),
        ...flatMapBrackets(props.brackets),honor2x(0),RP2y(0)]} x={0} y={0} />

      {yAxis.map((y) => (
        <>
          <Rect x={15} y={RP2y(y * 1000)} width={5} height={1} fill='yellow' />
          <Text x={0} y={RP2y(y * 1000)-10} fill='yellow' text={y+'k'} />
        </>
      ))

      }
      {xAxis.map((x) => (
        <>
          <Rect x={honor2x(x*1000)} y={425} width={1} height={5} fill='yellow' />
          <Text x={honor2x(x*1000)-10} y={435} fill='yellow' text={x+'k'} />
        </>
      ))}

      <Rect x={20} y={425} width={900} height={1} fill='yellow' />
      <Rect x={20} y={5} width={1} height={420} fill='yellow' />

      <Rect x={20} y={RP2y(props.state.floor + props.state.delta)} width={honor2x(props.state.honor) - 20} height={1} fill='red' />
      <Rect x={honor2x(props.state.honor)} y={RP2y(props.state.floor + props.state.delta)} width={1} height={425 - RP2y(props.state.floor + props.state.delta)} fill='red' />
      <Circle x={honor2x(props.state.honor)} y={RP2y(props.state.floor + props.state.delta)} radius={3} fill='red' />
    </Layer>
  </Stage>
)

export default RankGraph

const RP2y = (RP) => (
  425 - (RP / 1000) * 30
)

const honor2x = (honor) => (
  20 + (honor / 1500000) * 900
)

const flatMapBrackets = function(brackets){
  let array = brackets.map((bracket) => ([honor2x(bracket.ceiling),RP2y(bracket.RPmax)]))
  array = array.reduce((acc, val) => acc.concat(val), [])
  return array
}

const xAxis = [50,100,200,300,400,500,600,700,800,900,1000,1100,1200,1300,1400]
const yAxis = [1,2,3,4,5,6,7,8,9,10,11,12,13]
