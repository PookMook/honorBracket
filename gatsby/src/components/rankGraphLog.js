import React from 'react'
import { Stage, Layer, Rect, Circle, Text, Line } from 'react-konva'

const RankGraphLog = (props) => (
  <Stage width={920} height={450}>
    <Layer>


      {props.brackets.map((bracket, i) => (
          <Circle x={honor2x(bracket.ceiling)} y={RP2y(bracket.RPmax)} radius={3} fill='green' />
      ))}

      <Line stroke='green' strokeWidth={1} lineCap='round' lineJoin='round' points={[honor2x(3500000),RP2y(13000),
        ...props.brackets.flatMap((bracket) => (
          [honor2x(bracket.ceiling),RP2y(bracket.RPmax)]
        )),25,425]} x={0} y={0} />

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

export default RankGraphLog

const RP2y = (RP) => (
  425 - (RP / 1000) * 30
)

const honor2x = function(honor){
  let x = (Math.log2(parseInt(honor))/16) * 900 - 300
  if(honor < 100 ){ x = 20 + (honor / 100) * 53 }
  return x
}

const xAxis = [0.1,0.25,0.5,1,2,5,25,50,100,250,500,1000]
const yAxis = [1,2,3,4,5,6,7,8,9,10,11,12,13]
