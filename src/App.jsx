import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // add count
  const addCount = () => {
    let counter = count + 1;
    setCount(counter);
    console.log('addCount', count);
  }

  // remove count
  const removeCount = () => {
   let counter = count - 1;
    setCount(counter);
    console.log('removeCount', count);
  }

  return (
    <>
      <h1>Simple React Counter</h1>
      <h2>Counter : {count}</h2>

      <button onClick={addCount}>Add Count</button>
      <button onClick={removeCount}>Remove Count</button>
      
    </>
  )
}

export default App
