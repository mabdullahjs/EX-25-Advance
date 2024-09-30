import { useState } from "react";

function App() {

  let [num, setNum] = useState(0)

  function addCounter() {
    console.log("counter added");
    setNum(num + 1)
    console.log(num);
  }
  return (
    <>
      <h1>Hello {num} world {num}</h1>
      <h1>{num}</h1>
      <button onClick={addCounter}>add Counter {num}</button>
    </>
  )
}

export default App