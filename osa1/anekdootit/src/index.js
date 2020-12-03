import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ eventHandler, selected, text }) => {
  console.log(selected)
  return (
    <button onClick={eventHandler}>
      {text}
    </button>
  )
}

const Header = ({ header }) => <h1>{header}</h1>


const Anecdote = ({ anecdote, votes }) => {
  return (
    <div>
      <p>{anecdote}</p>
      <p>has {votes} votes</p>
    </div>
  )
}

const App = ({ anecdotes, votes }) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(votes)
  const [highest, setHighest] = useState(0)

  const newAnecdote = () => setSelected(Math.floor(Math.random() * (anecdotes.length)))

  const vote = () => {
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
    setHighest(copy.reduce((iMax, x, i, arr) => x > copy[iMax] ? i : iMax, 0))
    console.log(highest)
  }

  return (
    <div>
      <Header header="Anecdote of the day" />
      <Anecdote anecdote={anecdotes[selected]} votes={points[selected]} />
      <p><Button eventHandler={newAnecdote} selected={selected} text='Next anecdote'/>
      <Button eventHandler={vote} text='Vote'/></p>
      <Header header="Anecdote with most votes" />
      <Anecdote anecdote={anecdotes[highest]} votes={points[highest]} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const votes = Array(anecdotes.length).fill(0)

ReactDOM.render(
  <App anecdotes={anecdotes} votes={votes} />,
  document.getElementById('root')
)