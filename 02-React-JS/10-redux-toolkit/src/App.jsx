// import React, { useState } from 'react'
// import Card from './components/Card'
// import Input from './components/Input'

// const App = () => {
//   const [val , setVal] = useState('')

//   const loginuser = (val) => {
//     console.log('user logged In' , val);
//     setVal(val)
//   }
//   return (
//     <>
//       <h1>Hello world! {val}</h1>
//       <Input placeholder={'enter your name'} label={'last name'} func={loginuser} />

//     </>
//   )
// }

// export default App

// import React, { useRef } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { addTodo, removeTodo } from './config/redux/reducers/todoSlice';

// const App = () => {
//   const input = useRef()

//   // data bulaya haa
//   const selector = useSelector(state => state.todos.todos);
//   console.log(selector);

//   // data bhejna ka liya
//   const dispatch = useDispatch()

//   const addData = (event) => {
//     event.preventDefault();
//     console.log(input.current.value);
//     dispatch(addTodo({
//       title: input.current.value,
//     }))
//   }


//   const deleteTodo = (index)=>{
//     console.log(index);
//     dispatch(removeTodo({
//       index
//     }))
    
//   }

//   return (
//     <>
//       <h1>Todo App</h1>
//       <form onSubmit={addData}>
//         <input type="text" placeholder='enter todo' ref={input} />
//         <button type='submit'>add Todo</button>
//       </form>
//       <ol>
//         {selector.length > 0 ? selector.map((item, index) => {
//           return <li key={item.id}>{item.title}
//             <button onClick={() => deleteTodo(index)}>delete</button>
//             <button>edit</button>
//           </li>
//         }) : <h1>No item found.</h1>}
//       </ol>
//     </>
//   )
// }

// export default App


import React from 'react'

const App = () => {
  return (
    <div>App</div>
  )
}

export default App