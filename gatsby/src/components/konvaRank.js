import React from 'react'
import { Stage, Layer, Rect, Text, Line } from 'react-konva'

const RankLine = (props) => (
  <Stage width={960} height={300}>
    <Layer>
      <Text text='Ranking Points (RP, lower) required per rank (upper)' fill='yellow' />
      <Rect
        x={5}
        y={60}
        width={910}
        height={1}
        fill='yellow'
      />
      {brackets.map((bracket, i) => (
        <Rect
          x={5 + (bracket * 14)}
          y={55}
          width={1}
          height={10}
          fill='yellow'
        />
      ))}
      {brackets.map((bracket, i) => (
        <Text
          x={(bracket * 14)}
          y={65}
          text={bracket + 'k'}
          fill='yellow'
        />
      ))}
      {bracketsShift.map((bracket, i) => (
        <Text
          x={bracket}
          y={45}
          text={(i + 1)}
          fill='yellow'
        />
      ))}

      <Line
        x={5}
        y={15}
        points={[
          (props.state.RP / 1000) * 14, 45,
          middlePoint((props.state.RP / 1000) * 14, ((props.state.RP - props.state.decay) / 1000) * 14), 0,
          ((props.state.RP - props.state.decay) / 1000) * 14, 45,
          middlePoint((props.state.RP / 1000) * 14, ((props.state.RP - props.state.decay) / 1000) * 14), 3]}
        tension={1}
        closed
        fill='red'
      />
      <Line
        x={5}
        y={15}
        points={[
          ((props.state.RP - props.state.decay) / 1000) * 14 - 5, 37,
          ((props.state.RP - props.state.decay) / 1000) * 14, 45,
          ((props.state.RP - props.state.decay) / 1000) * 14 + 5, 37]}
        tension={0.2}
        closed
        fill='red'
      />

      <Line
        x={5}
        y={60}
        points={[
          ((props.state.RP - props.state.decay) / 1000) * 14, 0,
          middlePoint(((props.state.RP - props.state.decay) / 1000) * 14, ((props.state.nextWeekRP) / 1000) * 14), 55,
          ((props.state.nextWeekRP) / 1000) * 14, 0,
          middlePoint(((props.state.RP - props.state.decay) / 1000) * 14, ((props.state.nextWeekRP) / 1000) * 14), 58]}
        tension={1}
        closed
        fill='green'
      />

      <Line
        x={5}
        y={60}
        points={[
          ((props.state.nextWeekRP) / 1000) * 14 - 5, 10,
          ((props.state.nextWeekRP) / 1000) * 14, 1,
          ((props.state.nextWeekRP) / 1000) * 14 + 5, 10]}
        tension={0.2}
        closed
        fill='green'
      />
    </Layer>
  </Stage>
)

export default RankLine

const brackets = [0, 2, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65]
const bracketsShift = [15, 50, 105, 175, 245, 315, 385, 455, 525, 595, 665, 735, 800, 875]
const middlePoint = (first, second) => (
  (first + second) / 2
)
