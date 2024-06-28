import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  


  const len = anecdotes.length;

  const points = new Array(len).fill(0);
  

  const [votes, setVotes] = useState(points);

  const changeAnecdote = () => {
    setSelected(Math.floor(Math.random() * (7 - 0 + 1)) + 0)
  }

  const [maxAnecdote, setAnecdote] = useState(anecdotes[0])

  const handleVote = () => {
    const copy = [...votes]
    copy[selected]+=1
    setVotes(copy)
    let maxIndex = 0;

      let maxEl = Math.max(...copy);

      for (let index = 0; index < copy.length; index++) {
        if(copy[index] === maxEl) {
          maxIndex = index;
          break;
        }
      }
      setAnecdote(anecdotes[maxIndex])
  }
  

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <p>has {votes[selected]} votes</p>
      <div>
        <button onClick={handleVote}>vote</button>
        <button onClick={changeAnecdote}>next anecdote</button>
      </div>
      <h1>Anecdote with most votes</h1>
      <div>
        {maxAnecdote}
      </div>
    </div>
  )
}

export default App