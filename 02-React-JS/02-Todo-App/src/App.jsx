// import { useState } from "react"

// function App() {
//   const [num, setNum] = useState(0)


//   const addCounter = () => {
//     setNum(num + 1)
//   }
//   const lessCounter = () => {
//     if (num === 0) {
//       alert("nahi hoskta")
//       return
//     }
//     setNum(num - 1)
//   }

//   return (
//     <>
//       <h1>Hello world! {num}</h1>
//       <button onClick={addCounter}>Add</button>
//       <h1>{num}</h1>
//       <button onClick={lessCounter}>less</button>
//       <p>{num > 5 ? 'bara hogaye ho' : 'bacha ho abhi'}</p>

//     </>
//   )
// }

// export default App




{/* <input onChange={(e)=> setPassword(e.target.value)} value={password} type="password" placeholder="enter password" /> */ }






import { useState } from 'react'
// import { useRef, useState } from "react";

// function App() {

//   const input = useRef()
//   const [todo, setTodo] = useState([])

//   const addTodo = (event) => {
//     event.preventDefault()
//     console.log(input.current.value);
//     todo.push({title: input.current.value , id: Date.now()})
//     setTodo([...todo])
//     console.log(todo);
//     input.current.value = ""
//   }

//   const deleteTodo = (index)=>{
//     console.log('todo deleted' , index);
//     todo.splice(index , 1);
//     setTodo([...todo]);

//   }

//   return (
//     <>
//       <h1>Todo App</h1>
//       <form onSubmit={addTodo}>
//         <input type="text" placeholder="enter todo" ref={input} />
//         <button type="submit">Add Todo</button>
//       </form>
//       <ol>
//         {todo.length > 0 ? todo.map((item , index) => {
//           return <li key={index}>{item}
//           <button onClick={()=> deleteTodo(index)}>Delete</button>
//           </li>
//         }) : <h1>No item found...</h1>}
//       </ol>
//     </>
//   )
// }

// export default App











// use state kehta haa rendering wala saara mamla ma khud dekhonga..
// react ka undar map use krta waqt jo item render kr rha ho uska undar unique key prop dena ha










import './app.css'

function App() {
  const [color , setColor] = useState('red')
  return (
    <>
      {/* <h1 className="head">Hello world</h1> */}
      <h1 style={{
        backgroundColor: color,
        color: 'white',
        textAlign: 'center'
      }}>Hello world</h1>
      <button onClick={()=> setColor('red')}>Red</button>
      <button onClick={()=> setColor('green')}>Green </button>
      <button onClick={()=> setColor('blue')}>Blue</button>
    </>
  )
}
export default App



























// aik simple state banaigi empty array ka saath. user sa form ma value loga us array ka undar {title: userinputvalue , id: Date.now()}






// usestate
// use ref
// conditional rendering
// todo app




