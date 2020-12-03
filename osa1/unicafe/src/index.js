import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad
  const average = (good - bad) / all
  const positive = good/all * 100
  if (all === 0) {
    return <div>No feedback given</div>
  } else {
  return (
    <table>
      <tbody>
        <StatisticLine text="Good" value = {good} />
        <StatisticLine text="Neutral" value = {neutral} />
        <StatisticLine text="Bad" value = {bad} />
        <StatisticLine text="All" value = {all} />
        <StatisticLine text="Average" value = {average} />
        <StatisticLine text="Positive" value = {positive + ' %'} />
      </tbody>
    </table>
  )
  }
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood(good + 1)

  const handleNeutral = () => setNeutral(neutral + 1)

  const handleBad = () => setBad(bad + 1)

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={handleGood} text={'Good'}/>
      <Button handleClick={handleNeutral} text={'Neutral'}/>
      <Button handleClick={handleBad} text={'Bad'}/>
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)