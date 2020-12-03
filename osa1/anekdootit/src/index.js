import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({eventHandler, selected, text}) => {
  console.log(selected)
  return (
    <button onClick={eventHandler}>
      {text}
    </button>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const points = Array(anecdotes.length).fill(0)

  const newAnecdote = () => setSelected(Math.floor(Math.random() * (anecdotes.length)))

  const vote = () => {
    return (
      anecdotes[selected].votes += 1
    )
  }

  return (
    <div>
      <p>{anecdotes[selected].anecdote}</p>
      <p>has {anecdotes[selected].votes} votes</p>
      <p><Button eventHandler={newAnecdote} selected={selected} text='Next anecdote'/>
      <Button eventHandler={vote} text='Vote'/></p>
      
    </div>
  )
}

const anecdotes = [
  {
    anecdote: 'If it hurts, do it more often',
    votes: 0
  },
  {
    anecdote: 'Adding manpower to a late software project makes it later!',
    votes: 0
  },
  {
    anecdote: 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    votes: 0
  },
  {
    anecdote: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    votes: 0
  },
  {
    anecdote: 'Premature optimization is the root of all evil.',
    votes: 0
  },
  {
    anecdote: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    votes: 0
  }
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)