import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('red');

  // add count
  const addCount = () => {
    if(count >=20){
      setCount(0);
    }else{
    setCount(count + 1);
    }
    console.log('addCount', count);
  }

  // remove count
  const removeCount = () => {
    setCount(count+1);
    console.log('removeCount', count);
  }

  return (
    <>
    <div className='w-full h-full duration-200 p-20' style={{backgroundColor:color}}>
    <h1 className='text-white'>Simple React Counter</h1>
      <h2 className='text-2xl my-4 text-white'>Counter : {count}</h2>

      <button onClick={addCount}>Add Count</button>&nbsp;&nbsp;&nbsp;
      <button onClick={removeCount}>Remove Count</button>

      <div className='fixed flex flex-wrap justify-center bottom-12 px-2'>
        <div className='flex flex-wrap justify-center gap-2 shadow-lg bg-white px-3 py-2 rounded-xl'>
          <button onClick={() => setColor("red")} className='outline-none px-10 py-2 text-white rounded-full shadow-l' style={{backgroundColor:"red"}}>Red</button>
          <button onClick={() => setColor("green")} className='outline-none px-10 py-2 text-white rounded-full shadow-l' style={{backgroundColor:"green"}}>Green</button>
          <button onClick={() => setColor("blue")} className='outline-none px-10 py-2 text-white rounded-full shadow-l' style={{backgroundColor:"blue"}}>Blue</button>
          <button onClick={() => setColor("orange")} className='outline-none px-10 py-2 text-white rounded-full shadow-l' style={{backgroundColor:"orange"}}>Orange</button>
          <button onClick={() => setColor("orchid")} className='outline-none px-10 py-2 text-white rounded-full shadow-l' style={{backgroundColor:'orchid'}}>Orchid</button>
          <button onClick={() => setColor("black")} className='outline-none px-10 py-2 text-white rounded-full shadow-l' style={{backgroundColor:"black"}}>Black</button>
          <button onClick={() => setColor("purple")} className='outline-none px-10 py-2 text-white rounded-full shadow-l' style={{backgroundColor:"purple"}}>Purple</button>
          <button onClick={() => setColor("olive")} className='outline-none px-10 py-2 text-white rounded-full shadow-l' style={{backgroundColor:"olive"}}>Olive</button>

        </div>
      </div>
    </div>
    </>
  )
}

export default App
