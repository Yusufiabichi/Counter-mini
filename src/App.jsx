import { useState } from 'react'
function App() {
  const [counter, setCounter] = useState(0);
  const subCount = ()=>{
    checkCount();
  }
  const addCount = ()=>{
    setCounter(counter+1);
  }
  const resetCount = ()=>{
    setCounter(0);
  }
  const checkCount = ()=>{
    if(counter === 0){
      alert("You've reached your limit");
    }else if(counter >=1){
      setCounter(counter-1);
    }
  }

  return (
    <>
      <div className="counter-box">
        <h1>Mini Counter project</h1>
        <h2>Count is: {counter}</h2>
        <button onClick={()=> subCount()}>Decrease</button>
        <button onClick={()=> resetCount()}>Reset</button>
        <button onClick={()=> addCount()}>Increase</button>
      </div>
    </>
  )
}

export default App
