import React, {Component}  from 'react'
import RankLine from './konvaRank'

export default class Calc extends Component {
  constructor (props) {
    super(props)
    const defaults = {honor: 50000, rank: 8}
    const defaultsCalculate = this.calculate(defaults)
    this.state = {...defaultsCalculate, ...defaults}
    this.handleHonor = this.handleHonor.bind(this)
    this.handleRank = this.handleRank.bind(this)
    this.calculate = this.calculate.bind(this)
  }


  handleHonor (e) {
    this.setState({honor:e.target.value},()=>this.setState(this.calculate))
  }
  handleRank (e) {
    this.setState({rank:e.target.value},()=>this.setState(this.calculate))

  }

  calculate ({honor, rank}) {
    let activeBracket = this.props.brackets.find(function(bracket){return parseInt(bracket.floor) < parseInt(honor)})
    if (!activeBracket) { activeBracket = {PoolSize: 0, RP: 0, bracket: 0, ceiling: 0, floor: 0, top: 1} }
    let delta = this.calcDelta(honor, activeBracket)
    let RP = this.rank2RP(rank)
    let decay = Math.floor(RP * 0.20)
    let nextWeekRP = RP + activeBracket.RP + delta - decay
    let nextRank = this.RP2rank(nextWeekRP)
    return {bracket: activeBracket.bracket, floor: activeBracket.RP, RP, delta, decay, nextWeekRP, nextRank}
  }

  calcDelta (honor, activeBracket) {
    let delta = 0
    delta = Math.round((honor - activeBracket.floor) / (activeBracket.ceiling - activeBracket.floor) * 1000)
    if (delta > 1000) { delta = 1000 }
    if (activeBracket.bracket === 1) {
      delta = Math.round((honor - activeBracket.floor) / (activeBracket.ceiling - activeBracket.floor) * 400)
      if (delta > 400) { delta = 400 }
    }
    else if (activeBracket.bracket === 2) {
      delta = Math.round((honor - activeBracket.floor) / (activeBracket.ceiling - activeBracket.floor) * 600)
      if (delta > 600) { delta = 600 }
    }
    return delta
  }

  RP2rank (rp) {
    rp = parseInt(rp)
    let rank = (rp + 10000) / 5000
    if (rp < 2000) { rank = 1 + (rp / 2000) }
    else if (rp < 5000) { rank = 2 + ((rp - 2000) / 3000) }
    return Math.floor(rank * 100) / 100
  }
  rank2RP (rank) {
    rank = parseFloat(rank)
    let RP = (rank * 5000) - 10000
    if (rank < 1) { RP = 0 }
    else if (rank < 2) { RP = (rank - 1) * 2000 }
    else if (rank < 3) { RP = 2000 + (rank - 2) * 3000 }
    return Math.floor(RP)
  }

  render () {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <th>Honor</th>
              <td><input value={this.state.honor} type="number" onChange={this.handleHonor} /></td>
            </tr>
            <tr>
              <th>Rank</th>
              <td><input value={this.state.rank} type="number" onChange={this.handleRank} /></td>
            </tr>
            <tr>
              <th>Bracket</th>
              <td>{this.state.bracket}</td>
            </tr>
            <tr>
              <th>Rank Points</th>
              <td>{this.state.RP}</td>
            </tr>
            <tr>
              <th>RP floor earned</th>
              <td>+ {this.state.floor}</td>
            </tr>
            <tr>
              <th>Delta RP earned</th>
              <td>+ {this.state.delta}</td>
            </tr>
            <tr>
              <th>Decay</th>
              <td>- {this.state.decay}</td>
            </tr>
            <tr>
              <th>RP expected</th>
              <td>{this.state.nextWeekRP}</td>
            </tr>
            <tr>
              <th>Rank expected</th>
              <td>{this.state.nextRank}</td>
            </tr>
          </tbody>
        </table>
        <RankLine state={this.state} />
      </div>
    )
  }
}
