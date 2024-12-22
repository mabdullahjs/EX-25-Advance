import axios from 'axios';
import React, { useEffect, useState } from 'react'

const App = () => {
  const [input , setInput] = useState('')
  const [description , setDescription] = useState('')
  const [todo , setTodo] = useState(null)


  useEffect(()=>{
    async function getData(){
      const response = await axios('https://cooing-maye-mabdullahjs-2d90978c.koyeb.app/api/v1/todo')
      console.log(response.data)
      setTodo(response.data.data)
    }

    getData()
  } , [])

  const addTodo = async (event)=>{
    event.preventDefault();
    console.log(input);

    const response = await axios.post('https://cooing-maye-mabdullahjs-2d90978c.koyeb.app/api/v1/todo' , {
      title: input,
      description
    })
    
    console.log(response)
    setTodo([...todo , response.data.data])

  }


  const editTodo = async (id , index)=>{
    const updated = prompt('enter updated val')
    const response = await axios.put(`https://cooing-maye-mabdullahjs-2d90978c.koyeb.app/api/v1/todo/${id}` , {
      title: updated
    })
    todo[index].title = updated
    setTodo([...todo])
    console.log(response)
  }

  const deleteTodo = async (id , index)=>{
    const response = await axios.delete(`https://cooing-maye-mabdullahjs-2d90978c.koyeb.app/api/v1/todo/${id}`)
    todo.splice(index , 1)
    setTodo([...todo])
    console.log(response)
  }
  return (
    <>
    <h1>Todo App</h1>

    <form onSubmit={addTodo}>
      <input onChange={e => setInput(e.target.value)} type="text" placeholder='enter your todo' value={input} /> <br /><br />
      <textarea onChange={e => setDescription(e.target.value)} value={description} placeholder='enter description'></textarea>
      <button type='submit'>Add Todo</button>
    </form>

    <ul>
      {todo ? todo.map((item , index) => {
        return <li key={item._id}>{item.title}
        <button onClick={()=> deleteTodo(item._id , index)}>delete</button>
        <button onClick={()=> editTodo(item._id , index)}>edit</button>
        </li>
      }): <h1>Loading...</h1>}
    </ul>
    </>
  )
}

export default App