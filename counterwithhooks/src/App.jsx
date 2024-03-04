
import { useState } from 'react';
import './App.css'

function App() {
  let [counter,setCounter]= useState(1)    //const bhi use krte h
  // let counter=1

  const addValue =()=>{
    if(counter < 20){
      setCounter(counter= counter+1)
    }
     console.log("counter is ",counter);

  }
  const removeValue =()=>{
    if(counter >0){
      setCounter(counter-1)

    }
  }

  return (
    <>
     <h1>WELCOME</h1>
     <h2>Counter Value: {counter}</h2>
     <button onClick={addValue}>Add Value</button>
     <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
